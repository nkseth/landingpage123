import React, { useState } from "react";
import { styles } from "./supportedstyles";
import { motion } from "framer-motion";
import { Switch, ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import PlatformRow from "./platformRow";
const label = { inputProps: { "aria-label": "Switch demo" } };

const supPlatforms = ({ platformData, changeChecked }) => {
  return (
    <div className="supported-platforms" style={styles.supportedPlatforms}>
      <h1 style={styles.h1}>Supported Platforms</h1>
      <div style={{ display: "flex" }}>
        {/* <motion.li
          animate={{ x: ["-100%", "120%"] }}
          initial={{ x: -100 }}
          transition={{ duration: 10, loop: Infinity }}
          className="supPlatforms-container"
          style={styles.supPlatforms}
        > */}
        {platformData.map((item, index) => {
          if (item?.row === 1) {
            return (
              // <motion.div
              //   className="container"
              //   key={index}
              //   style={{
              //     backgroundColor: "#FFFFFF",
              //     border: "4px solid #F4F5F6",
              //     display: "flex",
              //     flexDirection: "row",
              //     padding: "20px",
              //     borderRadius: "15px",
              //     width: "220px",

              //     marginLeft: "10px",
              //   }}
              // >

              // </motion.div>
              <PlatformRow
                key={index}
                isChecked={item?.isChecked}
                platformName={item?.name}
                changeChecked={changeChecked}
                item={item}
              />
            );
          }
        })}
        {/* </motion.li> */}
      </div>
      <motion.div
        className="supPlatforms-container"
        style={styles.supPlatforms}
      >
        {platformData.map((item, index) => {
          if (item?.row === 2) {
            return (
              <PlatformRow
                key={index}
                isChecked={item?.isChecked}
                platformName={item?.name}
                changeChecked={changeChecked}
                item={item}
              />
            );
          }
        })}
      </motion.div>
      <motion.div
        className="supPlatforms-container"
        style={styles.supPlatforms}
      >
        {platformData.map((item, index) => {
          if (item?.row === 3) {
            return (
              <PlatformRow
                key={index}
                isChecked={item?.isChecked}
                platformName={item?.name}
                changeChecked={changeChecked}
                item={item}
              />
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default supPlatforms;
