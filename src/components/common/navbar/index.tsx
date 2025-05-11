import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '@/assets/logo.jpg'
import { LanguageSelector } from "../LanguageSelector";


interface Route {
  path: string;
  name: string;
}

const navbarRoutes: Route[] = [
  { name: "Home", path: "/home" },
  { name: "Examples", path: "/home" },
  { name: "Contacts", path: "/home" },
  { name: "About", path: "/home" }
];



const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6 z-50 shadow-sm bg-black">
      {/* <div
        id="navbar-portal"
        className=""
      /> */}
      <nav className="h-full  w-full hidden flex justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="h-full ">
          <Link
            to={"/"}
          >
            <img className="h-full w-full" src={logo} alt='Logo' />
          </Link>
        </div>

        <div className="flex text-base text-white ml-auto w-auto gap-3 flex-wrap 2xl:flex-nowrap">
          {navbarRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`${location.pathname === route.path ? "text-foreground" : "text-[#eee]"} transition-colors text-nowrap`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center z-40">
          <div className="relative inline-block text-left">
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
