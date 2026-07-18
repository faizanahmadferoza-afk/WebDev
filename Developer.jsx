import React from 'react'

export default function Developer() {
  return (
    <>
    <hr className='text-gray-300'/>
    <div className="text-center shadow-md bg-gray-100">
      <h2 className="text-5xl font-bold pt-15 pb-5">
        Developer Newsletter
      </h2>
      <p className="text-gray-800 text-xl pb-6">
        Get the latest news, techniques and updates straight to your inbox.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-left px-73 text-gray-600">
            First Name
          </label>
          <input type="text" placeholder="First Name"
          className="w-[55%] bg-white text-md font-bold rounded px-3 py-1"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-left px-73 text-gray-600">
            Second Name
          </label>
          <input type="text" placeholder="Second Name"
          className="w-[55%] bg-white text-md font-bold rounded px-3 py-1"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-left px-73 text-gray-600">
             Your Email
          </label>
          <input type="text" placeholder="Your Email"
          className="w-[55%] bg-white text-md font-bold rounded px-3 py-1"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-left px-73 text-gray-600">
            Country Code
          </label>
          <input type="text" placeholder="Enter Your Country"
          className="w-[55%] bg-white text-md font-bold rounded px-3 py-1"/>
        </div>
    
        <p className="text-gray-700 text-lg pt-5 pb-3 px-65">
          Don't worry, no spam here! Your information will only be used for web.dev and 
          Chrome<br/> related updates and our emails are typically no more than 1-2 times 
          a month. You can <br/>unsubscribe anytime.
        </p>

        {/* check box */}
        <div className="flex px-70 items-center gap-3">
          <input type="checkbox" className="w-5 h-5"/>
          <p className="text-gray-700 text-lg">
            Add me to the web.dev mailing list.
          </p>
        </div>
        <div className="flex px-70 items-center gap-3">
          <input type="checkbox" className="w-8 h-8"/>
          <p className="text-gray-700 text-lg">
            I accept Google's 
            <span className='text-blue-600 px-2'>Terms and Conditions</span> 
            and acknowledge that my information will be used in accordance with Google's 
            <span className='text-blue-600 px-2'>Privacy Policy.</span>
          </p>
        </div>
        <div className="flex px-130 items-center gap-3 pt-8 pb-2">
          <input type="checkbox" className="w-5 h-5"/>
          <p className="text-gray-700 text-lg">
            I am not a robot.
          </p>
        </div>

        <div className='pb-17 text-start px-135'>
          <button type="submit" className="bg-white text-blue-500 px-6 py-1.5 rounded 
          font-semibold hover:bg-blue-200 transition">
            Subscribe
          </button>
        </div>

      </form>

    </div>
    </>
  )
}