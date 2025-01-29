import { ReactSVG } from "react-svg";
import SearchIcon from "../../assets/icons/Search.svg";
import { AnimatedArrowLeft, AnimatedArrowRight } from "../AnimatedArrow";

export default function HeroSection() {
  return (
    <main className="flex justify-between items-start py-[4.8rem] bg-lightBlue pb-[0rem]  pr-[9.8rem]  pt-[4.8rem] pl-[4.8rem] rounded-[2.4rem]">
      <section>
        <h1 className="font-extrabold text-[6.4rem] w-[51.2rem] leading-none">
          Buy your dream plants
        </h1>
        <div className="flex items-center gap-[4.8rem] mt-[2.4rem] mb-[4.8rem]">
          <div>
            <p className="font-medium text-[2.8rem]">50 +</p>
            <p className="font-medium">Plant Species</p>
          </div>
          <div className="bg-darkGray w-[0.1rem] h-[5rem]"></div>
          <div>
            <p className="font-medium text-[2.8rem]">100 +</p>
            <p className="font-medium">Customers</p>
          </div>
        </div>
        <div className="bg-white rounded-[1.2rem] p-[0.8rem] max-w-[40.8rem] flex justify-between">
          <input
            className="bg-transparent outline-none p-[1rem] placeholder:text-lightGray"
            type="search"
            placeholder="What are you looking for?"
          />
          <button className="rounded-[1.2rem] bg-lightBlue p-[1.4rem]">
            <ReactSVG src={SearchIcon}></ReactSVG>
          </button>
        </div>
      </section>
      <section className="relative">
        <aside className="absolute top-[-10rem] right-[-20rem] animate-up-down">
          <AnimatedArrowRight></AnimatedArrowRight>
        </aside>
        <aside className="absolute bottom-[10rem] left-[-20rem]">
          <AnimatedArrowLeft></AnimatedArrowLeft>
        </aside>

        <div className="w-[45rem] h-[40rem] bg-darkGray rounded-l-[20rem] rounded-tr-[20rem]"></div>
      </section>
    </main>
  );
}
