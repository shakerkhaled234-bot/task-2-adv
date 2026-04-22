import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; 
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <>
      <Header>

        <div className="banner-container">
           <img src="/assets/img/Top-Banner.png" alt="Top Banner" className="banner" />
        </div>

        <NavBar 
          logo="Little Learners" 
          items={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]} 
        />
      </Header>
      
      <main>
        <Outlet /> 
      </main>
      
      <Footer />
    </>
  );
};

export default Root;