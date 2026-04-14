import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
         <footer className="bg-[#1F4D3A] text-white mt-10">

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center">

        {/* TITLE */}
    <Image 
    src="/logo-xl.png"
    width={300}
    height={61}
    alt=''
    ></Image>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-300 my-2 ">
Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <p>Social Links</p>
        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-4">
          <a className="w-8 h-8 flex items-center justify-center bg-white text-[#1F4D3A] rounded-full">
            <FaFacebookF />
          </a>
          <a className="w-8 h-8 flex items-center justify-center bg-white text-[#1F4D3A] rounded-full">
            <FaLinkedinIn />
          </a>
          <a className="w-8 h-8 flex items-center justify-center bg-white text-[#1F4D3A] rounded-full">
            <FaXTwitter />
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-200">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-2 md:mt-0">
            <a className="hover:underline">Privacy Policy</a>
            <a className="hover:underline">Terms of Service</a>
            <a className="hover:underline">Cookies</a>
          </div>

        </div>
      </div>

    </footer>
    );
};

export default Footer;