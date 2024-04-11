import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginlogo from "../../assets/loginlogo.avif";
import axios from "axios";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
const Signup = () => {
  const { loginWithRedirect,users} =  useAuth0();
  console.log(users)
  const [laoding, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    role: "",
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
    console.log(user)
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/signup",
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
      <div className="bg-gray-100 flex md:min-h-[80vh] mx-auto relative top-10  mt-16 md:mt-[5rem] mb-32 flex-row-reverse rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16 mt-7">
          <h2 className="font-bold text-2xl text-[#002D74]">Signup</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>
          <form
            onSubmit={sumbitSignupForm}
            value={user.role}
            className="flex flex-col  gap-4"
          >
            <select
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
            </select>
            <input
              className="p-2   rounded-xl outline-none"
              type="text"
              name="name"
              onChange={inputChangeHandler}
              value={user.name}
              placeholder="Enter Name"
            />
            <input
              className="p-2   rounded-xl outline-none"
              type="email"
              name="email"
              onChange={inputChangeHandler}
              value={user.email}
              placeholder="Email"
            />
            <input
              className="p-2   rounded-xl outline-none"
              type="text"
              name="phone"
              onChange={inputChangeHandler}
              value={user.phone}
              placeholder="Enter Phone no"
            />
            <div className=" outline-none relative">
              <input
                className="p-2 rounded-xl outline-none w-full"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
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

            <div className=" relative outline-none">
              <input
                className="p-2 rounded-xl  outline-none w-full"
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
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button onClick={() => loginWithRedirect()} className="bg-white  py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <FcGoogle className="text-[1.3rem] mr-1 text-center cursor-pointer" />
            Signup with Google
          </button>
        </div>
        {/* image */}
        {laoding ? (
          <Spinner />
        ) : (
          <div className="md:block hidden md:w-[40%]">
            <img className="rounded-2xl" src={loginlogo} />
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
