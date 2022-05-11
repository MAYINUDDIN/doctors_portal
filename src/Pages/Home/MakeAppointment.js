import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (

         <section style={{background:`url(${appointment})`}} className='flex justify-center items-center  my-20'>
         <div className='flex-1 mt-[-100px] hidden lg:block'>
             <img src={doctor} alt="" />
          </div>
        <div className='flex-1 p-4'>
            <h3 className=' text-xl text-left text-primary uppercase font-bold'>Appointment</h3>
            <h2 className='text-3xl text-left text-white'>Make an Appointment</h2>
            <p className='text-justify text-white mb-3 pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam ratione quam placeat ullam aspernatur quod ipsum, facilis repellendus fugiat magni sint? Vero voluptas dicta itaque, in aspernatur tempora culpa harum, incidunt vel deserunt fugit suscipit alias amet nostrum veniam sunt earum cum possimus dignissimos nihil. Earum distinctio nulla eligendi?</p>

            <PrimaryButton>GET STARTED</PrimaryButton>

        </div>
            </section>
     
    );
};

export default MakeAppointment;