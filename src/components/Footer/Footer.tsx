import { ReactSVG } from "react-svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

export default function Footer() {
  return (
    <footer className=" text-[1.6rem] bg-lightBlue px-[9.6rem] py-[4.8rem]">
      <div className="flex justify-between mb-[9.8rem]">
        <div className="w-[18.9rem]">
          <h1 className="text-[2rem]">
            GREE<span>MIND</span>
          </h1>
          <p className="my-[4.8rem] font-medium text-lightGray">
            We help you find your dream plant
          </p>
          <div className="flex justify-between items-center">
            <aside className="w-[4.8rem] h-[4.8rem] flex justify-center items-center border-darkGray rounded-full border">
              <ReactSVG src={facebookIcon}></ReactSVG>
            </aside>
            <aside className="w-[4.8rem] h-[4.8rem] flex justify-center items-center border-darkGray rounded-full border">
              <ReactSVG src={instagramIcon}></ReactSVG>
            </aside>
            <aside className="w-[4.8rem] h-[4.8rem] flex justify-center items-center border-darkGray rounded-full border">
              <ReactSVG src={twitterIcon}></ReactSVG>
            </aside>
          </div>
        </div>
        <div className="flex gap-[4.8rem]">
          <section className="flex flex-col gap-[2.4rem]">
            <h1 className="font-bold">Information</h1>
            <p className="text-lightGray">About</p>
            <p className="text-lightGray">Product</p>
            <p className="text-lightGray">Bog</p>
          </section>
          <section className="flex flex-col gap-[2.4rem]">
            <h1 className="font-bold">Company</h1>
            <p className="text-lightGray">Community</p>
            <p className="text-lightGray">Career</p>
            <p className="text-lightGray">Our story</p>
          </section>
          <section className="flex flex-col gap-[2.4rem]">
            <h1 className="font-bold">Contact</h1>
            <p className="text-lightGray">Get starting</p>
            <p className="text-lightGray">Pricing</p>
            <p className="text-lightGray">Resource</p>
          </section>
        </div>
      </div>

      <p className="font-medium text-lightGray text-[1.4rem]">
        2023 all Right Reserved Term of use GREEN<span>MIND</span>
      </p>
    </footer>
  );
}
