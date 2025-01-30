import { ReactSVG } from "react-svg";
import ArrowRightIcon from "../../assets/icons/ArrowRight.svg";
import { UsePlantsStore } from "../../store/usePlantsStore";

export default function BestSellingPlants() {
  const { Plants } = UsePlantsStore();
  return (
    <section className="flex mt-[9.2rem] gap-[6rem]">
      <div className="max-w-[19.6rem]">
        <h2 className="font-bold text-[3.2rem]">Best Selling Plants</h2>
        <p className="text-lightGray font-medium text-[1.8rem] mt-[1.2rem] mb-[2.4rem]">
          Easiest way to healthy life by buying your favorite plants
        </p>
        <button className="bg-lightBlue font-medium rounded-[0.8rem] px-[2.4rem] py-[1.2rem] flex items-center gap-[1rem]">
          See more
          <ReactSVG src={ArrowRightIcon}></ReactSVG>
        </button>
      </div>
      <div>
        <div className="flex gap-[1.6rem]">
          {Plants.map((plant, index) => (
            <div key={index}>
              <img
                className="w-[29.9rem] h-[36.3rem] rounded-[1.2rem]"
                src={plant.image}
                alt="/"
              />
              <p className="font-medium mt-[1.2rem] mb-[1.4rem]">
                {plant.type}
              </p>
              <p className="text-lightGray">
                <span>₱ </span>
                {plant.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
