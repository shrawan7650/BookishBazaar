import Banner6 from "../banner/Banner6";
import { IoMail } from "react-icons/io5";
import axios from "axios";
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagramSquare,
} from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../../layout/Layout";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const sumbitHandler = async (e) => {
    const { name, email, message, phone } = contact;
    e.preventDefault();
    if (!name || !email || !message || !phone) {
      toast.error("Required All Filed");
    } else {
      await axios.post(
        "https://bookishbazaar-zf22.onrender.com/api/v1/contact",
        contact
      );
      toast.success("Resolve Quickly");
      setContact({ email: "", phone: "", name: "", message: "" });
    }
  };
  return (
    <>
      <Layout>
        <div className="w-full flex  z-0 justify-center items-center flex-col bg-[#FCEBE6] mt-10 min-h-[32rem]">
          <h1 className="md:text-6xl text-4xl text-black  font-medium">
            Contact
          </h1>
          <div className="w-full">
            <p className="text-black text-2xl text-center mt-5 ">
              Have questions or want to get in touch with us? Feel free to reach
              out!
            </p>
          </div>
        </div>
        <div>
          <div className="my-6 mx-auto max-w-3xl h-[40rem] relative top-[-80px] bg-white font-[sans-serif]">
            <div className="flex flex-col float-start px-8 py-6 space-x-3 space-y-2">
              <h1 className="text-3xl text-[#333] text-start font-extrabold ">
                Get In Touch
              </h1>
              <p>
                Got a question? Want to learn more about our bookstore? Shoot us
                a message!
              </p>
              <span className="flex items-center gap-5 text-1.5xl">
                {" "}
                <IoMail className="text-2xl text-gray-800" />
                book2401@gmail.com
              </span>
            </div>

            <form
              onSubmit={sumbitHandler}
              className="mt-8 z-0 space-y-4 text-black"
            >
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => {
                  setContact({ ...contact, [e.target.name]: e.target.value });
                }}
                className="w-[80%]   rounded-md py-3 ml-10 md:ml-12 px-4 bg-gray-100 text-sm outline-blue-500"
                value={contact.name}
              />

              <input
                value={contact.email}
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={(e) => {
                  setContact({ ...contact, [e.target.name]: e.target.value });
                }}
                className="w-[80%]  rounded-md py-3 px-4 ml-10 md:ml-12 bg-gray-100 text-sm outline-blue-500"
              />

              <input
                value={contact.phone}
                type="text"
                placeholder="Enter Phone No"
                name="phone"
                onChange={(e) => {
                  setContact({ ...contact, [e.target.name]: e.target.value });
                }}
                className="w-[80%]  rounded-md py-3 px-4 ml-10 md:ml-12 bg-gray-100 text-sm outline-blue-500"
              />
              <textarea
                value={contact.message}
                placeholder="Describe your Problem"
                rows="6"
                name="message"
                onChange={(e) => {
                  setContact({ ...contact, [e.target.name]: e.target.value });
                }}
                className="w-[80%] rounded-md px-4 ml-10 md:ml-12 bg-gray-100 text-sm pt-3 outline-blue-500"
              ></textarea>
              <button
                type="sumbit"
                className="text-white bg-blue-500 ml-24 md:ml-16 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-[40%]"
              >
                Send
              </button>
            </form>

            {/* <div className="border mt-5 border-black"></div> */}

            <div className="flex gap-5 ml-3 mt-8 md:gap-10 md:mt-4 md:ml-[32rem] text-black cursor-pointer">
              <a>
                <FaYoutube className="text-2xl" />
              </a>
              <a>
                <FaTwitter className="text-2xl" />
              </a>
              <a>
                <FaFacebookF className="text-2xl" />
              </a>

              <a>
                <FaInstagramSquare className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <Banner6 className="" />
      </Layout>
    </>
  );
};

export default Contact;
