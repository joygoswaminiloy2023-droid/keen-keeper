import React from 'react';

const Profilecountcards = ({friend}) => {
    return (
     <div className="grid  md:grid-cols-3 gap-10 ">
  <div className="card  bg-white w-60 mx-auto shadow-lg">
    <div className="card-body text-center py-10">
      <h2 className="card-title justify-center text-3xl">{friend.days_since_contact}</h2>
      <p className="opacity-60">Day Since Contact</p>
    </div>
  </div>


  <div className="card  bg-white w-60 mx-auto shadow-lg">
    <div className="card-body text-center py-10">
      <h2 className="card-title justify-center text-3xl">{friend.goal}</h2>
      <p className="opacity-60">Goal(Days)</p>
    </div>
  </div>



  <div className="card  bg-white w-60 mx-auto shadow-lg ">
    <div className="card-body text-center py-10">
      <h2 className="card-title justify-center text-3xl">{friend.next_due_date}</h2>
      <p className="opacity-60">Next Due</p>
    </div>
  </div>



</div>
    );
};

export default Profilecountcards;