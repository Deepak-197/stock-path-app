

import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';



const Login = React.lazy(() => import('./Components/Login'));
const OtpVerification = React.lazy(() => import('./Components/OtpVerification'));
const Classes = React.lazy(() => import('./Components/Classes'));

function App() {

    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/class-list'); 
    }
  }, [navigate]);


  return (
    <div className="min-h-screen flex flex-col">
     
      <Suspense fallback={<div className="text-green-500 m-auto text-3xl">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/class-list" element={<Classes />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;



