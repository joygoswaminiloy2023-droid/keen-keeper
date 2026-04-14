import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const F_card = ({f}) => {
    console.log(f)
    return (
  <Link href={`../${f.id}`} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all border border-gray-100">

      
     <div className="flex flex-col items-center text-center space-y-2">
  <div className="relative w-20 h-20 rounded-full overflow-hidden">
    <Image
      src={f.picture}
      alt={f.name}
      fill
      className="object-cover"
    />
  </div>


     
        <h2 className="font-semibold text-lg">{f.name}</h2>

      
        <p className="text-xs text-gray-400">
          {f.days_since_contact} days ago
        </p>

        {/* tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {f.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

    
        <span
          className={`text-xs px-3 py-1 rounded-full mt-2 font-medium ${
            f.status === "overdue"
              ? "bg-red-100 text-red-600"
              : f.status === "on-track"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
   
        </span>
      </div>
    </Link>
    );
};

export default F_card;