import { ReactSVG } from "react-svg";
import CubeIcon from "../../assets/icons/cube.svg";
import PlantIcon from "../../assets/icons/plant.svg";
import TelephoneIcon from "../../assets/icons/Telephone.svg";

export default function AboutUs() {
  return (
    <section className="mt-[11.3rem] text-center">
      <h1 className="font-bold text-[3.2rem]">About Us</h1>
      <p className="text-lightGray mt-[1.2px] font-medium">
        Order now and appreciate the beauty of nature
      </p>

      <div className="flex justify-between items-center mt-[4.8rem] mb-[16.5rem]">
        <div className="w-[36rem]">
          <aside className="bg-lightBlue m-auto rounded-full w-[9.6rem] h-[9.6rem] flex items-center justify-center">
            <ReactSVG src={PlantIcon} />
          </aside>

          <p className="font-bold mt-[2.4rem] mb-[1.2rem]">Large Assortment</p>
          <p className="font-medium text-lightGray">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>
        <div className="w-[36rem] ">
          <aside className="bg-lightBlue m-auto rounded-full w-[9.6rem] h-[9.6rem] flex items-center justify-center">
            <ReactSVG src={CubeIcon} />
          </aside>
          <p className="font-bold mt-[2.4rem] mb-[1.2rem]">
            Fast & Free Shipping
          </p>
          <p className="font-medium text-lightGray">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>
        <div className="w-[36rem]">
          <aside className="bg-lightBlue m-auto rounded-full w-[9.6rem] h-[9.6rem] flex items-center justify-center">
            <ReactSVG src={TelephoneIcon} />
          </aside>
          <p className="font-bold mt-[2.4rem] mb-[1.2rem]">24/7 Support</p>
          <p className="font-medium text-lightGray">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </section>
  );
}
