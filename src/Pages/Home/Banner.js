import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (

        <div class="hero py-16 container-fluid ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-md w-100 rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-4xl font-bold text-left">Your New Smile Starts Here</h1>
                    <p class="py-6 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                   <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;