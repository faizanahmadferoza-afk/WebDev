"use client";

import React from 'react'
import Image from "next/image";

export default function PWA() {
  return (
    <div>
    {/* section 1 */}
    <div className='grid grid-cols-4 bg-gray-100 items-center'>
            <div className='px-10 py-12 col-span-3'>
                <h1 className='text-6xl font-bold hover:underline pt-12'>
                    Progressive Web Apps
                </h1>
                <p className='text-xl text-gray-800 py-10'>
                   Capabilities that enable app experiences, built and deployed on the web.
                </p>
            </div>
            <div className="relative w-[90%] h-45 py-18 text-end px-8">
                <Image src="/images/20.png" alt="Web illustration" fill className=""/>
            </div>
    </div>

    {/* section 2 */}
    <div className='grid grid-cols-3'>
        {/* Col-1 */}
        <div className="bg-white rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-4">
                Overview
            </h2>
            <p className="text-xl px-5 text-gray-700">
                In this collection, you'll learn what makes a Progressive Web App special, 
                how they can affect your business, and how to build them.
            </p>
            <p className="text-xl px-5 text-gray-700">
                For a course that breaks down every aspect of modern progressive web app 
                development, check out 
                <span className='text-blue-500 underline px-2'>Learn PWA.</span>
            </p>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-xl text-gray-600 py-5  whitespace-nowrap">
                Introduction
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
                What are Progressive Web Apps?
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
                What makes a good Progressive Web App?
            </h2>
            <p className='text-xl text-gray-600'>
               Create an app-like user experience
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
               Make your PWA feel more like an app
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
                Progressively enhance your Progressive Web App
            </p>
            <h2 className="text-xl text-gray-600 py-5  whitespace-nowrap">
                Case studies
            </h2>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
               How Progressive Web Apps
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              can drive business success
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              Deprecating Excalidraw Electron
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
               in favor of the web version
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              Clipchamp's video editor PWA
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              installs see a 97% monthly growth
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
               PWA users are 2.5x more likely to
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              purchase Gravit Designer PRO
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              JD.ID improves their mobile conversion
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
               rate by 53% with caching strategies,
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              installation, and push notifications
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              Rakuten 24's investment in PWA
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              increases user retention by 450%
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              How ZDF created a video PWA
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline whitespace-nowrap">
               with offline and dark mode
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              How Goibibo's PWA improved
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              conversions by 60%
            </p>
            <p className='text-md text-gray-600 hover:underline'>
              Building a PWA at Google, part 1
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8'>
            <h2 className="text-xl text-gray-600 py-5 whitespace-nowrap">
                Make it installable
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
               What does it take to be installable?
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline">
              How to provide your own in-
            </h2>
            <h2 className="text-md text-gray-600 py-5 whitespace-nowrap">
              app install experience
            </h2>
            <p className='text-xl text-gray-600'>
              Advanced topics
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline">
              Progressive Web Apps in multi-origin sites
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              Building multiple Progressive
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline">
              Web Apps on the same domain
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              Offline UX design guidelines
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline">
              Create an offline fallback page
            </h2>
            <p className='text-md text-gray-600 hover:underline'>
              Navigation Management into installed PWAs
            </p>
            <h2 className="text-md text-gray-600 py-5 hover:underline">
              PWAs in app stores
            </h2>
        </div>
    </div>

    </div>
  )
}
