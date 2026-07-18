"use client";

import React from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Platform() {
    const router = useRouter();

  return (
    <>
    {/* platform 1 */}
    <div className='bg-gray-100 bg-cover py-10'>

        <div className='grid grid-cols-3'>
            <div className='px-5 py-5 col-span-2'>
                <h1 className='text-5xl font-bold hover:underline'>
                    Explore the web platform
                </h1>
                <p className='text-md text-gray-800 py-8'>
                    The web platform is a constantly evolving ecosystem of browser features 
                    and APIs for developers to make websites that are easy and delightful to
                     use. These pages are pathways for you to dive into each part of the web
                      platform on web.dev—at your pace.
                </p>
            </div>
            <div className="py-5 text-end px-8">
                <button onClick={() => router.push("/explore")}    
                className="text-blue-600 text-[17px] px-10 py-2 border-2 border-blue-600 
                rounded-full font-bold hover:border-gray-100 hover:bg-gray-100 bg-white">
                    Start Exploring
                </button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 py-5'>
            {/* Col-1 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col py-15 px-8">
                {/* Image Container */}
                <div className="relative w-full h-45">
                    <Image src="/images/7.png" alt="Web illustration" fill className=""/>
                </div>
                {/* Heading */}
                <h2 className="text-3xl text-center font-bold py-5 px-5 hover:underline">
                    HTML
                </h2>
                <p className="text-md px-5 text-gray-600">HTML is the document layer of the 
                    web, providing structure and semantics for pages.
                </p>
                <div className="py-5 px-20">
                    <button onClick={() => router.push("/more1")} 
                    className="text-blue-600 text-[15px] font-serif px-10 py-2 border-2
                     border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Col-2 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col py-15 px-8">
                {/* Image Container */}
                <div className="relative w-full h-45">
                    <Image src="/images/8.png" alt="Web illustration" fill className=""/>
                </div>
                {/* Heading */}
                <h2 className="text-3xl text-center font-bold py-5 px-5 hover:underline">
                    CSS
                </h2>
                <p className="text-md px-5 text-gray-600">CSS is the presentation layer of 
                    the web, and allows you to make your web pages look exactly like you 
                    imagine.
                </p>
                <div className="py-5 px-20">
                    <button onClick={() => router.push("/more2")}  
                    className="text-blue-600 text-[15px] font-serif px-10 py-2 border-2
                     border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Col-3 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col py-15 px-8">
                {/* Image Container */}
                <div className="relative w-full h-45">
                    <Image src="/images/9.png" alt="Web illustration" fill className=""/>
                </div>
                {/* Heading */}
                <h2 className="text-3xl text-center font-bold py-5 px-5 hover:underline">
                    JavaScript
                </h2>
                <p className="text-md px-5 text-gray-600">JavaScript adds rich interactivity to web 
                    pages, so you can build websites that help users to perform tasks.
                </p>
                <div className="py-5 px-20">
                    <button onClick={() => router.push("/more3")}   
                    className="text-blue-600 text-[15px] font-serif px-10 py-2 border-2
                     border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap">
                        Learn More
                    </button>
                </div>
            </div>

        </div>

    </div>
    {/* platform 2 */}
    <div className='bg-white bg-cover py-10'>

        <div className='grid grid-cols-3'>
            <div className='px-5 py-5 col-span-2'>
                <h1 className='text-5xl font-bold hover:underline'>
                    Learn the web platform
                </h1>
                <p className='text-md text-gray-800 py-8'>
                    New to the web platform? We've got you covered! Dive into each layer, 
                    with courses curated specifically for beginners to HTML, CSS, and 
                    JavaScript.
                </p>
            </div>
            <div className="py-5 text-end px-8">
                <button onClick={() => router.push("/learn")}   
                className="text-blue-600 text-[17px] px-10 py-2 border-2 border-indigo-700 
                rounded-full font-bold hover:border-white hover:bg-white bg-gray-100">
                    Start Learning
                </button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 py-5'>
            {/* Col-1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col py-15 px-8">
                {/* Image Container */}
                <div className="relative w-full h-50">
                    <Image src="/images/10.png" alt="Web illustration" fill className=""/>
                </div>
                {/* Heading */}
                <h2 className='text-[13px] text-left pt-13 text-gray-700 px-2'>Course</h2>
                <h2 className="text-3xl text-center font-bold pt-3 pb-7 px-5 hover:underline">
                    Learn HTML
                </h2>
                <p className="text-md px-5 text-gray-800">A solid overview of HTML for 
                    developers, from novice to expert level HTML.
                </p>
                <div className="py-12 px-15">
                    <button onClick={() => router.push("/course1")} 
                    className="text-blue-600 text-[15px] font-serif px-15 border-2
                     border-indigo-700 rounded-full whitespace-nowrap py-2 font-serif font-bold
                     hover:text-white hover:bg-blue-500 hover:border-none duration-[1s]">
                        Start Course
                    </button>
                </div>
            </div>
            {/* Col-2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col py-15 px-8">
                {/* Image Container */}
                <div className="relative w-full h-50">
                    <Image src="/images/11.png" alt="Web illustration" fill className=""/>
                </div>
                {/* Heading */}
                <h2 className='text-[13px] text-left pt-13 text-gray-700 px-2'>Course</h2>
                <h2 className="text-3xl text-center font-bold pt-3 pb-7 px-5 hover:underline">
                    Learn CSS
                </h2>
                <p className="text-md px-5 text-gray-800">A guide to CSS with modules 
                    covering everything from accessibility to z-index.
                </p>
                <div className="py-12 px-15">
                    <button onClick={() => router.push("/course2")} 
                    className="text-blue-600 text-[15px] font-serif px-15 border-2
                     border-indigo-700 rounded-full whitespace-nowrap py-2 font-serif font-bold
                     hover:text-white hover:bg-blue-500 hover:border-none duration-[1s]">
                        Start Course
                    </button>
                </div>
            </div>
            {/* Col-3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col py-15 px-8">
                {/* Image Container */}
                <div className="relative w-full h-50">
                    <Image src="/images/12.png" alt="Web illustration" fill className=""/>
                </div>
                {/* Heading */}
                <h2 className='text-[13px] text-left pt-13 text-gray-700 px-2'>Course</h2>
                <h2 className="text-3xl text-center font-bold pt-3 pb-7 px-5 hover:underline">
                    Learn JavaScript
                </h2>
                <p className="text-md px-5 text-gray-800">An in-depth course on the basics of JavaScript.
                </p>
                <div className="py-12 px-15">
                    <button onClick={() => router.push("/course3")}  
                    className="text-blue-600 text-[15px] font-serif px-15 border-2
                     border-indigo-700 rounded-full whitespace-nowrap py-2 font-serif font-bold
                     hover:text-white hover:bg-blue-500 hover:border-none duration-[1s]">
                        Start Course
                    </button>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}
