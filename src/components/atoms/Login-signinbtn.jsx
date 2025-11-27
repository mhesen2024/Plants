import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function LoginSigninbtn({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {user ? (
        <div className="relative flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center justify-center w-10 h-10 rounded-full hover:text-green-400 hover:bg-green-100 transition-all duration-300 shadow-md focus:outline-none ${open ? "bg-green-100 text-green-400" : "bg-white text-gray-700"}`}
          >
            <CgProfile size={24} className="text-gray-700" />
          </button>
          {open && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg w-52 z-50 overflow-hidden animate-fadeIn">
              <ul className="flex flex-col gap-1 ">
                <li className="px-4 py-2 text-gray-500 text-sm truncate ">
                  abdalla.mhesen@gmail.com
                </li>
                <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-200 hover:text-green-500 hover:bg-green-100">
                  <FiLogOut size={18} />
                  تسجيل خروج
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
          تسجيل الدخول
        </button>
      )}
    </>
  );
}
