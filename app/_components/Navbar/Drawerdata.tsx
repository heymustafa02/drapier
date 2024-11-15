import React from "react";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '#services', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Project', href: '#project', current: false },
  { name: 'Help', href: '/', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'px-2 py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <button className="bg-white w-full text-blue-500 border border-blue-400 font-medium py-2 px-4 rounded">
            <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink>
            </button>
           
            <RegisterLink> 
              <button className="bg-sky-100 w-full hover:bg-sky-500 hover:text-white text-black font-medium my-2 py-2 px-4 rounded">
                </button></RegisterLink>  
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
