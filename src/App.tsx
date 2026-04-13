
import Benefits from './components/Benefits/Benefits';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import TestimonialSlider from "./components/Testimonials/Slider";
import FAQ from "./components/FAQ/FAQ";
import NavigationCards from "./components/NavigationCards/NavigationCards";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header> 
  
        <img src="/assets/img/Top-Banner.png" alt="Top Banner" className="banner"/>
        
      
        <NavBar 
          logo="Little Learners" 
          items={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]} 
        />
      </Header>


      <main>
        <Hero />
        < Benefits/>
      <TestimonialSlider />
      < FAQ />
      < NavigationCards/>
      </main>
   <Footer />
    </>
  );
}

export default App;