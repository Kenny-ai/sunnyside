import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";

const styles = {
  navLink:
    "nav-link cursor-pointer lg:text-lg hover:border-b-2 hover:border-b-yellow-300",
};

interface Props {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ showNav, setShowNav }) => {
  return (
    <div className="header">
      <div className="header-container flex justify-between p-8 lg:px-12">
        <Logo className="cursor-pointer" fill="#FFF" />
        <div className="lg:hidden">
          {!showNav && (
            <Hamburger
              onClick={() => {
                setShowNav(true);
              }}
              className="cursor-pointer"
            />
          )}
          {showNav && (
            <IconClose
              onClick={() => {
                setShowNav(false);
              }}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className="hidden lg:flex justify-between items-center w-2/5">
          <p className={styles.navLink}>About</p>
          <p className={styles.navLink}>Services</p>
          <p className={styles.navLink}>Projects</p>
          <button className="header-button bg-white uppercase rounded-full px-6 py-3 hover:bg-sky-300 hover:text-white">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
