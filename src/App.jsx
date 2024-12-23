import React from 'react';
import { SubscriptionForm } from './components/SubscriptionForm';
import { ProfileCard } from './components/ProfileCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from './components/Success';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-tr from-[#453172] from-[0%] via-[#060014] via-[27%] to-[#0b0220] to-[100%] flex items-center justify-center p-4">
        <Routes>
          {/* Define the routes */}
          <Route 
            path="/" 
            element={
              <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 p-4">
                {/* Left Section */}
                <div className="flex-1 text-white">
                  <div className="space-y-2 mb-20">
                    <h1 className="text-5xl font-poppins font-bold">
                      Get Artificial Intelligence
                    </h1>
                    <h2 className="text-3xl font-normal">
                      In Your Email Inbox
                    </h2>
                  </div>
                  <SubscriptionForm />
                </div>

                {/* Right Section */}
                <ProfileCard />
              </div>
            } 
          />

          {/* Add additional routes as needed */}
          <Route 
            path="/about" 
            element={<div className="text-white text-center text-3xl">About Page Content</div>} 
          />
          <Route 
            path="/profile" 
            element={<ProfileCard />} 
          />
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </div>
    </Router>
  );
}
