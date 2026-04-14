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
<button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md  bg-green-800 hover:bg-green-950"><Plus></Plus>Add Friends</button>
</div>
{/* card_1 */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="card  bg-base-50 w-60 mx-auto shadow-md">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">{friends.length}</h2>
      <p className="opacity-60">Total Friends</p>
    </div>
  </div>


  <div className="card  bg-base-50 w-60 mx-auto shadow-md">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">{friends.filter(stat=>stat.status==="on-track").length}</h2>
      <p className="opacity-60">On Track</p>
    </div>
  </div>



  <div className="card  bg-base-50 w-60 mx-auto shadow-md ">
    <div className="card-body text-center ">
      <h2 className="card-title justify-center text-3xl">{friends.filter(att=>att.status==="overdue").length}</h2>
      <p className="opacity-60">Need Attention</p>
    </div>
  </div>




  <div className="card  bg-base-50 w-60 mx-auto shadow-md">
    <div className="card-body text-center">
      <h2 className="card-title justify-center text-3xl">{friends.filter(int=>int.days_since_contact<=30).length}</h2>
      <p className="opacity-60">Interactions This Month</p>
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
