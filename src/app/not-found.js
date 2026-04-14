'use client'
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col  m-auto bg-white text-center px-4">
      
      <h1 className="text-6xl font-bold mb-4 text-[#244D3F]">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2 text-[#244D3F]">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:opacity-90 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;