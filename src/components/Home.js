import React from 'react';
import Lottie from "lottie-react";
import coding from "../assets/coding.json";
const Home = () => {
    return (
        <div className='bg-emerald-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            <div className='mt-6'>
                <h3 className='text-2xl md:text-4xl m-6 font-semibold text-gray-800'>To Make You Stronger</h3>
                <h3 className='text-2xl md:text-4xl m-6 font-semibold text-gray-800'>Drag Your Brain </h3>
                <h3 className='text-2xl md:text-4xl m-6 font-semibold text-gray-800'>To  </h3>
                <h1 className='text-4xl md:text-8xl m-6 font-bold text-teal-900'>
                    BRAINZZIFFY
                    </h1>

            </div>
            <div className=''>
            <Lottie animationData={coding} loop={true} className="-skew-y-12 w-3/4 p-4 mx-auto"/>;
            </div>
        </div>
    );
};

export default Home;