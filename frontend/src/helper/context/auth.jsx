import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [usersData, setUsersData] = useState("");
  const[loader,setLoader] = useState(false)
  const [isLogged, setIsLogged] = useState(true);
 
  // Initialize state with the result of initialState function

useEffect(()=>{
  const getUSer = async()=>{
    const response = await axios.get("http://localhost:3000/api/v1/getuser",{withCredentials:true});
    // console.log(response.data.user)
    setUsersData(response.data.user);
  };
  getUSer();
},[isLogged])

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }

    const getAllBooks = async () => {
      setLoader(true)
      try {
        const response = await axios.get("http://localhost:3000/api/v1/books");
        console.log(response.data);
        setBooks(response?.data?.books);
        setLoader(false)
      } catch (err) {
        console.log(err);
      }
    };
    getAllBooks();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        books,
        usersData,
        setUsersData,
        setBooks,
        loader,
   
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
