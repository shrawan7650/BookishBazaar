import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForgetPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const resetHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/v1/email-send",
      { email }
    );
    const responseEmail = response.data.data.email;
    alert("OTP CODE:-" + response.data.data.code);
    navigate(`/reset?email=${responseEmail}`);
  };
  return (
    <div>
      <main className="relative w-screen h-screen flex items-center justify-center  bg-gray-200 sofia  text-gray-900">
        <div className="flex items-center justify-center w-full h-full p-4 sofia">
          <div className="w-11/12 p-4 text-gray-900 bg-white rounded sm:w-9/12 md:w-7/12 xl:w-5/12 xl:scale-125 2xl:scale-150">
            <p className="text-3xl text-center cubano">Forgot Password ?</p>
            <p className="pb-2 mb-4 text-base text-center sofia">
              Reset password in two quick steps
            </p>
            <form className="flex flex-col items-center gap-4">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 text-black bg-gray-200 dark:text-white dark:bg-[#252A34] rounded shadow focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                placeholder="Email..."
              />
              <button
                type="submit"
                onClick={resetHandler}
                className="w-full p-2 text-lg text-white bg-blue-500 rounded shadow-md hover:shadow-lg active:shadow-md sofia hover: active:scale-95"
              >
                Reset Password
              </button>
              <div className="flex items-center justify-between w-full gap-2 ">
                <button
                  href="#"
                  className="  rounded flex w-fit group items-center justify-center  font-semibold p-1 capitalize focus:outline-none hover: active:scale-90 shadow-lg hover:shadow-xl "
                >
                  <span className=" material-symbols-outlined">home</span>Home
                </button>
                <button
                  href="#"
                  className="flex items-center justify-center p-1 font-semibold capitalize  rounded shadow-lg w-fit hover:bg-blue-500 focus:outline-none hover: active:scale-90 hover:shadow-xl "
                >
                  <span className="rotate-180 material-symbols-outlined">
                    <FaArrowRight />
                  </span>
                  back
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgetPage;
