import { motion } from "framer-motion";
import Phone from "../phone/phone";
import Timeline from "../timeline/timeline";
import { FiChevronRight, fiChevronLeft, FiChevronLeft } from "react-icons/fi";
import { styles } from "./movingTextStyle";
import { useEffect, useState } from "react";

const MovingTest = () => {
  const [width, setwidth] = useState(0);
  useEffect(() => {
    if (window) {
      setwidth(window.innerWidth + 100);
      console.log(window.innerWidth + 100);
    }
  }, []);
  const textData = [
    "Content Moderation",
    "Content Moderation",
    "Content Moderation",
  ];
  const list = { hidden: { opacity: 0 } };
  return (
    <div style={styles.text}>
      <div className="texts-container">
        {textData.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="text1-container"
              animate={{ opacity: 0 }}
              transition={{ delay: 5 }}
            >
              <motion.h1
                animate={
                  index % 2 == 0
                    ? { x: ["-70vw", "100vw"] }
                    : { x: ["100vw", "-100vw"] }
                }
                transition={{ duration: 5 }}
                style={{
                  fontSize: "150px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "black",
                }}
              >
                {index === 1 ? <FiChevronLeft /> : null}

                {item}
                {index !== 1 ? <FiChevronRight /> : null}
              </motion.h1>
              {index * 2 == 4 ? null : (
                <motion.hr
                  animate="hidden"
                  variants={list}
                  transition={{ duration: 5 }}
                  style={{ width: "100vw", borderTop: "2px solid black" }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="phone-container" style={styles.phone}>
        <Phone />
      </div>
      <div className="phone-container" style={styles.Timeline}>
        {" "}
        <Timeline />
      </div>
    </div>
  );
};

export default MovingTest;
