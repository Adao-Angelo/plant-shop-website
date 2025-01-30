import { ReactSVG } from "react-svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

export default function Footer() {
  return (
    <footer className=" text-[1.8rem] bg-lightBlue px-[9.6rem] py-[4.8rem]">
      <div className="flex">
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
      </div>

      <p>
        �� 2022 GREE<span>MIND</span>. All rights reserved.
      </p>
    </footer>
  );
}
