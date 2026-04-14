import { Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Profile_card = ( {friend}) => {
    
    return (
             <div  className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all border border-gray-100 ">

      {/* avatar */}
     <div className="flex flex-col items-center text-center space-y-2">
  <div className="relative w-20 h-20 rounded-full overflow-hidden">
    <Image
      src={friend.picture}
      alt={friend.name}
      fill
      className="object-cover"
    />
  </div>

        <h2 className="font-semibold text-lg">{friend.name}</h2>

<span
          className={`text-xs px-3 py-1 rounded-full mt-2 font-medium ${
            friend.status === "overdue"
              ? "bg-red-100 text-red-600"
              : friend.status === "on-track"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {friend.status}
        </span>

        <div className="flex flex-wrap justify-center gap-2 mt-2 ">
          {friend.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-green-100 rounded-full text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="opacity-60 flex flex-col items-center justify-center">
<p className="text-md">{`"${friend.bio}"`}</p>
<p className="flex gap-2 text-sm "><Mail></Mail>{friend.email}</p>
</div>
      </div>
    </div>
    );
};

export default Profile_card;