import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginlogo from "../../assets/loginlogo.jpeg";
import toast from "react-hot-toast";
import { useAuth } from "../../helper/context/auth";
const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        user
      );
      console.log(response);
      toast.success(response.data.msg);
      setUser({ email: "", password: "" }); // Removed 'confirmpassword' from the state reset
      navigate("/");
      // const { token, user } = response.data;
      // console.log(token, user);
      setIsAuthenticated({
        ...isAuthenticated,
        user: response.data.user,
        token: response.data.token,
      });
      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.msg);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen   mt-16 md:mt-20 flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>
          <form onSubmit={sumbitSignupForm} className="flex flex-col  gap-4">
            <input
              className="p-2 mt-8 rounded-xl outline-none"
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputChangeHandler}
              value={user.email}
            />
            <div className=" relative outline-none">
              <input
                className="p-2 rounded-xl border outline-none w-full"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={inputChangeHandler}
              />

              {isPasswordVisible ? (
                <FaEye
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 z-10 md:right-[.5rem] top-[.5rem] md:top-[.5rem] text-2xl"
                />
              ) : (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  className="absolute  right-3 md:top-[.5
                  rem] top-[.5rem] z-10  md:right-[.5rem] text-2xl"
                />
              )}
            </div>

            <button
              type="sumbit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <FcGoogle className="text-[1.3rem] mr-1 text-center cursor-pointer" />
            Login with Google
          </button>
          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="/forget">Forgot your password?</a>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don{""}t have an account?</p>
            <Link to="/signup">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="md:block md:w-[40%] hidden border">
          <img className="rounded-2xl" src={loginlogo} />
        </div>
      </div>
    </section>
  );
};

export default Login;
