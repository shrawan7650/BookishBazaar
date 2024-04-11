import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../helper/context/auth";
import toast from "react-hot-toast";
import { useCart } from "../../helper/context/cart";
import { CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowDropDownFill  } from "react-icons/ri";
const NavBar = () => {
  const[show, setShow] = useState(false);
  const [cart] = useCart();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  // console.log("this is auth", isAuthenticated.user);
  const [togle, setTogle] = useState(true);

  const logoutHandler = () => {
    setIsAuthenticated({
      ...isAuthenticated,
      token: null,
      user: null,
    });
    toast.success("logout succssfully");
    localStorage.removeItem("token");
  };

  return (
    <div
      className={`navbar bg-white text-black z-30   fixed top-0 left-0 right-0 w-full mx-auto border-b shadow-md ${
        sticky
          ? "sticky-navbar shadow-md   bg-slate-400   duration-500 transition-all ease-in-out "
          : ""
      }`}
    >
      {/* mobile Responsive */}
      <div className="navbar-start">
        <IoMdMenu
          className="text-4xl md:hidden"
          onClick={() => setTogle(!togle)}
        ></IoMdMenu>

        <ul
          className={` md:hidden block  border fixed list-none top-16 duration-500  rounded-md h-screen bg-black opacity-90 w-[95%]  text-white ${
            togle ? "left-[-100%]" : "left-[-2px]"
          }`}
        >
          <div className="ml-5 gap-y-4 flex flex-col px-10 py-10 text-2xl list-none">
            <li className="">
              <Link
                to="/"
                className="border-b-2   border-gray-400"
                onClick={() => setTogle(!togle)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/course"
                className="border-b-2  border-gray-400"
                onClick={() => setTogle(!togle)}
              >
                Books
              </Link>
            </li>
            <li>
              <NavLink
                to="/about"
                className="border-b-2  border-gray-400"
                onClick={() => setTogle(!togle)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="border-b-2  border-gray-400"
                onClick={() => setTogle(!togle)}
              >
                Conatct
              </NavLink>
            </li>

            
          </div>
          
        </ul>

        <a className=" BookishBazaar text-[10px] md:text-4xl ml-2 hidden md:block cursor-pointer font-bold ">
          BookishBazaar
        </a>
      </div>

      {/* laptop */}
      <div className="navbar w-full justify-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 text-[1rem]">
          <li>
            <NavLink
              to="/"
              className="border-b antialiased   shadow-2xl  hover:scale-105 border-gray-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              className="border-b-2 antialiased   shadow-2xl  hover:scale-105  border-gray-400"
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="border-b-2  antialiased   shadow-2xl  hover:scale-105 border-gray-400"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="border-b-2  antialiased   shadow-2xl  hover:scale-105 border-gray-400"
            >
              Conatct
            </NavLink>
          </li>
        </ul>
      </div>
      <label className="input md:w-80 md:block hidden bg-white border  border-gray-700  md:flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <CiSearch />
      </label>
{/* drop dowm */}




      {/* end div */}
      <div className="navbar-end md:flex    md:justify-around md:w-[800px] w-[500px] justify-between">
        {!isAuthenticated?.user ? (
          <>
            <div className="flex gap-1">
              <NavLink to="/login">
                <button className="btn px-3 md:hover:bg-white antialiased    hover:border shadow-2xl  hover:scale-105 hover:text-black bg-slate-600 text-white btn-sm">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn  bg-slate-600   md:hover:bg-white  hover:border antialiased   shadow-2xl  hover:scale-105 hover:text-black   hover:border-gray-300 text-white btn-sm">
                  Signup
                </button>
              </NavLink>
            </div>
          </>
        ) : (
          <div className="relative inline-block ml-5 hover:block text-left">
  <div>
    <button type="button" className="inline-flex text-1xl w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      {isAuthenticated?.user?.role}
      <RiArrowDropDownFill onClick={()=>setShow(!show)}   className={`${show?" rotate-0":" rotate-180"} text-3xl`}/>
    </button>
  </div>
 {
  show&& <div className="absolute md:right-0    -z-1  mt-2 w-[13.5rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
  <div className="py-1" role="none">
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">DashBoard</a>
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
    <div className="flex gap-x-5 justify-center items-center">
              <NavLink to="/login">
                <button
                  className="btn  bg-slate-600 text-white btn-sm"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </NavLink>
              <Link to="/profile">
                <FaUserAlt className="text-2xl  md:block text-black cursor-pointer" onClick={()=>setShow(false)} />
              </Link>
              <Link>
              <IoSettingsSharp className="text-2xl  md:block text-black cursor-pointer"  />
              </Link>
            </div>
   
  </div>
</div>
 }
</div>
        )}

        <span className="flex relative  right-5">
          <NavLink to="/cart">
            {" "}
            <FaShoppingCart className=" text-3xl text-black cursor-pointer" onClick={()=>setShow(false)} />
          </NavLink>
          <div className="badge badge-secondary absolute left-4 md:left-5 l md:absolute">
            ({cart.length})
          </div>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
