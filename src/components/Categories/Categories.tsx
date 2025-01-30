import { motion } from "framer-motion";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import ArrowRightIcon from "../../assets/icons/ArrowRight.svg";

const categories = [
  {
    id: 1,
    title: "Natural Plants",
    img: "/robert-santa-unsplash.jpg",
    description:
      "The best product plan for the non-unsplash installation is to provide",
  },
  {
    id: 2,
    title: "Plant Accessories",
    img: "/non-unsplash.jpg",
    description:
      "The best product plan for the non-unsplash installation is to provide",
  },
  {
    id: 3,
    title: "Artificial Plants",
    img: "/alexandra-gor-unsplash.jpg",
    description:
      "The best product plan for the non-unsplash installation is to provide",
  },
];

export default function Categories() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="mt-[11.3rem] text-center">
      <h1 className="font-bold text-[3.2rem]">Categories</h1>
      <p className="text-lightGray mt-[1.2px] font-medium">
        Find what you are looking for
      </p>

      <div className="bg-lightBlue flex px-[9.6rem] justify-between mt-[9.6rem] h-[84.1rem] items-center">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="relative flex flex-col items-center max-w-[35.5rem]"
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered && hovered !== category.id ? 0.5 : 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.img
              className="w-[32.5rem] h-[51.2rem] rounded-[1.2rem]"
              src={category.img}
              alt={category.title}
              initial={{ scale: 1 }}
              animate={{ scale: hovered === category.id ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <p className="font-medium mt-[1.2rem]">{category.title}</p>
            {hovered === category.id && (
              <motion.div
                className="text-center mt-[1.2rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="text-lightGray mb-[2.4rem]">
                  {category.description}
                </p>
                <button className="bg-white m-auto font-medium rounded-[0.8rem] px-[2.4rem] py-[1.2rem] flex items-center gap-[1rem]">
                  Explore
                  <ReactSVG src={ArrowRightIcon} />
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
