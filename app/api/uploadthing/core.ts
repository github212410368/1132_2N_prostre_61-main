import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { auth } from '@/auth';
import prisma from '@/lib/prisma'; // 使用全局 Prisma 实例
import type { PrismaClient } from '@prisma/client';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: '4MB' },
  })
    .middleware(async () => {
      try {
        const session = await auth();
        if (!session?.user?.id) throw new UploadThingError('Unauthorized');
        return { userId: session.user.id };
      } catch (error) {
        console.error('Authentication error:', error);
        throw new UploadThingError('Authentication failed');
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        // 数据验证
        if (!file.url || !file.key || !file.name) {
          console.error('Invalid file data received:', file);
          throw new UploadThingError('Invalid file data');
        }

        // 使用事务处理
        await prisma.$transaction(async (tx: PrismaClient) => {
          await tx.file.create({
            data: {
              url: file.url,
              key: file.key,
              name: file.name,
              userId: metadata.userId,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          });
        });

        console.log(`File uploaded successfully by ${metadata.userId}:`, {
          fileName: file.name,
          fileUrl: file.url
        });

        return { 
          success: true,
          uploadedBy: metadata.userId,
          fileUrl: file.url,
          fileKey: file.key // 返回 key 供后续操作使用
        };
      } catch (error) {
        console.error('Database operation failed:', {
          error,
          userId: metadata.userId,
          fileInfo: { name: file.name, size: file.size }
        });

        // 构造错误响应
        const errorMessage = error instanceof Error ? error.message : 'Database operation failed';
        return { 
          success: false,
          error: 'Failed to save file info',
          details: errorMessage,
          timestamp: new Date().toISOString()
        };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;