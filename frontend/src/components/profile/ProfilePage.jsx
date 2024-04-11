import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/profile.webp";
import { useAuth } from "../../helper/context/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
// import { useCookies } from "react-cookie";
// import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  // const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    phone: "",
  });
  // const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal); // Toggle showModal state
  };

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

  const { isAuthenticated } = useAuth();
  // console.log(isAuthenticated.user.image)
  const sumbitSignupForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v1/profile",
        user,
        { withCredentials: true }
      );
      console.log(response);
      navigate("/");
      toast.success(response.data.message);
      setUser({
        email: "",
        password: "",
        confirmpassword: "",
        name: "",
        phone: "",
      });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="md:mt-10 mt-10    relative h-screen flex flex-col justify-center items-center  bg-slate-800">
      <h1 className="text-3xl mt-10 mb-4 border border-gray-500 px-8 rounded-lg">
        Profile Page
      </h1>
      <div className="flip-card rounded-xl flex justify-center items-center  w-full md:max-w-96 ">
        <div className="flip-card-inner rounded-xl">
          <div className="flip-card-front rounded-xl">
            <img
              src={logo}
              alt="Avatar"
              className=" h-[25rem] w-full rounded-xl"
            />
          </div>
          <div className="flip-card-back rounded-xl border flex  flex-col justify-center text-2xl p-4 aspect-square">
            <h1>Name: {isAuthenticated.user.name}</h1>
            <p>Phone: {isAuthenticated.user.phone}</p>
            <p>Email: {isAuthenticated.user.email}</p>
            <p>Role: {isAuthenticated.user.role}</p>
          </div>
        </div>
      </div>
      <div className="flex  md:mt-4 md:max-w-[30%]  flex-wrap w-full mb-6  justify-evenly relative  items-center">
        <div className="min-w-24 border relative border-gray-700 rounded-full flex justify-center items-center">
          <span className=" px-2 py-2">
            {" "}
            <input
              id="fileInput"
              type="file"
              // onChange={(e) => setSelectedFile(e.target.value[0])}
              className="hidden"
            />{" "}
            <label htmlFor="fileInput">
              <MdUpload className=" cursor-pointer" />
            </label>
          </span>
        </div>
        <button
          className="border border-gray-700 px-4 py-1  rounded-2xl uppercase "
          onClick={toggleModal}
        >
          Update Profile
        </button>
      </div>
      {showModal && (
        <>
          <div className=" absolute  inset-0 w-full mt-10 md:mt-0 mx-auto md:max-w-[30%] md:max-h-[90%] ">
            <div className="modal-box w-full h-full  md:mt-12  inset-0   ">
              <IoMdClose
                className="cursor-pointer absolute right-8 top-8 text-4xl"
                onClick={toggleModal}
              />
              <div className="avatar  md:mb-14">
                {isAuthenticated.user.image ? (
                  <div className="min-w-24 border border-gray-700 rounded-full">
                    <img src={isAuthenticated.user.image} alt="Profile" />
                  </div>
                ) : (
                  <div className="min-w-24 border relative border-gray-700 rounded-full flex justify-center items-center">
                    <span className=" absolute top-7 left-7 text-4xl">
                      {" "}
                      <input
                        id="fileInput"
                        type="file"
                        // onChange={(e) => setSelectedFile(e.target.value[0])}
                        className="hidden"
                      />{" "}
                      <label htmlFor="fileInput">
                        <MdUpload className=" cursor-pointer" />
                      </label>{" "}
                    </span>
                  </div>
                )}
              </div>
              <div className=" w-full ">
                <form
                  onSubmit={sumbitSignupForm}
                  value={user.role}
                  className="flex flex-col mx-auto md:min-w-[80%] gap-4"
                >
                  <input
                    className="p-2 rounded-xl outline-none"
                    type="text"
                    name="name"
                    onChange={inputChangeHandler}
                    value={user.name}
                    placeholder="Enter Name"
                  />
                  <input
                    className="p-2 rounded-xl outline-none"
                    type="email"
                    name="email"
                    onChange={inputChangeHandler}
                    value={user.email}
                    placeholder="Email"
                  />
                  <input
                    className="p-2 rounded-xl outline-none"
                    type="text"
                    name="phone"
                    onChange={inputChangeHandler}
                    value={user.phone}
                    placeholder="Enter Phone no"
                  />
                  <div className="outline-none relative">
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
                  <div className="relative outline-none">
                    <input
                      className="p-2 rounded-xl outline-none w-full"
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
                    type="submit"
                    className="bg-[#002D74] btn rounded-xl uppercase text-white py-2"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
