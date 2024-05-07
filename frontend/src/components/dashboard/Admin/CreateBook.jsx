import { useEffect, useState } from "react";
import { bookCategories, years } from "../../../data/data";
import axios from "axios";
import { useParams } from "react-router";
import toast from "react-hot-toast";

import Cookies from "js-cookie";
const CreateBook = () => {
  

const token = Cookies.get("token");
  const { id } = useParams();

  const [uploadBook, setUploadBook] = useState({
    title: "",
    author: "",
    category: "",
    year: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
    value: "",
  });
  // console.log(uploadBook)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      console.log("if id", id);
      try {
        const response = await axios.put(
          `https://bookishbazaar-zf22.onrender.com/api/v1/updatebook/${id}`,
          { ...uploadBook },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(response.data.msg);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          "https://bookishbazaar-zf22.onrender.com/api/v1/createbook",
          { ...uploadBook },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(response.data.message);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className=" bg-white mt-0 md:mt-0 w-full px-5 py-3">
      <h1 className="text-black text-2xl mb-5 font-serif font-medium">
        {id ? "Edit Your" : "Upload Your"} Book
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setUploadBook({
                    ...uploadBook,
                    [e.target.name]: e.target.value,
                  })
                }
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Author"
                name="author"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                onChange={(e) =>
                  setUploadBook({
                    ...uploadBook,
                    [e.target.name]: e.target.value,
                  })
                }
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Author"
                required
              />
            </div>

            <div className="flex w-full  gap-2">
              <div className="w-full">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a Value
                </label>
                <select
                  value={uploadBook.value}
                  name="value"
                  onChange={(e) =>
                    setUploadBook({
                      ...uploadBook,
                      [e.target.name]: e.target.value,
                    })
                  }
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Select Value</option>
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a Year
                </label>

                <select
                  name="year"
                  value={uploadBook.year}
                  id="countries"
                  onChange={(e) =>
                    setUploadBook({
                      ...uploadBook,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Select Year</option>
                  {years.map((year) => {
                    return (
                      <option key={year.value} value={year.value}>
                        {year.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a Category
              </label>
              <select
                value={uploadBook.category}
                name="category"
                id="countries"
                onChange={(e) =>
                  setUploadBook({
                    ...uploadBook,
                    [e.target.name]: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {bookCategories.map((category) => {
                  return (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image URL
              </label>
              <input
                type="url"
                name="image"
                onChange={(e) =>
                  setUploadBook({
                    ...uploadBook,
                    [e.target.name]: e.target.value,
                  })
                }
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image Url"
                required
              />
            </div>

            <div className="flex w-full  gap-2">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  onChange={(e) =>
                    setUploadBook({
                      ...uploadBook,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="title"
                  onChange={(e) =>
                    setUploadBook({
                      ...uploadBook,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  onChange={(e) =>
                    setUploadBook({
                      ...uploadBook,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Quantity"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="Description"
              onChange={(e) =>
                setUploadBook({
                  ...uploadBook,
                  [e.target.name]: e.target.value,
                })
              }
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="Description"
              onChange={(e) =>
                setUploadBook({
                  ...uploadBook,
                  [e.target.name]: e.target.value,
                })
              }
              name="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your Description here..."
              defaultValue={""}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {id ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
