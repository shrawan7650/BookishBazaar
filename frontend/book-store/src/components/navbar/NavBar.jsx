import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../helper/context/auth";
import toast from "react-hot-toast";
import { useCart } from "../../helper/context/cart";

const NavBar = () => {
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
          ? "sticky-navbar shadow-md   bg-slate-300   duration-500 transition-all ease-in-out "
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
          className={` md:hidden block  border fixed top-16 duration-500  right-0 rounded-md h-screen bg-black w-screen text-white ${
            togle ? "right-[-100%]" : "right[0]"
          }`}
        >
          <div className="ml-5 gap-y-4 flex flex-col px-10 py-10 text-2xl">
            <li>
              <NavLink
                to="/"
                className="border-b-2   hover:text-red-600 border-gray-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className="border-b-2  hover:text-red-600 border-gray-400"
              >
                Course
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="border-b-2  hover:text-red-600 border-gray-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="border-b-2  hover:text-red-600 border-gray-400"
              >
                Conatct
              </NavLink>
            </li>
          </div>
        </ul>

        <a className="text-[10px] md:text-2xl ml-2 hidden md:block cursor-pointer font-bold ">
        BookishBazaar
        </a>
      </div>

      {/* laptop */}
      <div className="navbar w-full justify-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 text-[1rem]">
          <li>
            <NavLink
              to="/"
              className="border-b antialiased   shadow-2xl hover:text-red-600 border-gray-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              className="border-b-2  hover:text-red-600 border-gray-400"
            >
              Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="border-b-2  hover:text-red-600 border-gray-400"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="border-b-2  hover:text-red-600 border-gray-400"
            >
              Conatct
            </NavLink>
          </li>
        </ul>
      </div>

      {/* end div */}
      <div className="navbar-end md:flex    md:justify-around md:w-[800px] w-[500px] justify-between">
        {!isAuthenticated?.user ? (
          <>
            <div className="flex gap-1">
              <NavLink to="/login">
                <button className="btn px-3 md:hover:bg-white hover:text-black bg-slate-600 text-white btn-sm">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn  bg-slate-600 hover:border hover:border-gray-300 text-white btn-sm">
                  Signup
                </button>
              </NavLink>
            </div>
          </>
        ) : (
          <>
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
                <FaUserAlt className="text-2xl  md:block text-black cursor-pointer" />
              </Link>
            </div>
          </>
        )}

        <span className="flex relative">
          <NavLink to="/cart">
            {" "}
            <FaShoppingCart className=" text-3xl text-black cursor-pointer" />
          </NavLink>
          <div className="badge badge-secondary md:left-5 md:absolute">({cart.length})</div>
          
        </span>
      </div>
    </div>
  );
};

export default NavBar;
