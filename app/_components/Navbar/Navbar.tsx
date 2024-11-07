import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "#services", current: false },
  { name: "About", href: "#about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
      <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
    <div className="relative flex h-20 items-center justify-between">
        {/* LOGO */}
        <div className="flex-shrink-0">
            <img
                className="block h-16 w-auto lg:hidden" // Smaller version for mobile
                src={"/logo-name.svg"}
                alt="logo"
            />
            <img
                className="hidden h-auto w-auto lg:block pt-11" // Larger version for larger screens
                src={"/logo-name.svg"}
                alt="logo-name"
            />
        </div>

        {/* LINKS */}
        <div className="flex-1 text-center">
            <div className="hidden lg:block m-auto">
                <div className="flex justify-center space-x-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? "text-black hover:opacity-100"
                                    : "hover:text-black hover:opacity-100",
                                "px-3 py-4 text-lg font-normal opacity-75 space-links"
                            )}
                            aria-current={item.href ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        {/* LOGIN DIALOG */}
        <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
                <button type="button" className="text-lg text-blue font-medium">
                    <div>
                        <LoginLink postLoginRedirectURL="/dashboard">
                            Login
                        </LoginLink>
                    </div>
                </button>
            </div>

            {/* REGISTER DIALOG */}
            <div className="hidden lg:block">
            <RegisterLink>
                <button className="text-blue-500 text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-sky-400 hover:text-white hover:bg-sky-600">
                    Register 
                </button></RegisterLink>
            </div>

            {/* DRAWER ICON */}
            <div className="block lg:hidden">
                <Bars3Icon
                    className="block h-6 w-6"
                    aria-hidden="true"
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </div>

        {/* DRAWER LINKS DATA */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
        </Drawer>
    </div>
</div>

      </>
    </Disclosure>
  );
};

export default Navbar;
