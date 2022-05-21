import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatement,date,settreatement}) => {

     const{_id,name,slots}=treatement;

     const handleBooking=(event)=>{
         event.preventDefault();

         const slot=event.target.slot.value;
         const name=event.target.name.value;
         const email=event.target.email.value;
       
         settreatement(null);
         console.log(_id,slot,name,email);

     }



    return (
        <div>
         
<input type="checkbox" id="booking"className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking"className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-secondary text-lg">Booking For: {name}</h3>

    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

    <input type="text" disabled value={format(date, 'PP')}className="input input-bordered w-full max-w-xs" />
    
    <select name="slot"className="select select-bordered w-full max-w-xs">
           
           {
             slots.map(slot=><option value={slot}>{slot}</option>)
           }
     
      </select>

    <input type="text" name="name" placeholder="Your Name"className="input input-bordered w-full max-w-xs" />
    <input type="email" name="email" placeholder="Email Address"className="input input-bordered w-full max-w-xs" />
    <input type="text" name="phone" placeholder="Phone Number"className="input input-bordered w-full max-w-xs" />
    <input type="submit" placeholder="Submit"className="btn btn-secondary text-white font-bold w-full max-w-xs" />


    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;