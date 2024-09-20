import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { verifyOtp } from '../Redux/actions/authAction';
import logo from '../assets/logo.png'


export default function OtpVerification() {
    
  const {mobileNumber, loading, error} = useSelector((state) =>state.auth);
 
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleOtpSubmit =  (e) => {
    e.preventDefault();

     dispatch(verifyOtp(mobileNumber, otp));
      
    

    if(!error) {
      setTimeout(() => {
        navigate("/class-list")
      }, 1500);
     }
      else if(error)  navigate("/otp-verification")

      
  }

  
// console.log(mobileNumber, error, otp)


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     
    <form
      onSubmit={handleOtpSubmit}
      className="bg-white p-8 rounded shadow-md w-full max-w-md mx-4"
    >
      <div className='flex justify-center'>
          <img  src={logo} alt='stock-image' />
         </div>
      <h2 className="text-2xl font-bold mb-6 text-center">OTP Verification</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="border border-gray-300 p-2 w-full mb-4 rounded"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded"
        disabled={loading}
      >
        {loading ? 'Verifying OTP...' : 'Verify OTP'}
      </button>
      
    </form>
  </div>
  )
}





