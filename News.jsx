"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function News() {
    const router = useRouter();

  return (
    <>
    {/* section 1 */}
    <div className='grid grid-cols-3 bg-gray-100 items-center'>
        <div className='px-8 py-10 col-span-2'>
            <h1 className='text-3xl font-bold hover:underline'>
                Keep up on web development news
            </h1>
            <p className='text-md text-gray-800 py-10'>
                Read our blog to learn the latest news in web development, including new web
                platform features, updates to Baseline, AI, Core Web Vitals, and more.
            </p>
            <div className='col-span-2 flex justify-center'>
            <button  onClick={() => router.push("/blog")}   
            className="text-blue-600 text-[17px] px-12 py-2 border-2 border-indigo-600 
            rounded-full font-bold hover:border-none hover:bg-blue-500 bg-gray-100
            font-bold whitespace-nowrap hover:text-white duration-[1s]">
                Read the blog
            </button>
            </div>
        </div>
        <div className="relative w-full h-55 py-15">
            <Image src="/images/13.png" alt="Web illustration" fill className=""/>
        </div>
    </div>

    {/* section 2 */}
    <div className='grid grid-cols-3'>
        {/* Col-1 */}
        <div className="bg-white rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-5">
                Baseline
            </h2>
            <p className="text-lg px-5 text-gray-700">
                Get up to speed with the latest updates and news on 
                <span className='text-blue-500 px-2'>Baseline.</span>
            </p>
            <div className="py-7 px-7">
                <button onClick={() => router.push("/baselines")}   
                className="text-blue-600 text-[15px] font-serif py-2 px-8 border-2
                border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap">
                    More on Baseline
                </button>
            </div>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                December 2025 Baseline Monthly Digest
            </h2>
            <p className='text-md text-gray-600'>
                Read about various happenings with Baseline during December 2025.
            </p>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                Announcing Baseline in Action
            </h2>
            <p className='text-md text-gray-600'>
               Baseline in action is a new series developed to help developers learn how to use 
               Baseline features together to build better user experiences.
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8'>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                November 2025 Baseline Monthly Digest
            </h2>
            <p className='text-md text-gray-600'>
                Read about various happenings with Baseline during November 2025.
            </p>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                November 2025 Baseline Monthly Digest
            </h2>
            <p className='text-md text-gray-600'>
               Read about various happenings with Baseline during October 2025.
            </p>
        </div>

    </div>

    {/* section 3 */}
    <div className='grid grid-cols-3 bg-gray-100'>
        {/* Col-1 */}
        <div className="rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-5">
                CSS and UI design
            </h2>
            <p className="text-lg px-5 text-gray-700">
                Learn the latest tips and techniques to use in your work, right now.
            </p>
            <div className="py-7 px-7">
                <button onClick={() => router.push("/css")}  
                className="text-blue-600 text-[15px] bg-white font-serif py-2 px-8 border-2
                border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap
                hover:bg-gray-100 hover:border-none">
                    Explore CSS
                </button>
            </div>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-lg text-gray-600 py-5 hover:underline">
                Adapting typography to user preference using CSS
            </h2>
            <p className='text-md text-gray-600'>
                Adapt a font to your users' preferences, so they're maximally comfortable reading your content.
            </p>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                What are source maps?
            </h2>
            <p className='text-md text-gray-600'>
               Improve web debugging experience with source maps.
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8'>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                New CSS color spaces and functions in all major engines
            </h2>
            <p className='text-md text-gray-600'>
                All major engines now support the new CSS color spaces and functions. 
                Find out how they can bring vibrancy to your designs.
            </p>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                CSS subgrid
            </h2>
            <p className='text-md text-gray-600'>
               Subgrid is now interoperable across all three major engines. Find out how to use it.
            </p>
        </div>

    </div>
    {/* section 4 */}
    <div className='grid grid-cols-3 bg-white'>
        {/* Col-1 */}
        <div className="rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-5">
                Core Web Vitals
            </h2>
            <p className="text-lg px-5 text-gray-700">
                Build faster websites and apps by understanding Core Web Vitals and other metrics.
            </p>
            <div className="py-7 px-7">
                <button onClick={() => router.push("/core")} 
                className="text-blue-600 text-[15px] bg-gray-100 font-serif py-2 px-8 border-2
                border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap
                hover:bg-white hover:border-none">
                    Explore Core Web Vitals
                </button>
            </div>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-lg text-gray-600 py-5 hover:underline">
                The most effective ways to improve Core Web Vitals
            </h2>
            <p className='text-md text-gray-600'>
               A collection of best practices for optimizing websites' Core Web Vitals
                performance based on the state of the web.
            </p>
            <h2 className="text-lg text-gray-600 py-5 hover:underline">
                Common misconceptions about how to optimize LCP
            </h2>
            <p className='text-md text-gray-600'>
               Explore common misconceptions about optimizing Largest Contentful Paint by 
               looking beyond image optimization and considering factors like Time to First 
               Byte and resource load delay.
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8 gap-2'>
            <h2 className="text-lg text-gray-600 py-5 hover:underline whitespace-nowrap">
                How to optimize INP
            </h2>
            <p className='text-md text-gray-600'>
                Learn how to optimize for the Interaction to Next Paint metric.
            </p>
            <h2 className="text-lg text-gray-600 py-5 hover:underline pt-18">
                Best practices for measuring Web Vitals in the field
            </h2>
            <p className='text-md text-gray-600'>
               Guidance for collecting and reporting Web Vitals quickly and reliably.
            </p>
        </div>

    </div>
    {/* section 5 */}
    <div className='grid grid-cols-3 bg-gray-100'>
        {/* Col-1 */}
        <div className="rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-3">
                Progressive Web Apps
            </h2>
            <p className="text-lg px-5 text-gray-700">
                Create capable web experiences.
            </p>
            <div className="py-5 px-7">
                <button onClick={() => router.push("/pwa")}
                className="text-blue-600 text-[15px] bg-white font-serif py-2 px-8 border-2
                border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap
                hover:bg-gray-100 hover:border-none">
                    More on PWA
                </button>
            </div>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Learn PWA
            </h2>
            <p className='text-md text-gray-600'>
               A course that breaks down every aspect of modern progressive web app development.
            </p>
            <h2 className="text-xl text-gray-600 py-5 hover:underline pt-20">
                New patterns for amazing apps
            </h2>
            <p className='text-md text-gray-600'>
               Dive into a fantastic collection of new patterns for amazing apps, including 
               clipboard patterns, file patterns, and advanced app patterns.
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8 gap-2'>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                TransformStream is now supported cross browser.
            </h2>
            <p className='text-md text-gray-600'>
                Now that transform streams are supported in Safari, Firefox, and Chrome they
                are finally ready for prime time.
            </p>
            <h2 className="text-xl text-gray-600 py-5 hover:underline pt-8">
                Project Fugu API showcase
            </h2>
            <p className='text-md text-gray-600'>
               On the Chrome Developers site, explore capabilities APIs.
            </p>
        </div>

    </div>
    {/* section 6 */}
    <div className='grid grid-cols-3 bg-white'>
        {/* Col-1 */}
        <div className="rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-5">
                Accessible for all
            </h2>
            <p className="text-lg px-5 text-gray-700">
                Learn how to make your sites more accessible for people with disabilities,
                whether permanent, temporary, or situational.
            </p>
            <div className="py-7 px-7">
                <button onClick={() => router.push("/access")} 
                className="text-blue-600 text-[15px] bg-gray-100 font-serif py-2 px-8 border-2
                border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap
                hover:bg-white hover:border-none">
                    More on Accessibility
                </button>
            </div>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Learn Accessibility
            </h2>
            <p className='text-md text-gray-600 pt-1'>
               Our new course is a great entry point and reference for accessibility topics.
            </p>
            <h2 className="text-xl text-gray-600 py-5 hover:underline pt-9">
                Building the main navigation for a website
            </h2>
            <p className='text-md text-gray-600'>
               This tutorial describes how to build an accessible main navigation of a
                website. You learn about semantic HTML, accessibility, and how using ARIA 
                attributes can sometimes do more harm than good.
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8 gap-2'>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Testing web design color contrast
            </h2>
            <p className='text-md text-gray-600'>
                An overview of three tools and techniques for testing and verifying 
                accessible color contrast of your design.
            </p>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Community highlight: Melanie Sumner
            </h2>
            <p className='text-md text-gray-600'>
               Read our interview with Melanie, a software engineer who specializes in digital accessibility.
            </p>
        </div>

    </div>
    {/* section 7 */}
    <div className='grid grid-cols-3 bg-gray-100'>
        {/* Col-1 */}
        <div className="rounded-lg overflow-hidden flex flex-col py-15 px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold py-5 px-3">
                Payments and identity
            </h2>
            <p className="text-lg px-5 text-gray-700">
                Find the latest techniques and best practices for payments and helping users 
                safely log into your sites and apps.
            </p>
            <div className="py-7 px-7">
                <button onClick={() => router.push("/identity")}
                className="text-blue-600 text-[15px] bg-white font-serif py-2 px-8 border-2
                border-indigo-700 rounded-full hover:border-none font-bold whitespace-nowrap
                hover:bg-gray-100 hover:border-none">
                    More on Identity
                </button>
            </div>
        </div>
        {/* col-2 */}
        <div className='py-15 px-8'>
            <h2 className="text-xl text-gray-600 py-5 hover:underline whitespace-nowrap">
                Create a passkey for passwordless logins
            </h2>
            <p className='text-md text-gray-600'>
               Passkeys make user accounts safer, simpler, easier to use.
            </p>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Web payments overview
            </h2>
            <p className='text-md text-gray-600'>
               Learn more about Web Payments and how they work.
            </p>
        </div>
        {/* col-3 */}
        <div className='py-15 px-8 gap-2'>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Sign in with a passkey
            </h2>
            <p className='text-md text-gray-600'>
                Create a sign in experience that uses passkeys while still accommodating 
                existing password users.
            </p>
            <h2 className="text-xl text-gray-600 py-5 hover:underline">
                Payment and address form best practices
            </h2>
            <p className='text-md text-gray-600'>
               Maximize conversions by helping your users complete address and payment forms
               as quickly and easily as possible.
            </p>
        </div>

    </div>
    </>
  )
}
