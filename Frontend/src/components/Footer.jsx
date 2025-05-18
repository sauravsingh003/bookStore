import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/about">About us</a>
          <a className="link link-hover" href="/contact">Contact</a>
          <a className="link link-hover" href="/jobs">Jobs</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1200 1227"
                className="fill-current"
              >
              <path d="M737 512L1167 0H1062L684 455 377 0H0L453 670 0 1227H105l401-477 322 477h377L737 512zM553 574L161 97h157l302 415-67 62zm91 100l325 460H811L549 729l67-55z" />
              </svg>
            </a>

            <a href="https://www.youtube.com/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2025 - All right reserved by bookStore</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
