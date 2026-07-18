"use client";

import React from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WebCard() {
  const router = useRouter();

  return (
    <>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 py-5">
        {/* Col-1 */}

      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col py-15 px-8">
        {/* Image Container */}
        <div className="relative w-full h-55">
          <Image
            src="/images/2.png"
            alt="Web illustration"
            fill
            className=""
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold py-8 px-5 hover:underline">AI and The Web</h2>
        <p className="text-md py-1 px-5 text-gray-600">Discover resources created to help 
            you understand and build performant, web-first experiences with AI.</p>
        <div className="py-10 px-20">
            <button onClick={() => router.push("/ai")}   
            className="text-blue-600 text-[15px] px-10 py-2 border-2 border-blue-600 rounded-full">
                Learn More
            </button>
        </div>
      </div>

      {/* Col-2 */}

      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col py-15 px-8">
        {/* Image Container */}
        <div className="relative w-full h-55">
          <Image
            src="/images/3.png"
            alt="Web illustration"
            fill
            className=""
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold py-8 px-5 hover:underline">Optimize INP</h2>
        <p className="text-md py-1 px-5 text-gray-600">Interaction to Next Paint (INP) is
         now a Core Web Vital metrics. Start measuring and optimizing your site's INP.</p>
        <div className="py-10 px-20">
            <button onClick={() => router.push("/inp")}  
            className="text-blue-600 text-[15px] px-10 py-2 border-2 border-blue-600 rounded-full">
                Learn More
            </button>
        </div>
      </div>

      {/* Col-3 */}

      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col py-15 px-8">
        {/* Image Container */}
        <div className="relative w-full h-55">
          <Image
            src="/images/4.png"
            alt="Web illustration"
            fill
            className=""
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold py-8 px-5 hover:underline">Payments & Identity</h2>
        <p className="text-md py-1 px-5 text-gray-600">Read up on the latest features and 
        best practices when it comes to identity and payment processing.</p>
        <div className="py-10 px-20">
            <button onClick={() => router.push("/payment")}   
            className="text-blue-600 text-[15px] px-10 py-2 border-2 border-blue-600 rounded-full">
                Learn More
            </button>
        </div>
      </div>

    </div>

    </>
    
  );
}
