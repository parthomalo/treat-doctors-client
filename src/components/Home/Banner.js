import React from 'react';
import chair from '../../../src/assets/images/chair.png'
const Banner = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img width='500px' src={chair} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">Your New Smile Starts Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores repudiandae optio libero aperiam impedit aliquam magni maxime delectus. Accusantium dolore et vero ratione qui sint tempora tenetur amet autem.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;