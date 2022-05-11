import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (

        <div class="hero  min-h-screen container-fluid px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-md w-100 rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-4xl font-bold text-left">Your New Smile Starts Here</h1>
                    <p class="py-6 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                    <h1 class="text-4xl font-bold text-left">
                        <button class="btn btn-primary text-white uppercase rounded-md font-bold
                    bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </h1>
                </div>
            </div>
        </div >
    );
};

export default Banner;