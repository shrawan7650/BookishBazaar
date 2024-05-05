import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/profile.webp";
import { useAuth } from "../../helper/context/auth";
import { FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
// import { useCookies } from "react-cookie";
// import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const cloud_name = "dmmnkipms";
  const preset_key = "backcb9s";
  const { usersData, setUsersData } = useAuth();
  const [photo, setPhoto] = useState(null); // Initialize photo state as null

  // const [cookies, removeCookie] = useCookies([]);
  // console.log(usersData);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    phone: "",
    img_url: "",
  });
  // const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();
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

  // const { isAuthenticated } = useAuth();
  // console.log(isAuthenticated.user.image)
  const sumbitSignupForm = async (e) => {
    e.preventDefault();
    // console.log(user);
    const data = new FormData();
    const element = document.getElementById("imageUpload");
    if (element?.files) {
      const fileImg = element.files[0];
      data.append("file", fileImg);
    }
    data.append("upload_preset", preset_key);
    const cloudiplaodimage = async () => {
      const result = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        data
      );

      return result.data;
    };
    const res = await cloudiplaodimage();
    const img_url_sec = res.secure_url;
    console.log(img_url_sec);
    user.img_url = img_url_sec;
    console.log(user);

    const response = await axios.put(
      "https://bookishbazaar-zf22.onrender.com/api/v1/profile",
      user,
      { withCredentials: true }
    );
    console.log(response);
    // navigate("/");
    window.location.reload();
    toast.success(response.data.message);
    setUser({
      email: "",
      password: "",
      confirmpassword: "",
      name: "",
      phone: "",
    });
    setShowModal(false);
  };

  const handleImageUpload = async () => {
    console.log("upload");
    const element = document.getElementById("imageUpload");
    if (element?.files) {
      const file = element.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setPhoto(url);
        // formik.setFieldValue("file", file);
      }
    }
  };

  // remove image
  // const handleRemoveImage = () => {
  //   if (inputRef.current) {
  //     inputRef.current.value = "";
  //   }
  //   setImagePreview(value.imageUrl);
  //   formik.setFieldValue("file", null);
  // }
  return (
    <div className="  border border-red-800 w-full   relative h-screen flex flex-col justify-center items-center  bg-slate-800">
      <h1 className="text-3xl  mb-4 border border-gray-500 px-8 rounded-lg">
        Profile Page
      </h1>
      <div className="flip-card rounded-xl flex justify-center items-center  w-full md:max-w-96 ">
        <div className="flip-card-inner rounded-xl">
          <div className="flip-card-front rounded-xl">
            <img
              src={usersData?.image}
              alt="Avatar"
              className=" h-[25rem] w-full rounded-xl"
            />
          </div>
          <div className="flip-card-back rounded-xl border flex  flex-col justify-center text-2xl p-4 aspect-square">
            <h1>Name: {usersData?.name}</h1>
            <p>Phone: {usersData?.phone}</p>
            <p>Email: {usersData?.email}</p>
            <p>Role: {usersData?.role}</p>
          </div>
        </div>
      </div>
      <div className="flex  md:mt-4 md:max-w-[30%]  flex-wrap w-full mb-6  justify-evenly relative  items-center">
        <button
          className="border border-gray-700 px-4 py-1  rounded-2xl uppercase "
          onClick={toggleModal}
        >
          Update Profile
        </button>
      </div>

      {/* update profile  */}
      {showModal && (
        <>
          <div className=" absolute   md:right-10 top-0 w-full mt-10 md:mt-0 mx-auto md:max-w-[30%] md:max-h-[90%] ">
            <div className="modal-box border w-full h-full  md:mt-12  inset-0   ">
              <IoMdClose
                className="cursor-pointer absolute right-8 top-8 text-4xl"
                onClick={toggleModal}
              />
              <div className="  flex gap-12 w-72">
                <div className="avatar  md:mb-14">
                  <div className="min-w-24  border relative border-gray-700 rounded-full flex justify-center items-center">
                    <span className=" absolute top-7 left-7 text-4xl">
                      {" "}
                      <input
                        type="file"
                        accept="image/*"
                        id="imageUpload"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                        ref={inputRef}
                        className="hidden"
                      />{" "}
                      <label htmlFor="imageUpload">
                        <FaCamera className="cursor-pointer" />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="mb-3 w-24 h-24 border relative rounded-full ">
                  {photo && (
                    <div className="text-center rounded-full w-24 h-24 ">
                      <img
                        src={photo}
                        alt="product_photo"
                        height={"200px"}
                        className=" rounded-full h-24 w-24"
                      />
                      <IoMdClose
                        className="cursor-pointer absolute right-2 top-2 text-black  text-2xl"
                        onClick={() => setPhoto("")}
                      />
                    </div>
                  )}
                </div>
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
