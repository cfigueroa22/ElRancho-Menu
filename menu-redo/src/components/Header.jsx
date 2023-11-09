import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/elrancho-logo.png";
import cactus from "../assets/cactus.png";
import maracas from "../assets/maracas.png";

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between py-1">
          <div className="pl-2">
            <img src={logo} alt="El Rancho logo" className="w-16 md:w-18" />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-0 right-0 px-2 py-2 text-3xl hover:cursor-pointer hover:text-white md:text-4xl"
          >
            <ion-icon name={open ? "" : "menu-sharp"} />
          </div>
          <div
            className={`h-90 w-full bg-bgMenuColor absolute transition-all ease-in-out duration-500 z-30 lg:z-0 lg:bg-bgColor lg:relative lg:top-0  ${
              open ? "top-0" : "top-[-1000px]"
            }`}
          >
            <div className="flex flex-col justify-center mx-10 text-left lg:items-center lg:flex-row lg:justify-end">
              <div
                onClick={() => setOpen(!open)}
                className="absolute top-0 right-0 px-2 py-1 text-3xl text-white hover:cursor-pointer hover:text-darkRed md:text-4xl lg:hidden"
              >
                <ion-icon name="close-sharp" />
              </div>
              <Link
                to="menu-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 py-8 pr-3 text-4xl text-white hover:text-darkRed font-roboto hover:cursor-pointer md:text-6xl md:py-10 lg:text-[26px] lg:text-black lg:py-2 lg:px-4 lg:hover:text-orange"
              >
                <div className="lg:hidden">
                  <ion-icon name={open ? "" : "book"} />
                </div>
                Menu
              </Link>
              <div>
                <img
                  src={maracas}
                  alt=""
                  className="hidden lg:flex lg:w-10 lg:px-2"
                />
              </div>
              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                sm:hidden
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 py-8 pr-3 text-4xl text-white hover:text-darkRed font-roboto hover:cursor-pointer md:text-6xl md:py-10 lg:text-[26px] lg:text-black lg:py-2 lg:px-4 lg:hover:text-orange"
              >
                <div className="lg:hidden">
                  <ion-icon name={open ? "" : "call"} />
                </div>
                Contact Us!
              </Link>
              <div>
                <img
                  src={cactus}
                  alt=""
                  className="hidden lg:flex lg:w-12 lg:px-2"
                />
              </div>
              <Link
                to="map-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 py-8 pr-3 text-4xl text-white hover:text-darkRed font-roboto hover:cursor-pointer md:text-6xl md:py-10 lg:text-[26px] lg:text-black lg:py-2 lg:px-4 lg:hover:text-orange"
              >
                <div className="lg:hidden">
                  <ion-icon name={open ? "" : "pin"} />
                </div>
                Our Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
