import React from "react";
import MobileEggImage from "../assets/mobile/image-transform.jpg";
import MobileCupImage from "../assets/mobile/image-stand-out.jpg";

import DesktopEggImage from "../assets/mobile/image-transform.jpg";
import DesktopCupImage from "../assets/mobile/image-stand-out.jpg";

const styles = {
  gridText:
    "grid-text py-12 px-8 text-center flex flex-col justify-center items-center lg:items-start lg:text-left lg:w-2/3",
  gridTextHeader:
    "grid-text-header text-3xl font-black mb-4 lg:text-4xl xl:text-6xl lg:mb-8",
  gridTextContent:
    "grid-text-content text-gray-400 text-lg font-semibold mb-12",
  gridTextButton: "grid-text-button uppercase font-black absolute -bottom-2",
  mobileImage: "md:hidden",
  desktopImage: "hidden md:flex md:w-full h-full",
};

const Grid = () => {
  return (
    <div className="grid w-">
      <div className="grid-container lg:flex lg:flex-wrap">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img className={styles.mobileImage} src={MobileEggImage} alt="" />
            <img className={styles.desktopImage} src={DesktopEggImage} alt="" />
          </div>

          <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center">
            <div className={styles.gridText}>
              <h3 className={styles.gridTextHeader}>Transform your brand</h3>
              <p className={styles.gridTextContent}>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>

              <div className="w-32 relative px-2 flex justify-center cursor-pointer border-b-8 rounded-b-full border-b-yellow-200 hover:border-b-yellow-300">
                <button className={styles.gridTextButton}>Learn more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img className={styles.mobileImage} src={MobileCupImage} alt="" />
          <img className={styles.desktopImage} src={DesktopCupImage} alt="" />
        </div>

        <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center">
          <div className={styles.gridText}>
            <h3 className={styles.gridTextHeader}>
              Stand out to the right audience
            </h3>
            <p className={styles.gridTextContent}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <div className="w-32 relative px-2 flex justify-center cursor-pointer border-b-8 rounded-b-full border-b-pink-200 hover:border-b-pink-300">
              <button className={styles.gridTextButton}>Learn more</button>
            </div>
          </div>
        </div>

        <div className="md:flex lg:w-screen">
          <div className="apple-image text-center flex flex-col justify-end py-16 px-4 lg:w-1/2 lg:items-center">
            <div className="lg:w-1/2">
              <p className="apple-image-header text-3xl font-black mb-4">
                Graphic Design
              </p>
              <p className="apple-image-text">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>

          <div className="orange-image text-center flex flex-col justify-end py-16 px-4 lg:w-1/2 lg:items-center">
            <div className="lg:w-1/2">
              <p className="orange-image-header text-3xl font-black mb-4">
                Photography
              </p>
              <p className="orange-image-text">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
