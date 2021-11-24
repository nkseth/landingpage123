import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineObject from "./timelineObject";

const timeline = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -1500 }}
      transition={{ delay: 4, duration: 1 }}
    >
      <TimelineObject />
    </motion.div>
  );
};

export default timeline;
