/* eslint-disable no-unsafe-optional-chaining */

// import axios from "axios";
import logo from "../../assets/profile.webp";
import { useAuth } from "../../helper/context/auth";
// import { useEffect, useState } from "react";

const ProfilePage = () => {
  // const [user, setUser] = useState();
  const { isAuthenticated } = useAuth();
// console.log(isAuthenticated.user)
// const {id} =isAuthenticated.user._id&&isAuthenticated.user.email;      
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3000/api/v1/profile/${id}`);
  //       console.log(response.data);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); // Call the async function
  // }, []); 

  return (
    <div className="  md:mt-20 w-full flex flex-col justify-center items-center bg-slate-800 ">
      <div className="  border border-gray-600  my-4 lg:w-9/12 md:w-full bg-gray-900 rounded-2xl shadow-2xl">
        <img
          alt="Card"
          src={logo}
          className="md:max-w-[30rem] mx-w-[10rem] md:mt-[0rem] mt-[2.5rem]  rounded-lg shadow-lg"
        />
      </div>
      <div className="relative -top-[.5rem]  md:top-0 z-0 md:mb-72 mb-0 md:right-52 w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto border border-gray-600 rounded-2xl ">
        <div className=" text-white">
          <h3 className="font-bold text-center text-2xl">
            {isAuthenticated.user.name}
          </h3>
          <div className="pl-2">
            <p className="text-white my-5 px-2 text-center">
              {isAuthenticated.user.email}
            </p>
            <i className="fas fa-quote-right text-2xl"></i>
          </div>
          <i className="fas fa-quote-right text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
