"use client";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart, FiShoppingCart } from "react-icons/fi"; 

const TopNavigation = () => {
  return (
    <header className="w-full">
      <div className="bg-black text-white flex justify-between items-center px-26 py-6 text-md">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery -{" "}
          <span className="font-semibold text-amber-300">OFF 50%!</span>{" "}
          <Link href="#" className="underline ml-2">
            ShopNow
          </Link>
        </p>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>English</span>
          <FaChevronDown size={12} />
        </div>
      </div>
      <div className="flex justify-between items-center px-10 py-4">
        <p className="text-2xl font-bold">Exclusive</p>
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 rounded-md px-4 py-2 w-60"
            />
            <IoSearchOutline className="absolute right-3 top-3 text-gray-500 size-5" />
          </div>
          <Link href="/wishlist" className="hover:text-gray-600">
            <FiHeart size={22} />
          </Link>
          <Link href="/cart" className="hover:text-gray-600">
            <FiShoppingCart size={22} />
          </Link>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300"></div>
    </header>
  );
};
export default TopNavigation;