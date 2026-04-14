import React from 'react';

const F_card = ({f}) => {
    console.log(f)
    return (
  <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all border border-gray-100">

      {/* avatar */}
      <div className="flex flex-col items-center text-center space-y-2">
        {/* <Image
          src={f.picture}
          alt={f.name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        /> */}

        {/* name */}
        <h2 className="font-semibold text-lg">{f.name}</h2>

        {/* last contact */}
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

        {/* status */}
        <span
          className={`text-xs px-3 py-1 rounded-full mt-2 font-medium ${
            f.status === "overdue"
              ? "bg-red-100 text-red-600"
              : f.status === "on-track"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {f.status}
        </span>
      </div>
    </div>
    );
};

export default F_card;