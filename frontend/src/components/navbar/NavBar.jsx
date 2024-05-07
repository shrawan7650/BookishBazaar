import { useEffect, useState } from "react";
import { FaOrcid, FaRoad, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../helper/context/auth";
import toast from "react-hot-toast";
import { useCart } from "../../helper/context/cart";
import { CiBellOn, CiBookmark, CiHome, CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import axios from "axios";
import { SiStorybook } from "react-icons/si";
import { MdCloudUpload } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import SearchBar from "./SearchBar";
import logo from "../../assets/my-pic.jpg";
import { FcAbout } from "react-icons/fc";
import Cookies from "js-cookie";
const NavBar = () => {
  const token = Cookies.get("token");
  const [show, setShow] = useState(false);
  const [cart] = useCart();
  const [sticky, setSticky] = useState(false);
  const { isLogged, setIsLogged } = useAuth();
  const { usersData } = useAuth();
  const [searchToggele, setSearchToggel] = useState(false);
  //  console.log(usersData.role);
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

  // console.log("this is auth", isAuthenticated.user);
  const [togle, setTogle] = useState(true);

  const logoutHandler = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_DEV_BASE_URL}logout`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response.data.msg);
    setIsLogged(false);

    console.log(response);
  };
  // console.log(usersData)
  return (
    <>
      <SearchBar searchtogle={searchToggele} setsearchtogle={setSearchToggel} />
      <div
        className={` navbar  bg-white text-black z-30   fixed top-0 left-0 right-0 w-full mx-auto border-b shadow-md ${
          sticky
            ? "sticky-navbar shadow-md   bg-slate-100   duration-500 transition-all ease-in-out "
            : ""
        }`}
      >
        {/* mobile Responsive */}
        <div className="navbar-start ">
          <IoMdMenu
            className="text-3xl  md:hidden"
            onClick={() => setTogle(!togle)}
          ></IoMdMenu>

          <ul
            className={` md:hidden block  overflow-x-hidden fixed overflow-y-auto list-none top-16 duration-500  rounded-md h-[90%] bg-black w-[95%]  text-white ${
              togle ? "left-[-100%]" : "left-[-2px]"
            }`}
          >
            <div className=" gap-y-4   mb-14  ml-4 flex flex-col px-1 py-10 list-none">
              <li className="flex items-center  py-2.5 text-gray-500 hover:text-orange-600 group">
                <CiHome className=" mr-2" />
                <NavLink
                  to="/"
                  className="   border-gray-400"
                  onClick={() => setTogle(!togle)}
                >
                  Home
                </NavLink>
              </li>
              <li className=" flex items-center  py-2.5 text-gray-500 hover:text-orange-600 group">
                <CiBookmark className=" mr-2" />
                <NavLink
                  to="/book"
                  className=" border-gray-400"
                  onClick={() => setTogle(!togle)}
                >
                  Books
                </NavLink>
              </li>
              <li className=" flex items-center  py-2.5 text-gray-500 hover:text-orange-600 group">
                <FcAbout className=" mr-2" />
                <NavLink
                  to="/about"
                  className="  border-gray-400"
                  onClick={() => setTogle(!togle)}
                >
                  About
                </NavLink>
              </li>
              <li className=" flex items-center  py-2.5 text-gray-500 hover:text-orange-600 group">
                <CiBellOn className=" mr-2" />
                <NavLink
                  to="/contact"
                  className="  border-gray-400"
                  onClick={() => setTogle(!togle)}
                >
                  Conatct
                </NavLink>
              </li>
              <hr className=" mb-2" />
            </div>
            {(usersData?.role === "user" || usersData?.role === "admin") && (
              <div className=" w-full  top-72 left-0 absolute  ">
                <div className="w-full  ">
                  <div className=" w-ful ">
                    <h3 className=" flex mr-2 md:gap-5 gap-3 text-center">
                      <MdAdminPanelSettings className=" ml-4 text-xl" />
                      {usersData?.role} Dashboard
                    </h3>
                    <NavLink
                      onClick={() => setTogle(!togle)}
                      href="/"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <IoMdHome className="mr-2" />
                      {usersData?.role} Home
                    </NavLink>

                    {usersData?.role === "admin" ? (
                      <div>
                        <NavLink
                          onClick={() => setTogle(!togle)}
                          to="/dashboard/admin/createbook"
                          className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                          <MdCloudUpload className="mr-2" />
                          Upload Book
                        </NavLink>
                        <NavLink
                          onClick={() => setTogle(!togle)}
                          to="/dashboard/admin/mangebook"
                          className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                          <GrDocumentUpdate className="mr-2" />
                          Mange Book
                        </NavLink>
                        <NavLink
                          onClick={() => setTogle(!togle)}
                          to="/dashboard/admin/product"
                          className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                          <IoBag className="mr-2" />
                          Products
                        </NavLink>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-10">
                  <NavLink
                      onClick={() => setTogle(!togle)}
                      to= {`/dashboard/${usersData?.role}/order`}
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <FaRoad className="mr-2" />
                      Order
                    </NavLink>

                    <NavLink
                      onClick={() => setTogle(!togle)}
                      to={`/dashboard/${usersData?.role}/profile`}
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <FaUser className="mr-2" />
                      User
                    </NavLink>

                    <NavLink
                      onClick={logoutHandler}
                      href="/"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <IoIosLogOut className="mr-2" />
                      Logout
                    </NavLink>
                    <NavLink
                      onClick={() => setTogle(!togle)}
                      href="/"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <IoSettingsOutline className="mr-2" />
                      Setting
                    </NavLink>
                  </div>
                  <hr />
                  <div className="mb-10">
                    <NavLink
                      onClick={() => setTogle(!togle)}
                      href="/"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <img
                        src={usersData?.image}
                        alt
                        className="w-7 h-7 rounded-full mr-2"
                      />
                      {usersData?.name}
                    </NavLink>
                    <NavLink
                      onClick={() => setTogle(!togle)}
                      href="/"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <GiUpgrade className="mr-2" />
                      Upgrade to Pro
                    </NavLink>
                    <NavLink
                      onClick={() => setTogle(!togle)}
                      href="/"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <IoDocumentTextOutline className="mr-2" />
                      Documatation
                    </NavLink>
                    <NavLink
                      onClick={() => setTogle(!togle)}
                      to="/help"
                      className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                    >
                      <IoIosHelpBuoy className="mr-2" />
                      Help
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </ul>
          <p className="text-[10px] relative md:text-4xl ml-2 hvr-icon-buzz-out hidden md:flex hover:bg-black  text-red-900  hover:text-black font-bold ">
            <SiStorybook className=" cursor-wait " />
            <p className=" cursor-pointer">BookS</p>
          </p>
        </div>

        {/* laptop */}
        <div className="navbar w-full justify-center absolute hidden lg:flex">
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
                to="/book"
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

        {/* drop dowm */}

        {/* end div */}
        <div className="   md:flex absolute md:right-8 right-2   gap-2 md:gap-8">
          <CiSearch
            className="md:text-3xl text-2xl cursor-pointer"
            onClick={() => setSearchToggel(!searchToggele)}
          />
          <NavLink to={`/dashboard/${usersData?.role}`}>
            <div className="relative  inline-block ml-5 hover:block text-left">
              <button
                type="button"
                className="inline-flex text-1xl transition-all duration-700 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Dasboard
              </button>
            </div>
          </NavLink>

          <span
            className={`flex relative ${
              usersData?.role === "admin" ? "hidden" : ""
            }  md:right-5`}
          >
            <NavLink to="/cart">
              {" "}
              <img
                className=" w-10 h-10 "
                src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-011/64/shopping_bag_cart-512.png"
              />
              <span className="inline-flex items-center absolute top-4 cursor-pointer  right-3 justify-center w-4 h-4 ms-1  font-semibold text-blue-800 bg-blue-200 rounded-full">
                ({cart.length})
              </span>
            </NavLink>
          </span>
          <div className=" h-12 w-12   group  relative rounded-full  cursor-pointer border border-gray-400">
            <img
              className=" h-12 w-12 object-fill image-full rounded-full "
              src={usersData?.image}
            />

            <div className=" absolute hidden  px-1 py-1 hover:duration-700  hover:transition-all group-hover:block md:-right-8 -right-2 top-14  h-auto  w-fit border border-gray-600 bg-white text-black rounded-md">
              <p>{usersData?.name}</p>
              <p>{usersData?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
