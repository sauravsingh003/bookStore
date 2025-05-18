import React from "react";

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800 dark:text-white mt-20 pt-10">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">About Us</h1>

      <p className="mb-4 text-lg">
        Welcome to <span className="font-semibold text-pink-500">bookStore</span> – your one-stop destination for discovering, exploring, and purchasing your favorite books online. We are passionate about making reading more accessible and enjoyable for everyone.
      </p>

      <p className="mb-4 text-lg">
        Our platform offers a wide range of books across genres including fiction, non-fiction, educational, self-help, biographies, and much more. Whether you're a student, a casual reader, or a bibliophile, there's something for you here.
      </p>

      <p className="mb-4 text-lg">
        At bookStore, we aim to:
      </p>

      <ul className="list-disc list-inside mb-4 text-lg space-y-1">
        <li>Provide a seamless and secure book shopping experience</li>
        <li>Offer detailed information and reviews to help you choose the right book</li>
        <li>Support students and learners with affordable educational resources</li>
        <li>Promote the love of reading through a user-friendly and modern interface</li>
      </ul>

      <p className="text-lg">
        Thank you for choosing <span className="font-semibold text-pink-500">bookStore</span>. We’re excited to be a part of your reading journey!
      </p>
    </div>
  );
}

export default About;
