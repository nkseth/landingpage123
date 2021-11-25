import React from "react";
import { Switch, ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";

function platformRow({ isChecked, changeChecked, platformName, item }) {
  return (
    <>
      <div
        className="container"
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
          <Image
            src={require("./testicon.svg")}
            alt="icon"
            width="60"
            height="60"
            className="icon"
          />
          <div
            className="text"
            style={{
              margin: "0 0 0 10px",
              position: "relative",
              top: "5px",
            }}
          >
            <div className="state" style={{ color: "#808080" }}>
              {isChecked ? "On" : "Off"}
            </div>
            <div
              className="iconTitle"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              {platformName}
            </div>
          </div>
        </div>
        <Switch
          className="switch"
          isChecked={isChecked || false}
          onChange={changeChecked.bind(null, item, isChecked || false)}
          defaultChecked={true}
          style={{
            position: "relative",
            top: "-10px",
            right: "-10px",
          }}
        />
      </div>
    </>
  );
}

export default platformRow;
