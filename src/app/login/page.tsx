"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/cars_table");
    }

    return (
        <div className='d-flex justify-center'>
            <div className="shadow-xl rounded-xl w-[400px] h-[400px] mt-5 p-5" >
                <h1 className='text-center'>Login</h1>

                <input type="text" className='form-control shadow-md my-4' placeholder='Username' />
                <input type="password" className='form-control shadow-md my-4' placeholder='Password' />

                <p className='mt-4'>Example credentials: username: username, password: password</p>
                <button onClick={handleClick} className='btn btn-success'>Login</button>
            </div>
        </div>
    );
}

export default Login;