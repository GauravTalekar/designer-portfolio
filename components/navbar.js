"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react"
import { HiBars3, HiOutlineXMark } from "react-icons/hi2"
import { usePathname } from "next/navigation"

import clsx from "clsx"

import links from "@/data/navigation"
import { data } from "@/data/site-details"
import Image from "next/image";

const NavBrand = () => {
  return (
    <Link href="/" aria-label="Navigate to the home page" className="flex items-center space-x-2 text-lg font-montserrat font-medium">
      <Image
        alt="GT"
        src={data.logoLink}
        width={68}
        height={68}
        className="h-10 w-auto rounded-md"
        priority // Ensure the logo is loaded quickly for better SEO
      />
      <span>{data.title}</span>
    </Link>
  )
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const path = usePathname();

  // Function to check if the current path matches the link URL or is a subpath
  const isActive = (url) => {
    return path === url || path.startsWith(`${url}/`);
  };

  return (
    <nav className="fixed top-0 w-full z-40 flex-none lg:z-50 bg-white text-shark-950 font-nunito shadow-md" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <NavBrand />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              aria-label="Open main menu"
            >
              <HiBars3 aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {links.map((item) => (
              <Link 
                key={item.title} 
                href={item.url} 
                className={clsx(
                  "font-semibold leading-6 hover:text-cerise-600 transition duration-300 ease-in", 
                  isActive(item.url) ? "text-cerise-600" : "text-gray-900"
                )}
                aria-current={isActive(item.url) ? "page" : undefined}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50 w-full overflow-y-auto bg-bone-white-50 text-shark-950 font-nunito">
          <div className="flex items-center justify-between h-20">
            <NavBrand />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              aria-label="Close menu"
            >
              <HiOutlineXMark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={clsx(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition duration-300 ease-in",
                      isActive(item.url) ? "text-cerise-600 bg-gray-50" : ""
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive(item.url) ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  )
}