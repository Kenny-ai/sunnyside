import React from "react";
import MobileCone from "../assets/mobile/image-gallery-cone.jpg";
import MobileMilkBottles from "../assets/mobile/image-gallery-milkbottles.jpg";
import MobileOrange from "../assets/mobile/image-gallery-orange.jpg";
import MobileSugar from "../assets/mobile/image-gallery-sugar-cubes.jpg";

import DesktopCone from "../assets/desktop/image-gallery-cone.jpg";
import DesktopMilkBottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import DesktopOrange from "../assets/desktop/image-gallery-orange.jpg";
import DesktopSugar from "../assets/desktop/image-gallery-sugarcubes.jpg";

const styles = {
  imageContainer: "w-1/2 xl:w-1/4",
  mobileImage: "sm:hidden",
  desktopImage: "hidden sm:flex",
};

const ImageGrid = () => {
  return (
    <div className="imageGrid">
      <div className="imageGrid-container flex flex-wrap">
        <div className={styles.imageContainer}>

          <img
            className={styles.mobileImage}
            src={MobileMilkBottles}
            alt="milk-bottles"
          />
          <img
            className={styles.desktopImage}
            src={DesktopMilkBottles}
            alt=""
          />
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.mobileImage} src={MobileOrange} alt="" />
          <img className={styles.desktopImage} src={DesktopOrange} alt="" />
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.mobileImage} src={MobileCone} alt="" />
          <img className={styles.desktopImage} src={DesktopCone} alt="" />
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.mobileImage} src={MobileSugar} alt="" />
          <img className={styles.desktopImage} src={DesktopSugar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
