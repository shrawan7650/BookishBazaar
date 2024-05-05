import React, { useEffect, useState } from "react";
import { useAuth } from "../../../helper/context/auth";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const MangeBook = () => {
  const [pageNumber, setpageNumber] = useState(0);
  const pageSize = 10;

  const navigate = useNavigate();
  const { books, setBooks } = useAuth();

  const incrementHandler = () => {
    setpageNumber(pageNumber + 1);
  };
  const decrementHandler = () => {
    setpageNumber(pageNumber - 1);
  };

  const DeleteHandler = async (id) => {
    try {
      let filteredArray = books.filter((book) => book._id !== id);
      const response = await axios.delete(
        `https://bookishbazaar-zf22.onrender.com/api/v1/deletebook/${id}`,
        { withCredentials: true }
      );
      // Update books state after successful deletion

      setBooks(filteredArray);
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  const EditHandler = async (id) => {
    console.log(id);
    navigate(`/dashboard/admin/createbook/${id}`);
  };

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        `https://bookishbazaar-zf22.onrender.com/api/v1/books?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      console.log(response.data);
      setBooks(response?.data?.books);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, [pageNumber]);

  return (
    <div className=" w-full flex flex-col md:gap-y-1  h-fit inset-0 md:px-2 py-2">
      <h1 className=" text-black tmd:ext-2xl font-serif  font-semibold  subpixel-antialiased  text-wrap line-clamp-2">
        {" "}
        MangeBook your book invenotry!{" "}
      </h1>
      <header className=" md:h-12 w-full  md:mt-2">
        <ul className=" uppercase hidden   md:text-2xl text-sm md:flex justify-between md:px-3 md:py-2 text-black font-thin  tracking-wider">
          <li className=" md:w-[10%]">No</li>
          <li className=" md:w-[20%]">Book Name</li>
          <li className=" md:w-[24%]">Author name</li>
          <li className=" md:w-[22%]">category</li>
          <li className=" md:w-[12%]">Price</li>
          <li className=" md:w-[10%]">Edit</li>
        </ul>
      </header>

      <div className="  grid  grid-cols-2 gap-1 md:grid-cols-1   py-1 px-1 h-fit w-full">
        {books.map((item, index) => {
          return (
            <>
              <div
                key={item._id}
                className="   h-fit  md:py-1  flex flex-col rounded-md -gray-400 relative md:h-fit px-3 py-3"
              >
                <ul className=" md:uppercase md:gap-2 gap-2 flex md:flex-row h-fit  flex-col justify-between  text-wrap text-black font-thin  tracking-wider">
                  <li className=" text-wrap w-full  md:w-[2%]">
                    <span className="  md:hidden ">No:</span>
                    {pageNumber * pageSize + index + 1}
                  </li>
                  <li className=" text-wrap break-all  w-full md:text-center md:max-w-[24%] ">
                    <span className="  md:hidden ">Book Name:</span>
                    {item.title}
                  </li>
                  <li className=" text-wrap w-full  break-all md:text-center text-center md:w-[24%]">
                    <span className="  md:hidden ">Author Name:</span>
                    annu kumari verma {item.title}
                  </li>
                  <li className=" text-wrap w-full break-all  md:text-center text-center md:w-[16%]">
                    <span className="  md:hidden ">CategoryName:</span>
                    {item.title}
                  </li>
                  <li className=" text-wrap w-full break-all  md:text-center text-center md:w-[17%]">
                    Price:₹{item.price}
                  </li>
                  <div className="  flex  justify-between md:w-[10%] gap-2 mr-1  mt-2 h-fit   w-[120px]">
                    <button
                      onClick={() => EditHandler(item._id)}
                      className=" -gray-700 outline-none border px-3 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => DeleteHandler(item._id)}
                      className=" -gray-700 border outline-none   px-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </ul>
              </div>
            </>
          );
        })}
      </div>

      <div className="join grid grid-cols-2">
        <button
          onClick={decrementHandler}
          className="join-item btn btn-outline"
        >
          Previous page
        </button>
        <button
          onClick={incrementHandler}
          className="join-item btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MangeBook;
