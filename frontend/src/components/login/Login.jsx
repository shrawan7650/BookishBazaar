import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginlogo from "../../assets/loginlogo.jpeg";
import lo from "../../assets/cup-with-stationery-library.jpg";
import toast from "react-hot-toast";
import { useAuth } from "../../helper/context/auth";
import Spinner from "../../spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
// import logo from "../../assets/bg logo.jpg"
const Login = () => {
  const { loginWithRedirect, users } = useAuth0();
  // console.log(users);

  const [loading, setLoading] = useState(true);
  const [loginLoading, setloginLoading] = useState(false);
  const { isLogged, setIsLogged, setUsersData } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    // role: "", // Added role to the user state
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

    try {
      const response = await axios.post(
        "https://bookishbazaar-zf22.onrender.com/api/v1/login",
        user
      );
      console.log(response.data.user);

      Cookies.set("token", response.data.token, { expires: 7 });
      toast.success(response.data.msg);
      setIsLogged(true);

      navigate("/");
      setloginLoading(false);
      // const {  user } = response.data;
      setUser({ email: "", password: "" }); // Reset user state
    } catch (error) {
      setloginLoading(false);
      console.log(error);
      navigate("/login");
      toast.error(error.response?.data.msg);
    }
  };

  useEffect(() => {
    // if (isLogged) {
    //   navigate(-1);
    // }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLogged]); // Added empty dependency array to run useEffect only once

  return (
    <div
      style={{
        backgroundImage: `url(${lo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" h-screen  "
    >
      <div className=" shadow-2xl flex mx-auto backdrop-blur-md min-h-[80vh] border text-white border-gray-600  relative top-20    rounded-2xl  max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-14 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-black">
            If you are already a member, easily log in
          </p>
          <form onSubmit={submitLoginForm} className="flex flex-col  gap-4">
            {/* <select
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
            </select> */}
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
                {isPasswordVisible ? (
                  <FaEye className=" cursor-pointer" />
                ) : (
                  <FaEyeSlash className=" cursor-pointer" />
                )}
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
            <div className=" text-white">
              <Link to="/forget">
                <span className=" hover:underline text-base cursor-pointer md:ml-2">
                  Forgot password?
                </span>
              </Link>
              <Link to="/signup">
                <span className=" hover:underline text-base hover:text-black cursor-pointer md:ml-2">
                  Signup Now
                </span>
              </Link>
            </div>
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
          <div className="md:block md:w-[40%] hidden">
            <img
              className="rounded-2xl "
              style={{ loading: "lazy" }}
              src={loginlogo}
              alt="Login Logo"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
