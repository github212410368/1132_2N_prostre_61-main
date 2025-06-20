import Link from "next/link";
import Image from "next/image";
import React from "react";
import { APP_NAME } from "@/lib/constans";
import {EllipsisVertical,ShoppingCart,User,UserIcon} from 'lucide-react'
import { Button } from "../../button";
import { ModeToggle_61 } from "./mode-toggle_61";
import Menu_xx from "./menu_61";
const Headers_61 = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              height={48}
              width={48}
              priority={true}
              alt={`${APP_NAME} logo`}
            />
          </Link>
        </div>
        <Menu_xx />
        {/* <div className='flex justify-end gap-3'>
          <Modetoggle_xx />
          <Button asChild variant='outline'>
            <Link href='/cart_xx'>
              <ShoppingCart /> Cart_xx
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div> */}
      </div>
    </header>
  );
};

export default Headers_61;
