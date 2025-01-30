import AboutUs from "./components/AboutUs/AboutUs";
import BestSellingPlants from "./components/BestSellingPlants/BestSellingPlants";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <main className="text-[1.6rem] text-darkGray max-w-screen">
      <div className="px-[9.6rem]">
        <Header></Header>
        <HeroSection></HeroSection>
        <BestSellingPlants></BestSellingPlants>
        <AboutUs></AboutUs>
      </div>

      <Categories></Categories>

      <div className="px-[9.6rem]">
        <Testimonials></Testimonials>
      </div>
    </main>
  );
}

export default App;
