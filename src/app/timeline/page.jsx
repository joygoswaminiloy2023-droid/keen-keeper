"use client";

import { useTimeline } from "@/app/context/InstallTimelineProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Page = () => {
  const { timeline } = useTimeline();

const [sortingtype,setSortingtype]=useState("")
  
// filtering 

const Filtertimeline=sortingtype?timeline.filter(f=>f.type.toLowerCase()===sortingtype):timeline;

  return (
    <div className="max-w-7xl mx-auto w-full shadow-xl p-10 my-auto rounded-3xl ">
  
      <h1 className="text-5xl font-bold text-center my-4 md:text-left ">Timeline</h1>
<div className="dropdown flex justify-center md:justify-start w-full mb-10">
  <div
    tabIndex={0}
    role="button"
    className="btn m-1 flex items-center gap-2 bg-white text-black"
  >
    Filter Timeline <FaAngleDown />
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content menu bg-white  text-black rounded-box  w-52 p-2 shadow"
  >
    <li onClick={()=>setSortingtype("call")}>
      <a  className="hover:bg-gray-100">Call</a>
    </li>
    <li onClick={()=>setSortingtype("text")}>
      <a className="hover:bg-gray-100">Text</a>
    </li>
    <li onClick={()=>setSortingtype("video")}>
      <a className="hover:bg-gray-100">Video</a>
    </li>
  </ul>
</div>

      {timeline.length === 0 ? (
        <p className="text-center font-bold text-4xl my-5">No activity yet</p>
      ) : (
        Filtertimeline.map((item) => (
          <div key={item.id} className="p-3 bg-gray-100 shadow-lg rounded mb-2 flex items-center gap-3">

            {/* ICON */}
<Image
  src={
    item.type === "Call"? "/call.png": item.type === "Text"? "/text.png": "/video.png"}
  width={40}
  height={40}
  alt={item.type}
/>

            <div>
              <p className="font-semibold">
                {item.type} with {item.name}
              </p>
              <p className="text-xs opacity-60">{item.time}</p>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Page;