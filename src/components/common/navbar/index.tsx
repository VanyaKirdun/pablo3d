import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '@/assets/logo.jpg'
import { LanguageSelector } from "../LanguageSelector";
import React, { useLayoutEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useClickAway } from 'react-use';


interface Route {
  path: string;
  name: string;
}

const navbarRoutes: Route[] = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contacts", path: "/contacts" },
  { name: "About", path: "/about" }
];



const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [slideStatus, setSlideStatus] = useState(false);
  const clickRef = React.useRef(null);

  const hideMenuHandle = (status: boolean) => {
    setIsOpen(status)
    setTimeout(() => {
      setSlideStatus(status)
    }, 0);
  }

  useClickAway(clickRef, () => hideMenuHandle(false));

  useLayoutEffect(() => {
    function updateSize() {
      hideMenuHandle(false)
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6 z-50 shadow-sm bg-black">
      {/* <div
        id="navbar-portal"
        className=""
      /> */}

      <nav ref={clickRef} className="h-full w-full flex justify-between gap-6 text-lg font-medium flex sm:justify-between md:justify-normal md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="h-full ">
          <Link
            to={"/"}
          >
            <img className="h-full w-full" src={logo} alt='Logo' />
          </Link>
        </div>

        <div className="max-sm:hidden flex items-center text-base text-white ml-auto w-auto gap-3">
          {navbarRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`${location.pathname === route.path ? "text-[#93ADAA]" : "text-[#eee]"} transition-colors text-nowrap`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center z-40">
          <div className="relative inline-block text-left">
            <LanguageSelector />
          </div>

          <button ref={clickRef} className="sm:hidden cursor-pointer ml-5" onClick={() => hideMenuHandle(!isOpen)}>
            <svg className="w-5 h-5 text-[#eee]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className="absolute left-0 w-full top-full overflow-hidden">
          <div className={cn("sm:hidden shadow-lg opacity-0 transition transform-left w-full bg-(--color-background)", isOpen && 'block', slideStatus && 'opacity-100 transform-zero')}>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navbarRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`${location.pathname === route.path ? "text-white bg-gray-900" : "hover:bg-gray-700 hover:text-white"} block rounded-md px-3 py-2 text-base font-medium`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>


      </nav>
    </header >
  );
};

export default Navbar;
