
import { Archive, Bell, MessageCircle, Phone, Trash, Video } from "lucide-react";
import Profile_card from "../components/Profile_card";
import Profilecountcards from "../components/Profilecountcards";



const Profile = async({params}) => {
     const {friendsid}=await params;
    const res=await fetch("http://localhost:3000/friends.json")
    const data= await res.json();

    const friend=data.find(f=>f.id==friendsid)
    console.log(friend.name)
    return (
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 p-5 items-start bg-gray-100">

  {/* LEFT */}
  <div className="md:col-span-2 space-y-6">

    <Profile_card friend={friend} />

    {/* Snooze Section */}
<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2">
    <Bell /> Snooze
  </h2>
</div>

<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2">
    <Archive /> Archive
  </h2>
</div>

<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2 text-red-600">
    <Trash /> Delete
  </h2>
</div>
  

  </div>

  {/* RIGHT */}
  <div className="md:col-span-4 space-y-6">

    <Profilecountcards friend={friend} />

    {/* Relationship Goal */}
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
      <div className="py-12">
        <h2 className="font-semibold text-lg">Relationship Goal</h2>
        <p className="opacity-60">Connect every <span className="font-bold opacity-100">30 days</span></p>
      </div>
      <button className="btn text-black bg-gray-100 border-0">
        Edit
      </button>
    </div>

    {/* Extra Section */}
   <div className="bg-white rounded-xl shadow p-5 space-y-4">

  <h2 className="font-semibold text-lg">Quick Check-In</h2>


  <div className="flex gap-3">

    <div className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer">
  <Phone className="w-5 h-5" />
  <span className="text-sm font-medium">Call</span>
</div>

<div className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer">
  <MessageCircle className="w-5 h-5" />
  <span className="text-sm font-medium">Text</span>
</div>

<div className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-lg py-6 flex flex-col items-center justify-center gap-2 cursor-pointer">
  <Video className="w-5 h-5" />
  <span className="text-sm font-medium">Video</span>
</div>

  </div>

</div>

  </div>

</div>
    );
};

export default Profile;