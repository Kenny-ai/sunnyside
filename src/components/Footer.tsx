import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";

const Footer = () => {
  // const [isHovered, setIsHovered] = useState(false);

  // const mouseOver = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  //   (e.target as SVGElement).style.fill = "red";
  // };

  // const mouseLeave = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  //   (e.target as SVGElement).style.fill = "#2C7566";
  // };

  return (
    <div className="footer">
      <div className="footer-container flex flex-col justify-center items-center py-12">
        <div className="mb-12">
          <Logo className="cursor-pointer" fill="#2e7666" />
        </div>
        <div className="footer-links flex justify-between w-3/4 mb-16 lg:text-lg lg:w-1/5">
          <p className="cursor-pointer hover:text-white">About</p>
          <p className="cursor-pointer hover:text-white">Services</p>
          <p className="cursor-pointer hover:text-white">Projects</p>
        </div>
        <div className="flex justify-between w-2/5 lg:w-1/6">
          <Facebook
            className="cursor-pointer"
            // onMouseEnter={() => {
            //   setIsHovered(true);
            // }}
            // onMouseLeave={() => {
            //   setIsHovered(false);
            // }}
            fill="#2C7566"
          />
          <Instagram
            // onMouseEnter={mouseOver}
            // onMouseLeave={mouseLeave}
            className="cursor-pointer"
          />
          <Twitter
            // onMouseEnter={mouseOver}
            // onMouseLeave={mouseLeave}
            className="cursor-pointer"
          />
          <Pinterest
            // onMouseEnter={mouseOver}
            // onMouseLeave={mouseLeave}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
