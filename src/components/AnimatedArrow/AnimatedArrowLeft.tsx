import { motion } from "framer-motion";

const AnimatedArrowLeft = () => {
  return (
    <motion.svg
      width="20rem"
      viewBox="0 0 200 100"
      fill="none"
      stroke="black"
      strokeWidth="4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2.15951 36.0588C3.57972 22.1631 3.02297 4.58497 20.1626 2.13229C28.3069 0.966842 38.6411 9.4327 41.1549 16.5495C43.24 22.4529 47.9372 29.0267 43.5371 35.1378C40.0809 39.9379 34.0251 42.0545 28.4936 39.2748C12.7852 31.3809 28.3569 14.4894 38.7205 12.2945C52.8661 9.2987 81.8699 35.3336 74.8963 50.4526C68.9171 63.4156 56.7363 52.6515 60.1164 41.7339C64.8712 26.376 73.5221 22.2556 89.8024 29.5491C102.514 35.2438 106.999 52.968 103.722 64.7013C103.041 67.1382 103.02 82.1683 101.159 81.4575C82.8028 74.4438 97.8965 46.0985 111.806 43.2661C127.787 40.0117 143.994 36.9012 158.673 44.3771C166.566 48.3973 185.763 66.6456 180.521 59.5053C173.96 50.5695 165.913 37.8985 165.802 26.2532C165.768 22.788 165.395 11.7251 166.223 22.2642C167.076 33.1182 167.574 42.6987 170.297 52.6744C170.903 54.8944 174.897 56.7038 176.587 58.084C178.018 59.253 171.063 59.9374 170.299 60.1744C163.696 62.2202 158.958 67.1249 154.835 72.4669C151.155 77.2349 147.787 84.6695 143.371 84.4252"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default AnimatedArrowLeft;
