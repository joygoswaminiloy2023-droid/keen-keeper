'use client';

import { InstallTimelineContext } from '@/app/context/InstallTimelineProvider';
import { MessageCircle, Phone, Video } from 'lucide-react';
import React, { useContext } from 'react';



const Profilebtn = ({friend}) => {
    const {addTimeline}= useContext(InstallTimelineContext);

    return (
       <div className="flex gap-3">

    <button onClick={()=>addTimeline("Call",friend.name)} className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer">
  <Phone className="w-5 h-5" />
  <span className="text-sm font-medium">Call</span>
</button>

<button onClick={()=>addTimeline("Text",friend.name)} className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer">
  <MessageCircle className="w-5 h-5" />
  <span className="text-sm font-medium">Text</span>
</button>

<button onClick={()=>addTimeline("Video",friend.name)} className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer">
  <Video className="w-5 h-5" />
  <span className="text-sm font-medium">Video</span>
</button>

  </div>
    );
};

export default Profilebtn;