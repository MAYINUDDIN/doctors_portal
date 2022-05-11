import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-col-4 lg:grid-cols-3 gap-5 px-12 mt-5'>
            <InfoCard CardTitle="Openiong Hours" bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard CardTitle="Our Locations" bgClass='bg-accent' img={marker}></InfoCard>
            <InfoCard CardTitle="Contact US" bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>



        </div>
    );
};

export default Info;