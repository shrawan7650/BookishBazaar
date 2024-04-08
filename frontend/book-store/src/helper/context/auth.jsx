/* eslint-disable react/prop-types */
import axios from "axios";

import { useState, useEffect, useContext, createContext,useMemo  } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  
  const [isAuthenticated, setIsAuthenticated] = useState({
    token: "",
    user: null,
  });
  
  useEffect(() => {
    const data = localStorage.getItem("token");
    // console.log(data)
    if (data) {
      const parsedData = JSON.parse(data);
      console.log("this parase", parsedData);
      setIsAuthenticated({
        ...isAuthenticated,
        user: parsedData.user,
        token: parsedData.token,
      });
    }
  }, []);
  
  console.log(isAuthenticated.token)
  
  useEffect(() => {
    const getAllBook = async () => {
      const config = {
        headers: {
          Authorization: isAuthenticated?.token,
        },
      };
      console.log(config)
      try {
        const response = await axios.get("http://localhost:3000/api/v1/books",config);
        // console.log(response.data);/
        setBooks(response?.data?.books);
      } catch (err) {
        console.log(err);
      }
    };
    getAllBook();
  }, []);
  return (
    isAuthenticated && (
      <AuthContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, books }}
      >
        {children}
      </AuthContext.Provider>
    )
  );
};

export const useAuth = () => useContext(AuthContext);
