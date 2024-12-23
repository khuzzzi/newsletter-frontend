import React from 'react';
import image from "../assets/83164491.jpg"
export function ProfileCard() {
  return (
    <div className="bg-gradient-to-tr from-[#0F032B] from-0% to-[#4a3182] to-90% rounded-3xl p-8 text-white max-w-md w-full">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={image}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-xl">Khuzaima</h3>
          <p className="text-gray-300">Full Stack Developer + AI Enthusiast</p>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">
        Stay Updated With The Latest Technologies and AI.
      </h4>
      
      <p className="text-gray-300 mb-6">
        The Future is extremely bright and, in this fast pace world
        you should be able to get the latest news straight into your
        inbox.
      </p>
      
      <p className="text-lg font-medium">
        so subscribe!
      </p>
    </div>
  );
}