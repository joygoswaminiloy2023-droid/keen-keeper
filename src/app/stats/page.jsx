"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTimeline } from "../context/InstallTimelineProvider";

const Page = () => {
  const { timeline } = useTimeline();

  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };

  timeline.forEach((item) => {
    const type = item.type.toLowerCase();

    if (type === "call") counts.call++;
    else if (type === "text") counts.text++;
    else if (type === "video") counts.video++;
  });

  const data = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video", value: counts.video },
  ];


  const COLORS = ["#7C3AED", "#1F4D3F", "#2F855A"]; 
  

  return (
    <div className="max-w-7xl m-auto space-y-5">
        <h1 className="text-5xl font-bold ">Friendship Analytics</h1>
    <div className=" max-w-7xl m-auto flex flex-col  justify-center  shadow-lg bg-[#F8FAFC] rounded-xl p-6 items-start">
      
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        By Interaction Type
      </h2>
    <div className="flex flex-col items-center justify-center  w-7xl bg-[#F8FAFC] rounded-xl p-6">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={80}       
          outerRadius={110}
          paddingAngle={5}        
          cornerRadius={10}      
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />

     
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          formatter={(value) => (
            <span className="text-gray-600">{value}</span>
          )}
        />
      </PieChart>
      </div>
    </div>
    </div>
  );
};

export default Page;