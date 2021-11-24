import React, { useState } from "react";
import { FaTelegramPlane, FaTwitch, FaDiscord } from "react-icons/fa";
import Navbar from "../components/navbar/navbar";
import Animatedtext from "../components/movingText/movingText";
import Footer from "../components/footer/footer";
import SupPlatforms from "../components/supPlatforms/supPlatforms";
import TimelineObject from "../components/timeline/timelineObject";
import { ChakraProvider } from "@chakra-ui/react";

const Index = () => {
  const [platformData, setPLatformData] = useState([
    {
      icon: FaTelegramPlane,
      name: "Telegram",
      color: "#2f89ce",
      row: 1,
    },
    {
      icon: FaTwitch,
      name: "Twitch",
      color: "#9147ff",
      row: 1,
    },
    {
      icon: FaDiscord,
      name: "Discord",
      color: "#8a9cff",
      row: 1,
    },
    {
      icon: FaTelegramPlane,
      name: "API <Code/>",
      color: "#2f89ce",
      row: 1,
    },
    {
      icon: FaTelegramPlane,
      name: "Zapier",
      color: "#FF4A00",
      row: 1,
    },
    {
      icon: FaTelegramPlane,
      name: "Minicraft",
      color: "#43816a",
      row: 1,
    },
    {
      icon: FaTelegramPlane,
      name: "Telegram",
      color: "#2f89ce",
      row: 2,
    },
    {
      icon: FaTwitch,
      name: "Twitch",
      color: "#9147ff",
      row: 2,
    },
    {
      icon: FaDiscord,
      name: "Discord",
      color: "#8a9cff",
      row: 2,
    },
    {
      icon: FaTelegramPlane,
      name: "API <Code/>",
      color: "#2f89ce",
      row: 2,
    },
    {
      icon: FaTelegramPlane,
      name: "Zapier",
      color: "#FF4A00",
      row: 2,
    },
    {
      icon: FaTelegramPlane,
      name: "Minicraft",
      color: "#43816a",
      row: 2,
    },
    {
      icon: FaTelegramPlane,
      name: "Telegram",
      color: "#2f89ce",
      row: 3,
    },
    {
      icon: FaTwitch,
      name: "Twitch",
      color: "#9147ff",
      row: 3,
    },
    {
      icon: FaDiscord,
      name: "Discord",
      color: "#8a9cff",
      row: 3,
    },
    {
      icon: FaTelegramPlane,
      name: "API <Code/>",
      color: "#2f89ce",
      row: 3,
    },
    {
      icon: FaTelegramPlane,
      name: "Zapier",
      color: "#FF4A00",
      row: 3,
    },
    {
      icon: FaTelegramPlane,
      name: "Minicraft",
      color: "#43816a",
      row: 3,
    },
  ]);

  const handleChangeChecked = async (someItem, isItemChecked) => {
    const newData = await platformData.map((item, index) => {
      if (item === someItem) {
        return {
          ...item,
          isChecked: !isItemChecked,
        };
      }
      return item;
    });
    await setPLatformData(newData);
  };

  return (
    <div style={{ backgroundColor: "#f1f8fc" }}>
      <Navbar />
      <Animatedtext />
<ChakraProvider>
      <SupPlatforms
        platformData={platformData}
        changeChecked={handleChangeChecked}
      />
</ChakraProvider>
      <Footer />
    </div>
  );
};

export default Index;
