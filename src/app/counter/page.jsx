"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../Redux/CounterSlice';

const page = () => {
    const count =useSelector((state)=>state.counter.value)
    const dispatch =useDispatch()
    return (
        <div>
           <h1>Counter:{count}</h1> 
           <button className='p-4 border' onClick={()=>dispatch(increment())}>Increment</button>
           <button className='p-4 border' onClick={()=>dispatch(decrement())}>Increment</button>
        </div>
    );
};

export default page;