"use client";
import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const isActive = (path) =>
    pathname === path ? "text-teal-600 font-semibold" : "hover:text-teal-600";

  return (
    <header>
      {/* TOP BAR */}
      <div className="bg-[#1c2b32] text-white text-sm lg:block md:hidden hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mx-auto container px-6 md:px-12 py-3">
          {/* LEFT INFO */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>256 214 203 215</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>258 Helano Street, New York</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Mon - Sat: 8:00 - 15:00</span>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="flex items-center gap-4">
            <User size={18} className="cursor-pointer" />
            <span className="cursor-pointer hidden sm:block">
              Login / Register
            </span>

            {/* SOCIAL ICONS */}
            <div className="hidden md:flex items-center gap-3 text-lg">
              <FaFacebook />
              <FaInstagram />
              <FaBehance />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="w-full py-4 px-6 md:px-12 flex items-center justify-between mx-auto container">
        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo-1.png"
            alt="logo"
            width={80}
            height={80}
            className="w-35 h-auto"
          />
        </div>

        {/* CENTER — SEARCH (HIDDEN ON MOBILE) */}
        <div className="hidden lg:block md:flex flex-grow max-w-[600px] w-full mx-6">
          <div className="bg-[#f4f7f9] rounded-full flex items-center pl-5 py-1 gap-4 w-full">
            <select className="bg-transparent outline-none text-gray-600">
              <option>Categories</option>
            </select>

            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow bg-transparent outline-none"
            />

            <button className="bg-teal-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
              <Search size={16} /> Search
            </button>
          </div>
        </div>

        {/* RIGHT — ICONS */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <Heart size={22} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div className="relative">
            <ShoppingCart size={22} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <button className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-full font-medium">
            Start Free Trial
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="md:hidden px-6 pb-3 hidden">
        <div className="bg-[#f4f7f9] rounded-full flex items-center pl-5 py-2 gap-3">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-grow bg-transparent outline-none"
          />
          <Search size={18} className="text-gray-600" />
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="w-full border-t border-gray-200 bg-white">
        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 mx-auto container px-12 py-4 text-gray-700 font-semibold text-sm">
          <li className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl text-[#07A698]">
              <BiSolidCategory />
            </span>
            CATEGORIES
          </li>

          <Link href="/" className={isActive("/")}>
            HOME
          </Link>
          <Link href="/courses" className={isActive("/courses")}>
            COURSES
          </Link>
          <Link href="/shop" className={isActive("/shop")}>
            SHOP
          </Link>
          <Link href="/about" className={isActive("/about")}>
            ABOUT
          </Link>
          <Link href="/blog" className={isActive("/blog")}>
            BLOG
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            CONTACT
          </Link>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        {openMenu && (
          <ul className="md:hidden flex flex-col gap-3 px-6 py-4 text-gray-700 text-[15px] font-medium bg-white shadow-md">
            <Link href="/" className={isActive("/")}>
              HOME
            </Link>
            <Link href="/courses" className={isActive("/courses")}>
              COURSES
            </Link>
            <Link href="/shop" className={isActive("/shop")}>
              SHOP
            </Link>
            <Link href="/about" className={isActive("/about")}>
              ABOUT
            </Link>
            <Link href="/blog" className={isActive("/blog")}>
              BLOG
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              CONTACT
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
}
