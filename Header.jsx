"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

export default function WebDevHeader() {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState("");
  const [search, setSearch] = useState("");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  function Modal() {
    if (!activeModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white w-[90%] max-w-4xl min-h-[320px] rounded-lg p-8 relative">
          <button
            onClick={() => setActiveModal("")}
            className="absolute top-3 right-3 text-xl font-bold"
          >
            ✕
          </button>

          {/* Resources */}
          {activeModal === "resources" && (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h2 className="text-xl font-bold">Web Platform</h2>
                <h3 className="text-gray-500 text-[15px] py-2">
                  Divide into the web platform, at your pace.
                </h3>
                <ul className="space-y-2 text-[15px] px-5">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold">User Performance</h2>
                <h3 className="text-gray-500 text-[15px] py-2">
                  Learn how to build better user experiences.
                </h3>
                <ul className="space-y-2 text-[15px] px-5">
                  <li>Performance</li>
                  <li>Accessibility</li>
                  <li>Identity</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold">Learns</h2>
                <h3 className="text-gray-500 text-[15px] py-2">
                  Get up to speed on web development
                </h3>
                <ul className="space-y-2 text-[15px] px-5">
                  <li>Learn HTML</li>
                  <li>Learn Javascript</li>
                  <li>Learn CSS</li>
                  <li>Learn AI</li>
                  <li>Learn Performance</li>
                  <li>Learn Accessibility</li>
                  <li>More courses</li>
                </ul>
              </div>
            </div>
          )}

          {/* How to use Baseline */}
          {activeModal === "howto" && (
            <div className="">
              <h2 className="text-5xl font-bold mb-4">How to use Baseline</h2>
              <p className="text-xl">Baseline helps you understand which features are 
                interoperable across modern browser engines and safe to use today—but how 
                do you use Baseline in your projects?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 py-2">
                      {/* Col-1 */}
              
                    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col py-5 px-8">
                      {/* Image Container */}
                      <div className="relative w-full h-55">
                        <Image
                          src="/images/5.png"
                          alt="Web illustration"
                          fill
                          className=""
                        />
                      </div>
              
                      {/* Heading */}
                      <h2 className="text-3xl font-bold text-center py-2 px-5 hover:underline">Limited availability</h2>
                      <p className="text-sm py-1 px-5 text-gray-600">Limited availability features are those that are not implemented in across the core browser set. Using these features will require some planning, possibly considering polyfills and progressive enhancement.</p>
                    </div>
              
                    {/* Col-2 */}
              
                    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col py-5 px-8">
                      {/* Image Container */}
                      <div className="relative w-full h-55">
                        <Image
                          src="/images/6.png"
                          alt="Web illustration"
                          fill
                          className=""
                        />
                      </div>
              
                      {/* Heading */}
                      <h2 className="text-3xl text-center font-bold py-2 px-5 hover:underline">Newly available</h2>
                      <p className="text-sm py-1 px-5 text-gray-600">Newly available features are those that have been recently implemented in the core browser set. When you see that features are Newly available, you can expect that these features will be supported more broadly across browsers as time goes on.</p>
                    </div>           
                  </div>
            </div>
          )}

          {/* Sign up */}
          {activeModal === "signup" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-center">Sign up</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Cell Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter number"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log("Search:", search);
  }

  return (
    <>
      {/* Header */}
      <header className="border-b bg-white">
        <div className="flex items-center gap-6 px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Web.dev
          </Link>

          {/* Nav buttons */}
          <nav className="flex gap-15 items-center">
            <button onClick={() => setActiveModal("resources")}>Resources</button>

            {/* Baselines opens a new page now */}
            <button onClick={() => router.push("/baselines")}>
              Baselines
            </button>

            <button onClick={() => setActiveModal("howto")}>How to use Baseline</button>

            {/* More Dropdown */}
            <div className="relative">
              <button onClick={() => setMoreOpen(!moreOpen)}>
                More
              </button>

              {moreOpen && (
              <ul className="absolute left-0 mt-2 w-35 text-[13px] h-[120px] bg-white
              border rounded shadow-xl z-40 py-3">
                <li onClick={() => {setMoreOpen(false);
                router.push("/blog"); // optional navigation
                }} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  Blogs
                </li>
                <li onClick={() => {setMoreOpen(false);
                router.push("/case"); // optional navigation
                }} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  Case Studies
                </li>
              </ul>
              )}
            </div>

          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Search */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <FiSearch />
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </form>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1 border py-1 px-2"
            >
              <FaGlobe />
              Language
            </button>
            {languageOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-gray-100 border rounded shadow-md z-40">
                {["English", "Hindi", "Spanish", "French", "Urdu"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => setLanguageOpen(false)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sign up */}
          <button
            onClick={() => setActiveModal("signup")}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Modal rendered once */}
      <Modal />
    </>
  );
}
