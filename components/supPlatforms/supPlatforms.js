import React, { useState } from "react";
import { styles } from "./supportedstyles";
import { motion } from "framer-motion";
import { Switch, ChakraProvider } from "@chakra-ui/react";

const label = { inputProps: { "aria-label": "Switch demo" } };

const supPlatforms = ({ platformData, changeChecked }) => {
  return (
    <div className="supported-platforms" style={styles.supportedPlatforms}>
      <h1 style={styles.h1}>Supported Platforms</h1>
      <motion.li
        animate={{ x: "-100%" }}
        transition={{ duration: 10, loop: Infinity }}
        className="supPlatforms-container"
        style={styles.supPlatforms}
      >
        {platformData.map((item, index) => {
          if (item?.row === 1) {
            return (
              <div
                className="container"
                key={index}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "4px solid #F4F5F6",
                  display: "flex",
                  flexDirection: "row",
                  padding: "20px",
                  borderRadius: "15px",
                  width: "220px",
                }}
              >
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src="http://u.filein.io/rKkBApR_Pa.svg"
                    alt="icon"
                    width="60"
                    height="60"
                    className="icon"
                  ></img>
                  <div
                    className="text"
                    style={{
                      margin: "0 0 0 10px",
                      position: "relative",
                      top: "5px",
                    }}
                  >
                    <div className="state" style={{ color: "#808080" }}>
                      On
                    </div>
                    <div
                      className="iconTitle"
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      Discord
                    </div>
                  </div>
                </div>
                <Switch
                  className="switch"
                  style={{ position: "relative", top: "-10px", right: "-10px" }}
                ></Switch>
              </div>
            );
          }
        })}
      </motion.li>
      <motion.div
        className="supPlatforms-container"
        style={styles.supPlatforms}
      >
        {platformData.map((item, index) => {
          if (item?.row === 2) {
            return (
              <div
                className="platform-container"
                style={styles.platform}
                key={index}
              >
                <div className="switch-container" style={styles.switch}>
                  <ChakraProvider>
                    <Switch
                      size="sm"
                      colorScheme="green"
                      isChecked={item?.isChecked || true}
                      onFocus={changeChecked.bind(
                        null,
                        item,
                        item?.isChecked || false
                      )}
                      defaultIsChecked
                    />
                  </ChakraProvider>
                </div>
                <div
                  className="platform-content-container"
                  style={styles.platformContent}
                >
                  <div
                    className="platform-logo-container"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: `${item.color}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      marginRight: "5px",
                    }}
                  >
                    <item.icon style={styles.icon} />
                  </div>
                  <div
                    className="platform-name-container"
                    style={styles.platformName}
                  >
                    <p>
                      <span style={styles.onOff}>
                        {item?.isChecked ? "on" : "off"}
                      </span>{" "}
                      <br />
                      <b>{item.name}</b>
                    </p>
                  </div>
                </div>
              </div>
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
              <div
                className="platform-container"
                style={styles.platform}
                key={index}
              >
                <div className="switch-container" style={styles.switch}>
                  <ChakraProvider>
                    <Switch
                      size="sm"
                      colorScheme="green"
                      isChecked={item?.isChecked || true}
                      onFocus={changeChecked.bind(
                        null,
                        item,
                        item?.isChecked || false
                      )}
                      defaultIsChecked
                    />
                  </ChakraProvider>
                </div>
                <div
                  className="platform-content-container"
                  style={styles.platformContent}
                >
                  <div
                    className="platform-logo-container"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: `${item.color}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      marginRight: "5px",
                    }}
                  >
                    <item.icon style={styles.icon} />
                  </div>
                  <div
                    className="platform-name-container"
                    style={styles.platformName}
                  >
                    <p>
                      <span style={styles.onOff}>
                        {item?.isChecked ? "on" : "off"}
                      </span>{" "}
                      <br />
                      <b>{item.name}</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default supPlatforms;

/// row #1
{
  /* <div
className="platform-container"
style={styles.platform}
key={index}
>
<div className="switch-container" style={styles.switch}>
  <Switch
    size="sm"
    colorScheme="green"
    isChecked={item?.isChecked || true}
    onFocus={changeChecked.bind(
      null,
      item,
      item?.isChecked || false
    )}
    defaultIsChecked
  />
</div>
<div
  className="platform-content-container"
  style={styles.platformContent}
>
  <div
    className="platform-logo-container"
    style={{
      width: "3rem",
      height: "3rem",
      backgroundColor: `${item.color}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      marginRight: "5px",
    }}
  >
    <item.icon style={styles.icon} />
  </div>
  <div
    className="platform-name-container"
    style={styles.platformName}
  >
    <p>
      <span style={styles.onOff}>
        {item?.isChecked ? "on" : "off"}
      </span>{" "}
      <br />
      <b>{item.name}</b>
    </p>
  </div>
</div>
</div> */
}
