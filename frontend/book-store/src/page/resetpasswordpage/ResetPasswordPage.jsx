import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const resetHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3000/api/v1/change-password",
      { email, otp, password: newPassword }
    );
    toast.success(response.data.msg);
    navigate("/login");
    setOtp("");
    setNewPassword("");
    // console.log(response);
  };
  return (
    <div>
      &lt;&gt;
      <div className="relative font-inter antialiased">
        <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">
              <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                <header className="mb-8">
                  <h1 className="text-2xl font-bold mb-1">
                    Mobile Phone Verification
                  </h1>
                  <p className="text-[15px] text-slate-500">
                    Enter the 4-digit verification code that was sent to your
                    phone number.
                  </p>
                </header>
                <form id="otp-form">
                  {/* <div className="flex items-center justify-center gap-3">
                <input type="text" name="v1" onChange={(e)=>setValue(e.target.value)} className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" pattern="\d*" maxLength={1} />
                <input type="text" name="v2" onChange={(e)=>setValue(e.target.value)} className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" maxLength={1} />
                <input type="text" name="v3" onChange={(e)=>setValue(e.target.value)} className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" maxLength={1} />
                <input type="text" name="v4" onChange={(e)=>setValue(e.target.value)} className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" maxLength={1} />
              </div> */}
                  <input
                    className="p-2 w-[65%] mt-8 rounded-xl  bg-white"
                    type="text"
                    name="otp"
                    placeholder="Enter Otp"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <input
                    className="p-2 w-[65%] mt-8 rounded-xl  bg-white"
                    type="email"
                    name="email"
                    placeholder="New Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div></div>
                  <div className="max-w-[260px] mx-auto mt-4">
                    <button
                      type="submit"
                      onClick={resetHandler}
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                    >
                      Verify Account
                    </button>
                  </div>
                </form>
                <div className="text-sm text-slate-500 mt-4">
                  Didn{""}t receive code?{" "}
                  <a
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    href="#0"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
