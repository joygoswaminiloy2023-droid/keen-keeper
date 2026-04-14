'use client'

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">

      <h1 className="text-4xl font-bold mb-4 text-[#244D3F]">
        Something went wrong
      </h1>

      <p className="text-gray-500 mb-6">
        An unexpected error occurred. Please try again.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:opacity-90"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="px-6 py-3 border border-[#244D3F] text-[#244D3F] rounded-lg hover:bg-[#244D3F] hover:text-white transition"
        >
          Go Home
        </Link>
      </div>

    </div>
  );
};

export default ErrorPage;