"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:text-left">
        Friendship Analytics
      </h1>

      
    

   
      <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] my-5 shadow-xl rounded-3xl ">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-10 mb-6 mx-5 text-center md:text-left">
        By Interaction Type
      </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="40%"
              outerRadius="50%"
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
                <span className="text-gray-600 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Page;