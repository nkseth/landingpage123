import React, { useState } from "react";

import Flickity from "react-flickity-component";
import Styles from "../../styles/platform.module.css";

import PlatformRow from "./platformRow";
const label = { inputProps: { "aria-label": "Switch demo" } };

const supPlatforms = ({ platformData, changeChecked }) => {
  return (
    <div className="supported-platforms">
      <h1 className={Styles.heading}>Supported Platforms</h1>

      <div>
        <div className={Styles.supPlatforms}>
          <Flickity
            options={{
              wrapAround: true,
              freeScroll: true,
              autoPlay: 1500,
              selectedAttraction: 0.001,
              friction: 1.8,
              initialIndex: 3,
              draggable: false,
            }}
          >
            {platformData.map((item, index) => {
              if (item?.row === 1) {
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
          </Flickity>
        </div>

        <div className={Styles.supPlatforms}>
          <Flickity
            options={{
              wrapAround: true,
              freeScroll: true,
              autoPlay: 1500,
              selectedAttraction: 0.001,
              friction: 1.8,
              initialIndex: 3,
              rightToLeft: true,
              draggable: false,
            }}
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
          </Flickity>
        </div>
        <div className={Styles.supPlatforms}>
          <Flickity
            options={{
              wrapAround: true,
              freeScroll: true,
              autoPlay: 1500,
              selectedAttraction: 0.001,
              friction: 1.8,
              initialIndex: 3,
              draggable: false,
            }}
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
          </Flickity>
        </div>
      </div>
    </div>
  );
};

export default supPlatforms;
