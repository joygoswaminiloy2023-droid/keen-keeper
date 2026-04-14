"use client";

import { createContext, useContext, useState } from "react";

export const InstallTimelineContext = createContext();

const InstallTimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimeline = (type, name = "Someone") => {
    const newItem = {
      id: Date.now(),
      type,
      name,
      time: new Date().toLocaleString(),
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <InstallTimelineContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </InstallTimelineContext.Provider>
  );
};

export default InstallTimelineProvider;

export const useTimeline = () => useContext(InstallTimelineContext);