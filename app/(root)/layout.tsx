import Headers_61 from "@/components/ui/shared/header_61";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "tku_61",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">
        <Headers_61 />
        {children}
      </main>
    </div>
  );
}
