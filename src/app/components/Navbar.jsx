'use client'

import { ChartSpline, Clock, Home } from 'lucide-react';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

const Navbar = () => {
  const path = usePathname();
const links = (
  <>
    <li>
      <Link
        href="/"
        className={`flex items-center gap-2 px-3 py-2 rounded ${
          path === "/" ? "bg-[#244D3F] text-white" : ""
        }`}
      >
        <Home size={18} /> Home
      </Link>
    </li>

    <li>
      <Link
        href="/timeline"
        className={`flex items-center gap-2 px-3 py-2 rounded ${
          path === "/timeline" ? "bg-[#244D3F] text-white" : ""
        }`}
      >
        <Clock size={18} /> Timeline
      </Link>
    </li>

    <li>
      <Link
        href="/stats"
        className={`flex items-center gap-2 px-3 py-2 rounded ${
          path === "/stats" ? "bg-[#244D3F] text-white" : ""
        }`}
      >
        <ChartSpline size={18} /> Stats
      </Link>
    </li>
  </>
);


  return (
    <div className="navbar bg-base-50 shadow-sm px-4 md:px-10 lg:px-20">

      {/* LEFT - LOGO */}
      <div className="flex-1 flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-30 h-10 object-contain"
        />
      </div>

      {/* MOBILE MENU */}
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
        {links}
          </ul>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
       {links}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;