import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import { FiUser, FiLogOut } from "react-icons/fi";
import NavLinks from "../molecules/Navlinks";
import Logo from "../atoms/Logo";
import LoginSigninbtn from "../atoms/Login-signinbtn";

const NavItems = [
  { to: "/", title: " الرئيسية" },
  { to: "/plants", title: " النباتات" },
  { to: "/care", title: " العناية" },
  { to: "/tools", title: " الأدوات" },
  { to: "/contact", title: " اتصل بنا" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("null"); // Replace with actual user state management

  return (
    <nav className="glass-effect shadow-lg border-b border-green-400/20 sticky top-0 z-50 bg-white/70 backdrop-blur-xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Wrapper */}
        <div className="flex justify-between items-center h-20 flex-row">

          {/* Logo */}
     <Logo/>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-4 flex-row">
            {NavItems.map((item, index) => (
              <li key={index}>
                <NavLinks to={item.to} title={item.title} setIsMobileMenuOpen={setOpen} />
              </li>
            ))}
          </ul>

          {/* Login / User Menu */}
          <div className="mr-4 hidden md:block">
        <LoginSigninbtn user={user}/>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
            <TfiAlignJustify />
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <ul className="text-right flex flex-col gap-3">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <NavLinks to={item.to} title={item.title} setIsMobileMenuOpen={setOpen} />
                </li>
              ))}
            </ul>

        <LoginSigninbtn user={user}/>
          </div>
        )}

      </div>
    </nav>
  );
}
