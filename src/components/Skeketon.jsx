import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Skleton = () => {
    return (
        <div className='w-[600px] bg-red-50 text-center mx-auto opacity-50'>
            <div className=''>
            <Skeleton circle width={200} height={100} count={1}/> 
            <div className=''>
            <Skeleton height={50} count={1}/> 
            </div>
            <div className=''>
            <Skeleton height={50} width={50} count={1}/> 
            </div>
            <div className=''>
            <Skeleton height={50} count={1}/> 
            </div>
            </div>
        </div>
    );
};

export default Skleton;