import React from "react";
import { MdCookie } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const AcceptCookies = () => {
  return (
    <div className="relative bg-black text-white p-6 rounded-lg shadow-lg w-60">
      <button className="absolute top-3 right-2 text-white hover:text-gray-400">
        <IoClose/>
      </button>
      <MdCookie className="size-12 mb-10" />
      <p className="text-sm mb-4 mr-10">
        We use cookies to improve your user experience.
      </p>
      <button className="w-full bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 transition duration-300">
        I like Cookies
      </button>
    </div>
  );
};

export default AcceptCookies;