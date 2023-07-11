import { motion } from "framer-motion";
const opacityAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const rotationAnimation = {
  initial: {
    rotateY: 90,
  },
  animate: {
    rotateY: 0,
  },
  exit: {
    rotateY: -90,
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="page"
      transition={{
        ease: "easeInOut",
        duration: 0.4,
      }}
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
