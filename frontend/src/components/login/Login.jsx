import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginlogo from "../../assets/loginlogo.jpeg";
import toast from "react-hot-toast";
import { useAuth } from "../../helper/context/auth";
import Spinner from "../../spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
// import logo from "../../assets/bg logo.jpg"
const Login = () => {
  const { loginWithRedirect, users } = useAuth0();
  console.log(users);

  const [loading, setLoading] = useState(true);
  const [loginLoading, setloginLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "", // Added role to the user state
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputChangeHandler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    setloginLoading(true);
    console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          // withCredentials: true,
          // http:true
        }
      );
      console.log(response);
      toast.success(response.data.msg);
      navigate("/");
      setloginLoading(false);
      // const {  user } = response.data;
      setUser({ email: "", password: "", role: "" }); // Reset user state
      setIsAuthenticated({
        ...isAuthenticated,
        user: response.data.user,
        token: response.data.token,
      });
      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (error) {
      setloginLoading(false);
      console.log(error);
      navigate("/login");
      toast.error(error.response?.data.msg);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []); // Added empty dependency array to run useEffect only once

  return (
    <div className="-mt-4 md:-mt-4 ">
      <div className="bg-gray-100  border-red-600  flex mx-auto md:min-h-[70vh] border-2 relative top-10 mt-[5rem] mb-32  rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>
          <form onSubmit={submitLoginForm} className="flex flex-col  gap-4">
            <select
              name="role"
              onChange={inputChangeHandler}
              className="p-2 mt-8 rounded-xl outline-none"
              value={user.role} // Ensure selected role is controlled by state
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
            <input
              className="p-2  rounded-xl outline-none"
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
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 z-10 md:right-[.5rem] top-[.5rem] md:top-[.5rem] text-2xl"
              >
                {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <button
              type="submit" // Corrected typo from "sumbit" to "submit"
              className="bg-[#002D74] rounded-xl text-white py-2 flex justify-center items-center gap-3 hover:scale-105 duration-300"
            >
              {loginLoading && (
                <span className="loading loading-spinner  loading-xs"></span>
              )}
              Login
            </button>
            <Link to="/forget">
              <span className=" hover:underline text-base text-black cursor-pointer md:ml-2">
                Forgot password?
              </span>
            </Link>
            <div className=" grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-white  py-2 w-full rounded-xl  flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            >
              <FcGoogle className="text-[1.3rem] mr-1 text-center cursor-pointer" />
              Signup with Google
            </button>
          </form>
          {/* Omitted other login options for brevity */}
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="md:block md:w-[40%] hidden border">
            <img className="rounded-2xl" src={loginlogo} alt="Login Logo" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
