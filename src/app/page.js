import { Plus } from "lucide-react";
import F_card from "./components/F_card";



export default async function Home() {
  const res=await fetch("http://localhost:3000/friends.json")
const friends = await res.json();
   
  return (


<div className="max-w-7xl mx-auto">

{/* heading */}

<div className="text-center space-y-5 my-10" >
<h1 className="font-bold text-3xl md:text-5xl text-black">Friends to keep close in your life</h1>
<p className="text-lg opacity-60">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
relationships that matter most.</p>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-green-800 hover:bg-green-950"><Plus></Plus>Add Friends</button>
</div>
{/* card_1 */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="card  bg-base-50 w-60 mx-auto shadow-2xl">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">10</h2>
      <p className="opacity-60">Total Friends</p>
    </div>
  </div>


  <div className="card  bg-base-50 w-60 mx-auto shadow-2xl">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">10</h2>
      <p className="opacity-60">Total Friends</p>
    </div>
  </div>



  <div className="card  bg-base-50 w-60 mx-auto shadow-2xl py-2">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">10</h2>
      <p className="opacity-60">Total Friends</p>
    </div>
  </div>




  <div className="card  bg-base-50 w-60 mx-auto shadow-2xl">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">10</h2>
      <p className="opacity-60">Total Friends</p>
    </div>
  </div>

</div>

<div className="my-20">
  <h1 className="font-bold text-xl mb-2">Your Friends</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-5">

{
  friends.map((f,ind)=><F_card key={ind} f={f}></F_card>)
}
</div>
</div>
</div>
   
  );
}
