import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Login(){
    const {loading, error} = useSelector((state) => state.auth);  
    const [mobileNumber, setMobileNumber] = useState('');
      
      const dispatch = useDispatch();
      const navigate = useNavigate();


      const handleLogin = async (e) => {
         
        e.preventDefault();
        await dispatch(login(mobileNumber))

        if(!error) navigate('/otp-verification')

      }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md mx-4"
        >
        <div className='flex justify-center'>
          <img src={logo} alt='stock-image' />
         </div> 
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome! Sign up or Login</h2>
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter Mobile Number"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
          disabled={loading}
        >
          {loading ? 'Sending OTP...' : 'Continue'}
        </button>
      </form>
    </div>
  )
}
