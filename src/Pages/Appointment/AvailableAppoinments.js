import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Service';
import A_Service from './A_Service';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ date }) => {

    const [a_services, setA_Service] = useState([]);
    const [treatement, settreatement] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(Response => Response.json())
            .then(data => setA_Service(data))

    }, [])

    return (
        <div>
            <h4 className='text-xl text-center text-secondary'>Available Appoinments On  {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    a_services.map(a_service => <A_Service key={a_service._id}
                        a_service={a_service}
                        settreatement={settreatement}
                    ></A_Service>)
                }
            </div>
            {treatement && <BookingModal
                date={date}
                treatement={treatement}
                settreatement={settreatement}
            >
            </BookingModal>}

        </div>
    );
};

export default AvailableAppoinments;