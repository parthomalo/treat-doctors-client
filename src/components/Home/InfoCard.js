import React from 'react';

const InfoCard = (props) => {
    console.log(props)
    return (
        <div className='flax '>
            <div className='flex'>
                <div>
                    <img className='bg-black bg-gradient-to-r from-primary to-secondary ' src={props.img} alt="" />
                </div>
                <div className=''>
                    <h3>Location</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat excepturi, inventore hic, minima, ipsam voluptas et labore quasi cumque quia rem illo laudantium assumenda provident nesciunt natus voluptatem expedita adipisci?</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;