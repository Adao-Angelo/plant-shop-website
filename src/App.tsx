import BestSellingPlants from "./components/BestSellingPlants/BestSellingPlants";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <main className="text-[1.6rem] px-[9.6rem] text-darkGray max-w-screen">
      <Header></Header>
      <HeroSection></HeroSection>
      <BestSellingPlants></BestSellingPlants>
    </main>
  );
}

export default App;
