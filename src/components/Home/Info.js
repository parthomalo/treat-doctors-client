import React from 'react';
import clock from '../../assets/icons/clock.svg'
// import phone from '../../assets/icons/phone.svg '
// import marker  from '../../assets/icons/marker.svg'
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 '>
            <InfoCard img={clock}></InfoCard>
        </div>
    );
};

export default Info;