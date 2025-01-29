import { ReactSVG } from "react-svg";
import CartIcon from "../../assets/icons/Cart.svg";
import FilterRightIcon from "../../assets/icons/FilterRight.svg";
import PersonIcon from "../../assets/icons/Person.svg";

export default function Header() {
  return (
    <section className="flex justify-between items-center py-[4.8rem]">
      <div>
        <h1 className="font text-[2.4rem]">
          GREE<span>MIND</span>
        </h1>
      </div>
      <div className="font-medium flex items-center gap-[4.8rem]">
        <p>
          <a href="#">Home</a>
        </p>
        <p className="text-lightGray">
          <a href="#">Products</a>
        </p>
        <p className="text-lightGray">
          <a href="#">Contacts</a>
        </p>
      </div>
      <div className="flex gap-[4.8rem]">
        <div className="border-r border-darkGray flex px-[4.8rem] justify-between w-[18rem]">
          <ReactSVG src={PersonIcon} />
          <ReactSVG src={CartIcon} />
        </div>
        <ReactSVG src={FilterRightIcon} />
      </div>
    </section>
  );
}
