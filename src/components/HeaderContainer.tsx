import React, { useState } from "react";
import Header from "./Header";
import { ReactComponent as ArrowDown } from "../assets/icon-arrow-down.svg";

const styles = {
  navLink:
    "nav-link cursor-pointer hover:border-b-2 hover:border-b-yellow-300 mb-6 w-fit",
};

const HeaderContainer = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="headerContainer text-white text-center">
      <div className="header-container2 bg-cover bg-bottom relative">
        <Header showNav={showNav} setShowNav={setShowNav} />

        {showNav && <div className="mobile-nav-container flex justify-center items-center absolute w-full">
          <div className="mobile-nav flex flex-col items-center bg-white w-3/4 py-8">
            <p className={styles.navLink}>Home</p>
            <p className={styles.navLink}>About</p>
            <p className={styles.navLink}>Services</p>
            <p className={styles.navLink}>Projects</p>
            <button className="header-button bg-yellow-400 text-sm uppercase rounded-full px-6 py-3 hover:bg-yellow-300">
              Contact
            </button>
          </div>
        </div>}

        <div className="flex flex-col justify-center items-center p-8 lg:py-24">
          <p className="headerContainer-text text-4xl font-bold uppercase tracking-widest mb-16 lg:text-6xl lg:mb-20">
            We are creatives
          </p>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
