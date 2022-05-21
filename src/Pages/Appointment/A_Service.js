import React from 'react';
import Service from '../Home/Service';
import PrimaryButton from '../Shared/PrimaryButton';

const A_Service = ({a_service,settreatement}) => {
    const{name,slots}=a_service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>
              {
                  slots.length>0
                  ?
              <span>{slots[0]}</span>
                  :
                  <h6 className='text-secondary'>Try Another Date</h6>
              }
          </p>
    <p>{slots.length} {slots.length>1? 'spaces' : 'space'} available</p>
          <div className="card-actions justify-center">
        
              <label for="booking"    
                 disabled={slots.length===0}
              onClick={()=>settreatement(a_service)}className="btn btn-success text-white uppercase  bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default A_Service;