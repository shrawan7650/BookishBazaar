/* eslint-disable react/prop-types */
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navbar/NavBar";



const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main style={{ minHeight: "90vh" }}>
        {children}
    
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;