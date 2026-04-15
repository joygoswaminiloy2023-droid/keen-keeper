"use client";

import { useTimeline } from "@/app/context/InstallTimelineProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Page = () => {
  const { timeline } = useTimeline();

const [filtertype,setFiltertype]=useState("");

const [search, setSearch] = useState("");
const [filteredtimeline,setFilteredtimeline]=useState([]);



useEffect(() => {
  let data = [...timeline];

  const getTime = (t) => {
    const parsed = new Date(t);
    return isNaN(parsed.getTime()) ? 0 : parsed.getTime();
  };

  // FILTER
  if (filtertype) {
    data = data.filter(
      f => f.type.toLowerCase() === filtertype.toLowerCase()
    );
  }

  // SEARCH
  if (search) {
    data = data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }


  

  setFilteredtimeline(data);
}, [filtertype,timeline, search]);

console.log(timeline.map(t => t.time));

  return (
    <div className="max-w-7xl mx-auto w-full shadow-xl p-10 my-auto rounded-3xl ">
  
      <h1 className="text-5xl font-bold text-center my-4 md:text-left ">Timeline</h1>

<div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">

  {/* FILTER */}
  <div className="dropdown">
    <div
      tabIndex={0}
      role="button"
      className="btn flex items-center gap-2 bg-white text-black"
    >
      Filter Timeline <FaAngleDown />
    </div>

    <ul
      tabIndex={0}
      className="dropdown-content menu bg-white text-black rounded-box w-52 p-2 shadow z-50"
    >
      <li onClick={() => setFiltertype("")}>
        <a className="hover:bg-gray-100">All</a>
      </li>
      <li onClick={() => setFiltertype("call")}>
        <a className="hover:bg-gray-100">Call</a>
      </li>
      <li onClick={() => setFiltertype("video")}>
        <a className="hover:bg-gray-100">Video</a>
      </li>
      <li onClick={() => setFiltertype("text")}>
        <a className="hover:bg-gray-100">Text</a>
      </li>
    </ul>
  </div>

  {/* SEARCH */}
  <div className="flex flex-1">
    <div className="join w-full">
      <div className="w-full">
<input
  type="text"
  placeholder="Search By Name..."
  className="input bg-white text-black w-full join-item border border-gray-300 focus:border-black"
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }}
/>
      </div>
      <button  className="btn btn-neutral join-item">Search</button>
    </div>
  </div>



</div>


      {filteredtimeline.length === 0 ? (
        <p className="text-center font-bold text-4xl my-5">No activity yet</p>
      ) : (
        filteredtimeline.map((item) => (
          <div key={item.id} className="p-3 bg-gray-100 shadow-lg rounded mb-2 flex items-center gap-3">

           
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
      
<p className="text-xs opacity-60">
  {new Date(item.time).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</p>

            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Page;