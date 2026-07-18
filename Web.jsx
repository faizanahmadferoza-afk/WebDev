import React from "react";
import Image from "next/image";

export default function Web() {
  return (
    <>
      <div className="w-full h-[70px] bg-blue-500 font-bold flex items-center px-5">
        <h2 className="text-white">
          Guidance to build modern web experiences that work on any browser.
        </h2>
      </div>

    <div className='bg-blue-100'>
      <h2 className='px-5 py-5 text-[14px] text-indigo-700 font-medium'>
        Chrome is back at Google I/O May 19-20! 
          <span className='underline px-2'>Register now</span>
        </h2>
    </div>

      <div className="grid grid-cols-2 gap-6 py-15 px-6 items-center">
        <div>
          <h1 className="font-bold text-7xl">Building a better web, together</h1>
          <p className="text-xl py-8 text-gray-700">
            We want to help you build beautiful, accessible, fast, and secure
            websites that work cross-browser, and for all of your users. This
            site is our home for content to help you on that journey, written by
            members of the Chrome team, and external experts who specialize in
            web development topics such as accessibility, performance, design,
            and more.
          </p>
        </div>
        <div className="relative w-full h-[300px] flex justify-center">
            <Image src="/images/1.png" alt="Web illustration" fill
                className="object-contain w-[80%]"/>
        </div>
     </div>
    </>
  );
}
