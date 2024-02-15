"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Cars = () => {
  const router = useRouter();

  const login = () => {
    router.push("/login");
  }

  return (
    <div>
      <button className='bg-blue-300 p-[10px] rounded-md shadow-xl text-[#fff]' onClick={login}>send</button>
    </div>
  );
}

export default Cars;