"use client";

import { useTimeline } from "@/app/context/InstallTimelineProvider";
import Image from "next/image";

const Page = () => {
  const { timeline } = useTimeline();

  return (
    <div className="max-w-5xl mx-auto p-5 w-full">
      <h1 className="text-xl font-bold my-4">Timeline</h1>

      {timeline.length === 0 ? (
        <p className="text-center">No activity yet</p>
      ) : (
        timeline.map((item) => (
          <div key={item.id} className="p-3 bg-white shadow rounded mb-2 flex items-center gap-3">

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