import { NavLink, Outlet } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import { GrDocumentUpdate, GrOrderedList } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import axios from "axios";
import { useAuth } from "../../../helper/context/auth";
import toast from "react-hot-toast";
import Layout from "../../../../layout/Layout";
const DashBoard = () => {
  const{setIsLogged,usersData} = useAuth();
  console.log(usersData);
  const logoutHandler = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/logout", {
      withCredentials: true,
    });
    toast.success(response.data.msg);
    setIsLogged(false);
   
    console.log(response);
  };
  
  return (
    <>
    <Layout>

      <div className={`flex min-h-screen  ${usersData?.role==="admin"?"items-start":""}    px-2 py-2 inset-0   mt-[64px] md:mt-[64px]  `}>
        <div className="w-full md:w-80 sticky top-0 overflow-y-hidden overflow-x-hidden  bg-gray-50 border-r hidden md:block border-gray-200">
          <div className="py-4 px-6">
            <NavLink href="/"></NavLink>
          </div>
          <div className="">
            <h3 className="mx-6 mb-2 text-md flex text-gray-400 uppercase tracking-widest">
              <MdAdminPanelSettings className="mr-2 text-xl" />
              {usersData?.role} Dashboard
            </h3>
            <NavLink
              to={`/dashboard/${usersData?.role}`}
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <IoMdHome className="mr-2" />
              Home
            </NavLink>
          
            <NavLink
               to={`/dashboard/${usersData?.role}/order`}
               className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
             >
               <GrOrderedList className="mr-2" />
               Order
             </NavLink>
       {
         usersData?.role==="admin"?<div>
         <NavLink
               to="/dashboard/admin/createbook"
               className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
             >
               <MdCloudUpload className="mr-2" />
               Upload Book
             </NavLink>
             <NavLink
               to="/dashboard/admin/mangebook"
               className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
             >
               <GrDocumentUpdate className="mr-2" />
               Mange Book
             </NavLink>
             <NavLink
               to="/dashboard/admin/product"
               className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
             >
               <IoBag className="mr-2" />
               Products
             </NavLink>
            
         </div>:""
       }

          </div>
          <div className="mb-10">
        
           
            <NavLink
              to={`/dashboard/${usersData?.role}/profile`}
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <FaUser className="mr-2" />
              User
            </NavLink>
            <NavLink
            onClick={logoutHandler}
              href="/logout"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <IoIosLogOut className="mr-2" />
              Logout
            </NavLink>
            <NavLink
              href="/"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <IoSettingsOutline className="mr-2" />
              Setting
            </NavLink>
          </div>
          <hr />
          <div className="mb-10">
            <NavLink
              href="/"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <img
                src={usersData?.image}
                alt
                className="w-7 h-7 rounded-full mr-2"
              />
              {usersData?.name}
            </NavLink>
            <NavLink
              href="/"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <GiUpgrade className="mr-2" />
              Upgrade to Pro
            </NavLink>
            <NavLink
              href="/"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <IoDocumentTextOutline className="mr-2" />
              Documatation
            </NavLink>
            <NavLink
              to="/help"
              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
            >
              <IoIosHelpBuoy className="mr-2" />
              Help
            </NavLink>
          </div>
        </div>

        <Outlet />
      </div>
    </Layout>
    </>
  );
};

export default DashBoard;
