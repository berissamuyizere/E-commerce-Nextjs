"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-lg font-bold mb-4">Exclusive</h2>
          <p className="mb-4">Subscribe</p>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          <div className="flex border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black px-3 py-2 w-full outline-none text-gray-300"
            />
            <button className="bg-gray-700 px-4">➤</button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className="text-gray-400">
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-gray-400">exclusive@gmail.com</p>
          <p className="mt-2 text-gray-400">+88015-88888-9999</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Login / Register</Link></li>
            <li><Link href="#">Cart</Link></li>
            <li><Link href="#">Wishlist</Link></li>
            <li><Link href="#">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Link</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms Of Use</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Download App</h2>
          <p className="text-gray-400 text-sm mb-3">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3">
            <Image src="/images/codeqr.svg" alt="QR Code" width={80} height={80} className="bg-white"/>
            <div className="flex flex-col gap-2">
              <Image src="/googleplay.png" alt="Google Play" width={120} height={40} />
              <Image src="/appstore.png" alt="App Store" width={120} height={40} />
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-gray-400">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
