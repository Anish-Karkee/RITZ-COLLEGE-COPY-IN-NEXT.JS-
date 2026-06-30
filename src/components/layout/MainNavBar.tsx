
"use client";

import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo/logo-DJ.png"
const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Internship",
    href: "/internship",
  },
  {
    name: "Download Form",
    href: "/download-form",
  },
];

const MainNavBar = () => {
  return (
    <nav className="bg-white  shadow-sm border-b">
      <div className="w-full mx-auto px-15">
        <div className="flex w-full items-center justify-between h-18">
          {/* Logo */}
          <Link href="/">
            <Image
              src={LOGO}
              alt="College Logo"
              width={150}
              height={60}
              priority
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-29.25 text-xl  text-[#1100AB] ml-32">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-all duration-300 hover:text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;