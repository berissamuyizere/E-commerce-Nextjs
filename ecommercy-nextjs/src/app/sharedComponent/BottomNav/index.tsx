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
            <Image src="/images/codeqr.svg" alt="QR Code" width={80} height={90} className="bg-white" />
            <div className="w-40 h-12 mb-7">
              <div className=" border rounded flex gap-2 p-0.2">
                <Image
                  src={'/images/apple.svg'}
                  alt="Play Store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="inline-block w-7 h-5 my-2" />
                <div >
                  <span className="text-[7px] ">GET IT ON</span>
                  <p className="text-[10px]"> Google Play</p>
                </div>
              </div>
              <div className="flex gap-2 border rounded mt-3 p-0.2">
                <Image
                  src={'/images/playstore.png'}
                  alt="Play Store"
                  width={0}
                  height={0}
                  className="inline-block w-7 h-5 my-2"/>
                <div >
                  <span className="text-[7px]">DOWNLOAD ON THE</span>
                  <p className="text-[10px]"> App Store</p>
                </div>
              </div>
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
