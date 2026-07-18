"use client";

import React from 'react'

export default function Footer() {

  return (
    <footer className="border-t border-gray-200 px-6 py-10 text-sm text-gray-800">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

          {/* col 1 */}
          <div className="col-span-3">
            <h2 className="text-blue-600 hover:underline text-2xl font-medium">
              Web.Dev
            </h2>
            <p className="text-gray-600 pt-5">
              We want to help you build beautiful, accessible, fast, and secure websites 
              that <br/>work cross-browser, and for all of your users. This site is our home for 
              content<br/> to help you on that journey, written by members of the Chrome team, 
              and<br/> external experts.
            </p>
          </div>

          {/* col 2 */}
          <section>
            <h3 className="mb-3 font-semibold text-gray-700">Contibute</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://issuetracker.google.com/issues/new?component=1400680&template=1857359&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  File a bug
                </a>
              </li>
              <li>
                <a
                  href="https://issuetracker.google.com/issues?q=status:open%20componentid:1400680&s=created_time:desc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  See open issues
                </a>
              </li>
            </ul>
          </section>

          {/* col 3 */}
          <section>
            <h3 className="mb-3 font-semibold text-gray-700">Related Content</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://developer.chrome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  Chrome for Developers
                </a>
              </li>
              <li>
                <a
                  href="https://blog.chromium.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  Chromium updates
                </a>
              </li>
              <li>
                <a
                  href="https://web.dev/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  Case studies
                </a>
              </li>
              <li>
                <a
                  href="https://web.dev/shows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  Podcasts & shows
                </a>
              </li>
            </ul>
          </section>

          {/* col 4 */}
          <section>
            <h3 className="mb-3 font-semibold text-gray-700">Follow</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/ChromiumDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  @ChromiumDev on X
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/ChromeDevelopers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/showcase/chrome-for-developers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  Chrome for Developers on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://web.dev/static/blog/feed.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline decoration-blue-600"
                >
                  RSS
                </a>
              </li>
            </ul>
          </section>

        </div>

        {/* Bottom */}
        <hr className='text-gray-200'/>
        <div className="grid grid-cols-1 md:grid-cols-14 gap-6 pb-2 pt-8">
          <div className="">
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline decoration-blue-600 text-md"
            >
              Terms
            </a>
          </div>
          <div className="">
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline decoration-blue-600 text-md"
            >
              Privacy
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} web.dev. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
