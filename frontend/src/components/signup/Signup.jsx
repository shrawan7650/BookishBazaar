import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginlogo from "../../assets/loginlogo.avif";
import axios from "axios";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../helper/context/auth";
import lo from "../../assets/cup-with-stationery-library.jpg";
const Signup = () => {
  const { isLogged } = useAuth();
  const { loginWithRedirect, users } = useAuth0();
  console.log(users);
  const [laoding, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    role: "user",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputChangeHandler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sumbitSignupForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DEV_BASE_URL}signup`,
        user
      );
      // console.log(user);
      navigate("/login");
      toast.success(response.data.msg);
      setUser({
        email: "",
        password: "",
        confirmpassword: "",
        name: "",
        phone: "",
        role: "",
      });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <>
      {/* login container */}
      <div
        style={{
          backgroundImage: `url(${lo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={` h-screen  `}
      >
       <div className="relative ">
       <div className="bg-gray-100 flex  gap-5 backdrop-blur-lg   bg-transparent text-white    mx-auto  md:absolute left-80 top-20  overflow-hidden overflow-y-hidden flex-row-reverse rounded-2xl shadow-lg max-w-3xl  items-center">
          {/* form */}
       <div className="border max-w-full md:w-1/2">
       <div className="w-full backdrop-blur-md  rounded-md px-8 md:px-16 mt-7 mr-10">
            <h2 className="font-bold text-2xl text-[#002D74]">Signup</h2>
            <p className="text-xs mt-4 mb-2 text-[#002D74]">
              If you are already a member, easily log in
            </p>
            <form
              onSubmit={sumbitSignupForm}
              value={user.role}
              className="flex flex-col  gap-4"
            >
              {/* <select
              name="role"
              onChange={inputChangeHandler}
              className="p-2 mt-8 rounded-xl outline-none"
              value={user.role}
            >
              <option value="" disabled selected>
                Select Role
              </option>

              <option name="admin" selected>
                admin
              </option>
              <option name="user" selected>
                user
              </option>
            </select> */}
              <input
                className="p-2 rounded-xl outline-none w-full bg-transparent border"
                type="text"
                name="name"
                onChange={inputChangeHandler}
                value={user.name}
                placeholder="Enter Name"
              />
              <input
                className="p-2 rounded-xl outline-none w-full bg-transparent border"
                type="email"
                name="email"
                onChange={inputChangeHandler}
                value={user.email}
                placeholder="Email"
              />
              <input
                className="p-2 rounded-xl outline-none w-full bg-transparent border"
                type="text"
                name="phone"
                onChange={inputChangeHandler}
                value={user.phone}
                placeholder="Enter Phone no"
              />
              <div className=" outline-none relative">
                <input
                  className="p-2 rounded-xl outline-none w-full  bg-transparent border"
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={inputChangeHandler}
                />
                {isPasswordVisible ? (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 cursor-pointer md:right-[.8rem] md:top-[20%] text-2xl"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 cursor-pointer md:right-[.8rem] md:top-[20%] text-2xl"
                  />
                )}
              </div>

              <div className=" relative outline-none">
                <input  
                  className="p-2 rounded-xl outline-none w-full bg-transparent border"
                  type={isPasswordVisible ? "text" : "password"}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={user.confirmpassword}
                  onChange={inputChangeHandler}
                />
                {isPasswordVisible ? (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 md:right-[.8rem] md:top-[20%] text-2xl"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 md:right-[.8rem] md:top-[20%] text-2xl"
                  />
                )}
              </div>
              <button
                type="sumbit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Signup
              </button>
            </form>
            <Link to="/login">
              {" "}
              <p className=" hover:underline  text-center text-wrap  font-semibold  text-black ">
                already have an account <span className=" text-red-700 ">login here!</span>
              </p>
            </Link>
            <div className=" grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-white mb-3 py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            >
              <FcGoogle className="text-[1.3rem] mr-1 text-center cursor-pointer" />
              Signup with Google
            </button>
          </div>
       </div>
          {/* image */}
          {laoding ? (
            <Spinner />
          ) : (
            <div className="md:block hidden ml-2 md:w-[50%]">
              <img className="rounded-2xl" src={loginlogo} />
            </div>
          )}
        </div>
       </div>
      </div>
    </>
  );
};

export default Signup;
