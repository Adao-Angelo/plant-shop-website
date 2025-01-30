import { ReactSVG } from "react-svg";
import ArrowRightIcon from "../../assets/icons/ArrowRight.svg";

export default function Categories() {
  return (
    <section className="mt-[11.3rem] text-center">
      <h1 className="font-bold text-[3.2rem]">Categories</h1>
      <p className="text-lightGray mt-[1.2px] font-medium">
        Find what you are looking for
      </p>

      <div className="bg-lightBlue flex px-[9.6rem] justify-between mt-[9.6rem] h-[84.1rem] items-center">
        <div>
          <img
            className="w-[32.5rem] h-[51.2rem] rounded-[1.2rem]"
            src="/robert-santa-unsplash.jpg"
            alt="non-unsplash"
          />
          <p className="font-medium mt-[1.2rem]">Natural Plants</p>
        </div>
        <div className="max-w-[32.5rem]">
          <img
            className="w-[32.5rem] h-[51.2rem] rounded-[1.2rem]"
            src="/non-unsplash.jpg"
            alt="non-unsplash"
          />
          <p className="font-medium mt-[1.2rem]">Plant Accessories</p>
          <p className="text-lightGray mt-[1.2rem] mb-[2.4rem]">
            The best product plan for the non-unsplash installation is to
            provide
          </p>
          <button className="bg-white m-auto font-medium rounded-[0.8rem] px-[2.4rem] py-[1.2rem] flex items-center gap-[1rem]">
            Explore
            <ReactSVG src={ArrowRightIcon}></ReactSVG>
          </button>
        </div>
        <div>
          <img
            className="w-[32.5rem] h-[51.2rem] rounded-[1.2rem]"
            src="/alexandra-gor-unsplash.jpg"
            alt="non-unsplash"
          />
          <p className="font-medium mt-[1.2rem]">Artificial Plants</p>
        </div>
      </div>
    </section>
  );
}
