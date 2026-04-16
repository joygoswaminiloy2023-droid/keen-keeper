
import { Archive, Bell, MessageCircle, Phone, Trash, Video } from "lucide-react";
import Profile_card from "../components/Profile_card";
import Profilecountcards from "../components/Profilecountcards";
import Profilebtn from "../components/profile/Profilebtn";



const Profile = async({params}) => {
     const {friendsid}=await params;
    const res=await fetch("https://keen-keeper-indol.vercel.app/friends.json",{
      cache:"no-store"
    })
    const data= await res.json();

    const friend=data.find(f=>f.id==friendsid)
    console.log(friend.name)
    return (
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 p-5 items-start bg-gray-100">

  {/* LEFT */}
  <div className="md:col-span-2 space-y-6">

    <Profile_card friend={friend} />

    {/* Snooze Section */}
<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center cursor-pointer hover:bg-green-900 hover:text-white hover:scale-90 transition-all duration-300" >
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2">
    <Bell /> Snooze
  </h2>
</div>

<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center cursor-pointer  hover:bg-green-900 hover:text-white hover:scale-90 transition-all duration-300">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2">
    <Archive /> Archive
  </h2>
</div>

<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center cursor-pointer text-red-600 hover:bg-red-600 hover:text-white hover:scale-90 transition-all duration-300">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2 ">
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


 <Profilebtn friend={friend}></Profilebtn>

</div>

  </div>

</div>
    );
};

export default Profile;