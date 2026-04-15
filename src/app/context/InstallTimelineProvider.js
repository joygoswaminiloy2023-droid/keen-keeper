"use client";

import { MessageCircle, Phone, Video } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const InstallTimelineContext = createContext();

const InstallTimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

 const addTimeline = (type, name = "") => {
  const newItem = {
    id: Date.now(),
    type,
    name,
    time: new Date().toLocaleString(),
  };

  setTimeline((prev) => [newItem, ...prev]);

if (type === "Call") {
  toast.success(
    <div className="flex items-center gap-2">
      <Phone size={18} />
      Calling {name}
    </div>
  );
}

if (type === "Text") {
  toast.success(
    <div className="flex items-center gap-2">
      <MessageCircle size={18} />
      Text sent to {name}
    </div>
  );
}

if (type === "Video") {
  toast.success(
    <div className="flex items-center gap-2">
      <Video size={18} />
      Video call with {name}
    </div>
  );
}
};

  return (
    <InstallTimelineContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </InstallTimelineContext.Provider>
  );
};

export default InstallTimelineProvider;

export const useTimeline = () => useContext(InstallTimelineContext);