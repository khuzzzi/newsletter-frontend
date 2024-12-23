import React, { useRef, useState } from 'react';
import axios from 'axios';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useNavigate } from 'react-router-dom';

export function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [value, setValue] = useState("");
 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('Subscribed:', email);

      const response = await axios.post('http://localhost:3000/subscribe', { email },{headers: {'Content-Type': 'application/json'}});
      console.log(response)
      if (response.data.success === true) {
        setShowOtpForm(true);  // Show OTP form after successful subscription
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/verify', {
        email,
        otp: value, // The OTP entered by the user
      });

      if(response.data.message === "OTP verified successfully"){
        navigate("/success")
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-xl">
      {showOtpForm === true ?  (
        <>
          <h3 className="text-xl mb-2 font-medium">Enter OTP To Verify Your Email</h3>

          <div className="space-y-2">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)} // Update OTP value
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} value={value[0]} />
                <InputOTPSlot index={1} value={value[1]} />
                <InputOTPSlot index={2} value={value[2]} />
                <InputOTPSlot index={3} value={value[3]} />
                <InputOTPSlot index={4} value={value[4]} />
                
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            onClick={verifyOtp} // Trigger OTP verification
            className="mt-4 text-white py-3 rounded-full font-semibold hover:opacity-90  transition-all"
          >
            Verify OTP
          </button>
        </>
      ) : (
        <div>
          <h3 className="text-xl mb-2 ml-3 font-medium">Add Your Email</h3>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full border-none placeholder-gray-400 px-6 py-4 rounded-full border bg-white focus:outline-none focus:border-green-500 font-poppins placeholder:text-md placeholder:text-black text-black"
              required
            />
            <button
              type="submit"
              className="subscribe-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 hover:bg-[#350c0c] transition-all absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
