import React, { useState } from "react";
import ElRancho from "../assets/ElRancho-Bar.png";
import menulogo from "../assets/menu-logo.png";
import menuVid from "../assets/rancho-clips.mp4";
import Lunch from "../components/Lunch";
import Appetizers from "./Appetizers";
import Kids from "./Kids";
import Veg from "./Veg";
import Carte from "./ALaCarte";
import Steak from "./Steak";
import Seafood from "./Seafood";
import Tacos from "./Tacos";
import Fajitas from "./Fajitas";
import Combo from "./Combo";
import Tortas from "./Tortas";
import Sides from "./Sides";
import Pork from "./Pork";
import Chicken from "./Chicken";
import Specialty from "./Specialty";
import Soup from "./Soups";
import Desserts from "./Desserts";
import Beverages from "./Beverages";
import Full from "./Full";

const Home = () => {
  // HOVERS
  // const [isHoverLunch, setIsHoverLunch] = useState(false);
  // const [isHoverApp, setIsHoverApp] = useState(false);
  // const [isHoverKids, setIsHoverKids] = useState(false);
  // const [isHoverVeg, setIsHoverVeg] = useState(false);
  // const [isHoverCarte, setIsHoverCarte] = useState(false);
  // const [isHoverSteak, setIsHoverSteak] = useState(false);
  // const [isHoverSeafood, setIsHoverSeafood] = useState(false);
  // const [isHoverTacos, setIsHoverTacos] = useState(false);
  // const [isHoverFajitas, setIsHoverFajitas] = useState(false);
  // const [isHoverCombo, setIsHoverCombo] = useState(false);
  // const [isHoverTortas, setIsHoverTortas] = useState(false);
  // const [isHoverSides, setIsHoverSides] = useState(false);
  // const [isHoverPork, setIsHoverPork] = useState(false);
  // const [isHoverChicken, setIsHoverChicken] = useState(false);
  // const [isHoverDinners, setIsHoverDinners] = useState(false);
  // const [isHoverSoup, setIsHoverSoup] = useState(false);
  // const [isHoverDesserts, setIsHoverDesserts] = useState(false);
  // const [isHoverBev, setIsHoverBev] = useState(false);
  const [isHoverFull, setIsHoverFull] = useState(false);

  // HANDLERS
  const [lunchMenu, setLunchMenu] = useState(false);
  const [appetizerMenu, setAppetizerMenu] = useState(false);
  const [kidsMenu, setKidsMenu] = useState(false);
  const [vegMenu, setVegMenu] = useState(false);
  const [alaCarte, setAlaCarte] = useState(false);
  const [steakMenu, setSteakMenu] = useState(false);
  const [seafoodMenu, setSeafoodMenu] = useState(false);
  const [tacosMenu, setTacosMenu] = useState(false);
  const [fajitasMenu, setFajitasMenu] = useState(false);
  const [comboMenu, setComboMenu] = useState(false);
  const [tortasMenu, setTortasMenu] = useState(false);
  const [sidesMenu, setSidesMenu] = useState(false);
  const [porkMenu, setPorkMenu] = useState(false);
  const [chickenMenu, setChickenMenu] = useState(false);
  const [dinnersMenu, setDinnersMenu] = useState(false);
  const [soupMenu, setSoupMenu] = useState(false);
  const [dessertsMenu, setDessertsMenu] = useState(false);
  const [bevMenu, setBevMenu] = useState(false);
  const [fullMenu, setFullMenu] = useState(false);

  // FULL MENU SECTION HOVER

  const handleHoverFull = () => {
    setIsHoverFull(true);
  };
  const handleMouseLeaveFull = () => {
    setIsHoverFull(false);
  };

  // // BEV SECTION HOVER

  // const handleHoverBev = () => {
  //   setIsHoverBev(true);
  // };
  // const handleMouseLeaveBev = () => {
  //   setIsHoverBev(false);
  // };

  // // DESSERTS SECTION HOVER

  // const handleHoverDesserts = () => {
  //   setIsHoverDesserts(true);
  // };
  // const handleMouseLeaveDesserts = () => {
  //   setIsHoverDesserts(false);
  // };

  // // SOUP SECTION HOVER

  // const handleHoverSoup = () => {
  //   setIsHoverSoup(true);
  // };
  // const handleMouseLeaveSoup = () => {
  //   setIsHoverSoup(false);
  // };

  // // DINNERS SECTION HOVER

  // const handleHoverDinners = () => {
  //   setIsHoverDinners(true);
  // };
  // const handleMouseLeaveDinners = () => {
  //   setIsHoverDinners(false);
  // };

  // // CHICKEN SECTION HOVER

  // const handleHoverChicken = () => {
  //   setIsHoverChicken(true);
  // };
  // const handleMouseLeaveChicken = () => {
  //   setIsHoverChicken(false);
  // };

  // // PORK SECTION HOVER

  // const handleHoverPork = () => {
  //   setIsHoverPork(true);
  // };
  // const handleMouseLeavePork = () => {
  //   setIsHoverPork(false);
  // };

  // // SIDES SECTION HOVER

  // const handleHoverSides = () => {
  //   setIsHoverSides(true);
  // };
  // const handleMouseLeaveSides = () => {
  //   setIsHoverSides(false);
  // };

  // // TORTAS SECTION HOVER

  // const handleHoverTortas = () => {
  //   setIsHoverTortas(true);
  // };
  // const handleMouseLeaveTortas = () => {
  //   setIsHoverTortas(false);
  // };

  // // COMBO SECTION HOVER

  // const handleHoverCombo = () => {
  //   setIsHoverCombo(true);
  // };
  // const handleMouseLeaveCombo = () => {
  //   setIsHoverCombo(false);
  // };

  // // FAJITAS SECTION HOVER

  // const handleHoverFajitas = () => {
  //   setIsHoverFajitas(true);
  // };
  // const handleMouseLeaveFajitas = () => {
  //   setIsHoverFajitas(false);
  // };

  // // TACOS SECTION HOVER

  // const handleHoverTacos = () => {
  //   setIsHoverTacos(true);
  // };
  // const handleMouseLeaveTacos = () => {
  //   setIsHoverTacos(false);
  // };

  // // SEAFOOD SECTION HOVER

  // const handleHoverSeafood = () => {
  //   setIsHoverSeafood(true);
  // };
  // const handleMouseLeaveSeafood = () => {
  //   setIsHoverSeafood(false);
  // };

  // // STEAK SECTION HOVER

  // const handleHoverSteak = () => {
  //   setIsHoverSteak(true);
  // };
  // const handleMouseLeaveSteak = () => {
  //   setIsHoverSteak(false);
  // };

  // // A LA CARTE SECTION HOVER

  // const handleHoverCarte = () => {
  //   setIsHoverCarte(true);
  // };
  // const handleMouseLeaveCarte = () => {
  //   setIsHoverCarte(false);
  // };

  // // VEGETARIAN SECTION HOVER

  // const handleHoverVeg = () => {
  //   setIsHoverVeg(true);
  // };
  // const handleMouseLeaveVeg = () => {
  //   setIsHoverVeg(false);
  // };

  // // LUNCH SECTION HOVER

  // const handleHoverLunch = () => {
  //   setIsHoverLunch(true);
  // };
  // const handleMouseLeaveLunch = () => {
  //   setIsHoverLunch(false);
  // };

  // // APPETIZERS SECTION HOVER

  // const handleHoverApp = () => {
  //   setIsHoverApp(true);
  // };
  // const handleMouseLeaveApp = () => {
  //   setIsHoverApp(false);
  // };

  // // KIDS SECTION HOVER

  // const handleHoverKids = () => {
  //   setIsHoverKids(true);
  // };
  // const handleMouseLeaveKids = () => {
  //   setIsHoverKids(false);
  // };

  // // HANDLERS TO OPEN/CLOSE MENUS

  const fullMenuHandler = () => {
    setFullMenu(!fullMenu);

    if (!fullMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const lunchMenuHandler = () => {
    setLunchMenu(!lunchMenu);

    if (!lunchMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const appetizerMenuHandler = () => {
    setAppetizerMenu(!appetizerMenu);

    if (!appetizerMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const kidsMenuHandler = () => {
    setKidsMenu(!kidsMenu);

    if (!kidsMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const vegMenuHandler = () => {
    setVegMenu(!vegMenu);

    if (!vegMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const alaCarteHandler = () => {
    setAlaCarte(!alaCarte);

    if (!alaCarte) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const steakMenuHandler = () => {
    setSteakMenu(!steakMenu);

    if (!steakMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const seafoodMenuHandler = () => {
    setSeafoodMenu(!seafoodMenu);

    if (!seafoodMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const tacosMenuHandler = () => {
    setTacosMenu(!tacosMenu);

    if (!tacosMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const fajitasMenuHandler = () => {
    setFajitasMenu(!fajitasMenu);

    if (!fajitasMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const comboMenuHandler = () => {
    setComboMenu(!comboMenu);

    if (!comboMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const tortasMenuHandler = () => {
    setTortasMenu(!tortasMenu);

    if (!tortasMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const sidesMenuHandler = () => {
    setSidesMenu(!sidesMenu);

    if (!sidesMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const porkMenuHandler = () => {
    setPorkMenu(!porkMenu);

    if (!porkMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const chickenMenuHandler = () => {
    setChickenMenu(!chickenMenu);

    if (!chickenMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const dinnersMenuHandler = () => {
    setDinnersMenu(!dinnersMenu);

    if (!dinnersMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const soupMenuHandler = () => {
    setSoupMenu(!soupMenu);

    if (!soupMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const dessertsMenuHandler = () => {
    setDessertsMenu(!dessertsMenu);

    if (!dessertsMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const bevMenuHandler = () => {
    setBevMenu(!bevMenu);

    if (!bevMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div>
      <div className="relative z-10 flex items-center justify-center">
        <img src={ElRancho} className="" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <p className="text-white font-nunito">Dress up for halloween</p>
        </div>
      </div>
      <div className="flex flex-col h-screen mt-20 md:h-auto md:flex-row-reverse md:mt-0 md:px-2 lg:px-16">
        <div className="flex flex-col items-center justify-center flex-1 px-2 md:px-4 lg:px-4 ">
          <p className="text-3xl font-bold text-center font-amatic md:text-3xl lg:text-5xl">
            We are delighted to have you dine with us! If there is anything we
            can do to make your visit more enjoyable, PLEASE LET US KNOW! Your
            satisfaction is our number one goal. COME BACK OFTEN AND COME BACK
            SOON!
          </p>
          <h1 className="pt-4 text-4xl font-bold font-amatic md:text-5xl lg:text-7xl lg:pt-10 lg:px-4">
            Gracias!
          </h1>
        </div>

        <div className="items-center justify-center flex-1 pt-24 pb-20 my-auto lg:px-4">
          <video autoPlay loop className="rounded-lg drop-shadow-lg">
            <source src={menuVid} type="video/mp4" />
          </video>
          <div className="pl-4 mt-10 md:pl-0">
            <p className="flex text-lg font-semibold lg:text-3xl">
              For Take-Out Call
              <div className="pl-1 ">
                <a
                  href="tel:757-868-0057"
                  className="decoration-solid hover:text-red"
                >
                  (757) 868-0057
                </a>
              </div>
            </p>
            <p className="flex pt-2 md:text-lg lg:text-2xl">
              Click number to call!
            </p>
          </div>
        </div>
      </div>

      <div
        id="menu-section"
        className="flex items-center justify-center pt-12 pb-2"
      >
        <img
          src={menulogo}
          alt="menu logo"
          className="w-36 md:w-44 lg:w-80 lg:pt-14 lg:pb-6"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center font-bold font-dosis">
        <div className="px-1 py-1">
          <button
            onClick={fullMenuHandler}
            className="px-12 py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Full Menu
          </button>
          {fullMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor ">
                <div className="pt-2 pl-2 ">
                  <h1 className="font-roboto">Full Menu</h1>
                </div>
                <div className="pt-2 pr-1 cursor-pointer hover:text-black">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={fullMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Full />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={lunchMenuHandler}
            className="px-12 py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Lunch Menu
          </button>
          {lunchMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor ">
                <div className="pt-2 pl-2 ">
                  <h1 className="font-roboto">Lunch Menu</h1>
                </div>
                <div className="pt-2 pr-1 cursor-pointer hover:text-black">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={lunchMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Lunch />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={appetizerMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Appetizers
          </button>
          {appetizerMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Appetizers</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={appetizerMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Appetizers />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={kidsMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Kids Menu
          </button>
          {kidsMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Kids Menu</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={kidsMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Kids />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={vegMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Vegetarian Plates
          </button>
          {vegMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Vegetarian Plates</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={vegMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Veg />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={alaCarteHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            A La Carte
          </button>
          {alaCarte && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">A La Carte</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={alaCarteHandler}
                  ></ion-icon>
                </div>
              </div>
              <Carte />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={steakMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Steak
          </button>
          {steakMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Steak</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={steakMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Steak />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={seafoodMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Seafood
          </button>
          {seafoodMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Seafood</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={seafoodMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Seafood />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={tacosMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Tacos
          </button>
          {tacosMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Tacos</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={tacosMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Tacos />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={fajitasMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Fajitas
          </button>
          {fajitasMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Fajitas</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={fajitasMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Fajitas />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={comboMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Combinations
          </button>
          {comboMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Combinations</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={comboMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Combo />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={tortasMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Tortas
          </button>
          {tortasMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Tortas</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={tortasMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Tortas />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={sidesMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Sides
          </button>
          {sidesMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Sides</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={sidesMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Sides />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={porkMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Pork
          </button>
          {porkMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Pork</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={porkMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Pork />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={chickenMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Chicken
          </button>
          {chickenMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Chicken</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={chickenMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Chicken />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={dinnersMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Specialty Dinners
          </button>
          {dinnersMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Specialty Dinners</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={dinnersMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Specialty />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={soupMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Soups
          </button>
          {soupMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Soups</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={soupMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Soup />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={dessertsMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Desserts
          </button>
          {dessertsMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Desserts</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={dessertsMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Desserts />
            </div>
          )}
        </div>
        <div className="px-1 py-1">
          <button
            onClick={bevMenuHandler}
            className="py-2 text-3xl transition-all duration-500 ease-in border-none rounded w-96 bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            Beverages
          </button>
          {bevMenu && (
            <div className="fixed inset-0 z-20 overflow-y-auto lg:mx-32">
              <div className="absolute z-30 flex justify-between w-full pb-4 text-4xl text-white bg-bgMenuColor">
                <div className="pt-2 pl-2">
                  <h1 className="font-roboto">Beverages</h1>
                </div>
                <div className="pt-2 pr-1 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={bevMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <Beverages />
            </div>
          )}
        </div>
      </div>
      {/* <div
        className={`lg:grid-cols-2 lg:grid lg:mx-16 ${
          fullMenu ? "lg:grid-cols-1 " : ""
        } ${lunchMenu ? "lg:grid-cols-1" : ""} ${
          appetizerMenu ? "lg:grid-cols-1" : ""
        } ${kidsMenu ? "lg:grid-cols-1" : ""} ${
          vegMenu ? "lg:grid-cols-1" : ""
        } ${alaCarte ? "lg:grid-cols-1" : ""} ${
          steakMenu ? "lg:grid-cols-1" : ""
        } ${seafoodMenu ? "lg:grid-cols-1" : ""} ${
          tacosMenu ? "lg:grid-cols-1" : ""
        } ${fajitasMenu ? "lg:grid-cols-1" : ""} ${
          comboMenu ? "lg:grid-cols-1" : ""
        } ${tortasMenu ? "lg:grid-cols-1" : " "} ${
          sidesMenu ? "lg:grid-cols-1" : ""
        } ${porkMenu ? "lg:grid-cols-1" : ""} ${
          chickenMenu ? "lg:grid-cols-1" : ""
        } ${dinnersMenu ? "lg:grid-cols-1" : ""} ${
          soupMenu ? "lg:grid-cols-1" : ""
        } ${dessertsMenu ? "lg:grid-cols-1" : ""} ${
          bevMenu ? "lg:grid-cols-1" : ""
        }`}
      >
        <div className="md:flex">
          <div className="md:w-full">
            <div className="flex items-center justify-center px-1 py-2 md:py-1">
              <button
                onMouseEnter={handleHoverFull}
                onMouseLeave={handleMouseLeaveFull}
                onClick={fullMenuHandler}
                className={`w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white ${
                  fullMenu
                    ? "text-white bg-darkRed hover:bg-white hover:text-black"
                    : ""
                }`}
              >
                <div
                  className={`text-3xl font-bold font-dosis md:text-4xl ${
                    isHoverFull ? "hidden" : ""
                  }`}
                >
                  {fullMenu ? "Close Full Menu" : "Full Menu"}
                </div>
                {!fullMenu ? (
                  <div className="text-sm font-nunito md:text-base lg:text-4xl">
                    {isHoverFull && "(click to see menu)"}
                  </div>
                ) : (
                  " "
                )}
              </button>
            </div>
            {fullMenu && (
              <div id="menu">
                <h1>FULL MENU GOES HERE!</h1>
                {fullMenu && (
                  <div className="px-1 py-2">
                    <button
                      onClick={fullMenuHandler}
                      className={`w-full py-2 text-3xl font-bold transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white font-dosis md:text-4xl ${
                        fullMenu
                          ? "bg-darkRed text-white hover:bg-white hover:text-black"
                          : ""
                      } `}
                    >
                      Close Full Menu
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="md:w-full">
            <div className="flex items-center justify-center px-1 md:py-1">
              <button
                onMouseEnter={handleHoverLunch}
                onMouseLeave={handleMouseLeaveLunch}
                onClick={lunchMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white"
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Lunch Menu
                </div>
                {!lunchMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverLunch && "(click to see menu)"}
                  </div>
                ) : (
                  " "
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor  drop-shadow-xl transition-all duration-500 ease-in-out   ${
                lunchMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 opacity-100 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Lunch Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={lunchMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="px-2 py-2 md:py-0">
                <p className="text-center font-nunito md:text-xl md:py-4">
                  Lunch items are available Monday-Friday ONLY.
                </p>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-arimo">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3">No. 1</p>
                    <p className="">Speedy Gonzales</p>
                  </div>
                  <div className="text-xl font-semibold md:text-3xl">$5.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>One taco, one enchilada, choice of rice or beans.</p>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 2</p>
                    <p className="">Special Lunch</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $7.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>Chile relleno, taco, beans, and guacamole salad.</p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 3</p>
                    <p className="">Special Lunch</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>One beef burrito, rice, and beans.</p>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2 ">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 4</p>
                    <p className="">Special Lunch</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>One beef enchilada, rice, and beans.</p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 5</p>
                    <p className="">Special Lunch</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>Chile relleno, rice, and beans.</p>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 6</p>
                    <p className="">Special Lunch</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>Burrito, taco, and rice.</p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 7</p>
                    <p className="">Huevos Rancheros</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    (Ranch style eggs) Two eggs, Mexican sauce on top, rice,
                    beans, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 8</p>
                    <p className="">Lunch Fajitas</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $10.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    Chicken or beef fajitas served with beans, rice, and
                    tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 9</p>
                    <p className="">Burrito Mexicano</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $8.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    Burrito made with chorizo (Mexican sausage) and egg, topped
                    with melted cheese, choice of rice or beans.
                  </p>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No. 10</p>
                    <p className="">Lunch Chimichanga</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $7.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    One chimichanga, beef or chicken. Served with rice or beans.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-3 ">No.11</p>
                    <p className="">Huevos con Chorizo</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $10.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    Two scrambled eggs with Mexican sausage served with rice,
                    beans, and tortillas.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {lunchMenu && (
                <div className="bottom-0 w-full px-1 py-2">
                  <button
                    onClick={lunchMenuHandler}
                    className={`w-full py-2 text-3xl font-bold transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white font-dosis md:text-4xl ${
                      lunchMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    } `}
                  >
                    Close Lunch Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-full">
            <div className="px-1 py-2 md:py-1">
              <button
                onMouseEnter={handleHoverApp}
                onMouseLeave={handleMouseLeaveApp}
                onClick={appetizerMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Appetizers
                </div>
                {!appetizerMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverApp && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl duration-500 transition-all ease-linear ${
                appetizerMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div className="w-auto">
                  <h1 className="text-3xl text-white font-roboto">
                    Appetizer Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-3 hover:text-black hover:cursor-pointer md:right-4">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={appetizerMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Nachos with Chicken</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $8.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Nachos with Cheese</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Nachos with Beans</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $8.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Nachos with Beef</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $8.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Nachos with Beans and Beef</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Cheese Dip</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $3.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Quesadilla (cheese)</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $3.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Quesadilla with Chicken or Beef</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $5.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">
                      Quesadilla (Chicken or Beef) & Cheese Dip
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $7.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Guacamole Dip</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $3.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Cheese Sticks (6)</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $5.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Guacamole Salad</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $3.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Cheese Dip (Large)</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $7.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Queso Fundido con Chorizo</p>
                  </div>
                  <div className="pl-1 text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Queso Fundido con Carne</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Guacamole Dip (Large)</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $7.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">French Fries</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $3.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">French Fries with Melted Cheese</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Papas Ala Mexicana</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $10.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Quesadilla Fajita, Chicken or Beef</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $7.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="">Fresh Made Guacamole</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $8.99
                  </div>
                </div>
              </div>
              <div className="flex px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {appetizerMenu && (
                <div className="px-1 py-2">
                  <button
                    onClick={appetizerMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white font-dosis ${
                      appetizerMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : " "
                    } `}
                  >
                    Close Appetizer Menu
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverKids}
                onMouseLeave={handleMouseLeaveKids}
                onClick={kidsMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Kids Menu
                </div>
                {!kidsMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverKids && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl duration-500 transition-all ease-linear ${
                kidsMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">Kids Menu</h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={kidsMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="px-2 font-nunito md:py-3">
                <p className="font-bold text-center md:text-lg">
                  Dine-in Only. Served to children under 10 years old! Includes
                  soft drink, add juice or milk.
                </p>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1">1.</p>
                    <p className="">Cheese Sticks and Fries</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">2.</p>
                    <p className="">Taco and rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">3.</p>
                    <p className="">Enchilada and rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">4.</p>
                    <p className="">One Quesadilla and rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">5.</p>
                    <p className="">One Burrito and rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">6.</p>
                    <p className="">One Soft Shell Taco and rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">7.</p>
                    <p className="">One Hot Dog with French Fries</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">8.</p>
                    <p className="">
                      One Child&apos;s Hamburger with French Fries
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">9.</p>
                    <p className="">Chicken Tenders and French Fries</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>

              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">10.</p>
                    <p className="">Cheese Sticks and rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">11.</p>
                    <p className="">Cheese Pizza with French Fries</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">11.</p>
                    <p className="">French Fries with rice</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $6.99
                  </div>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {kidsMenu && (
                <div className="px-1 py-2 md:bottom-0 md:absolute md:w-full">
                  <button
                    onClick={kidsMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white font-dosis ${
                      kidsMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    } `}
                  >
                    Close Kids Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-full">
            {" "}
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverVeg}
                onMouseLeave={handleMouseLeaveVeg}
                onClick={vegMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Vegetarian Plates
                </div>
                {!vegMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverVeg && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl duration-500 transition-all ease-linear ${
                vegMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Vegetarian Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={vegMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo">
                    <p className="pr-1 md:text-3xl">1.</p>
                    <p className=" md:text-3xl">
                      One bean tostada, one cheese enchilada, and bean burrito
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="pr-1 text-xl font-semibold font-arimo md:text-3xl">
                      2.
                    </p>
                    <p className="text-xl font-semibold font-arimo md:text-3xl">
                      One cheese burrito, one bean tostada, and rice
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="pr-1 text-xl font-semibold font-arimo md:text-3xl">
                      3.
                    </p>
                    <p className="text-xl font-semibold font-arimo md:text-3xl">
                      One bean burrito, one cheese enchilada, and rice
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo ">
                    <p className="pr-1 md:text-3xl">4.</p>
                    <p className="md:text-3xl">
                      One chalupa, one bean burrito, and one quesadilla
                    </p>
                  </div>
                  <div className="pl-1 text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
                <div className="px-2">
                  <p></p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="pr-1 text-xl font-semibold font-arimo md:text-3xl">
                      5.
                    </p>
                    <p className="text-xl font-semibold font-arimo md:text-3xl">
                      One bean burrito with melted cheese and one chalupa
                    </p>
                  </div>
                  <div className="pl-1 text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
                <div className="px-2">
                  <p></p>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex ">
                    <p className="pr-1 text-xl font-semibold font-arimo md:text-3xl">
                      6.
                    </p>
                    <p className="text-xl font-semibold font-arimo md:text-3xl">
                      Vegetable Fajitas
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $13.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    Mixed vegetables, onions, tomatoes, bell pepper, and
                    mushrooms.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">7.</p>
                    <p className="">
                      Cheese enchilada, bean burrito, and cheese quesadilla
                    </p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
              </div>
              <div className="py-3 font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">8.</p>
                    <p className="">Spinach Cream Burrito</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $12.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>
                    Two soft shell flour tortillas stuffed with spinach. Topped
                    with lettuce, tomato, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange font-nunito">
                <div className="flex justify-between px-2">
                  <div className="flex text-xl font-semibold font-arimo md:text-3xl">
                    <p className="pr-1 ">9.</p>
                    <p className="">Spinach Quesadilla</p>
                  </div>
                  <div className="text-xl font-semibold font-arimo md:text-3xl">
                    $9.99
                  </div>
                </div>
                <div className="px-2 md:text-lg">
                  <p>Served with lettuce, guacamole, tomato, and sour cream.</p>
                </div>
              </div>
              {vegMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={vegMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      vegMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    } `}
                  >
                    Close Vegetarian Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverCarte}
                onMouseLeave={handleMouseLeaveCarte}
                onClick={alaCarteHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  A La Carte
                </div>
                {!alaCarte ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverCarte && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                alaCarte ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    A La Carte
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={alaCarteHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Cheese Burrito</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $5.99</p>
                    <p className=" md:text-3xl">(2) $10.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Spinach Burrito</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $5.99</p>
                    <p className=" md:text-3xl">(2) $10.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Enchiladas</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.50</p>
                    <p className=" md:text-3xl">(3) $9.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Beef Tostada</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.99</p>
                    <p className=" md:text-3xl">(2) $7.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Beef Burrito</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $5.75</p>
                    <p className=" md:text-3xl">(2) $10.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Chicken Burrito</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $5.99</p>
                    <p className=" md:text-3xl">(2) $11.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Bean Burrito</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $5.50</p>
                    <p className=" md:text-3xl">(2) $9.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Chalupas</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.99</p>
                    <p className=" md:text-3xl">(2) $7.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Chile Rellenos</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.99</p>
                    <p className=" md:text-3xl">(2) $7.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Cheese Pizza</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Cheese Enchiladas</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.50</p>
                    <p className=" md:text-3xl">(3) $9.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Chicken Enchiladas</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.50</p>
                    <p className=" md:text-3xl">(3) $9.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Tacos (Beef)</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $2.75</p>
                    <p className=" md:text-3xl">(3) $7.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Tacos (Chicken)</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $2.75</p>
                    <p className=" md:text-3xl">(3) $7.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className=" md:text-3xl">Tamales</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $3.99</p>
                    <p className=" md:text-3xl">(3) $10.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className="md:text-3xl">Soft Shell Beef Tacos</p>
                  </div>
                  <div>
                    <p className=" md:text-3xl">(1) $2.99</p>
                    <p className=" md:text-3xl">(3) $8.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className="text-xl md:text-3xl">
                      Soft Shell Chicken Tacos
                    </p>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl">(1) $2.99</p>
                    <p className="text-xl md:text-3xl">(3) $8.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className="text-xl md:text-3xl">
                      Chimichanga (Chicken or Beef)
                    </p>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl">(1) $6.00</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className="text-xl md:text-3xl">Chimichanga (Shrimp)</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl">(1) $6.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className="text-xl md:text-3xl">Chile Poblano</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl">(1) $4.99</p>
                  </div>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex items-center">
                    <p className="text-xl md:text-3xl">
                      Side of Rice with Cheese sauce
                    </p>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl">$6.99</p>
                  </div>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {alaCarte && (
                <div className="px-1 py-2">
                  <button
                    onClick={alaCarteHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      alaCarte
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    } `}
                  >
                    Close A La Carte Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverSteak}
                onMouseLeave={handleMouseLeaveSteak}
                onClick={steakMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Steak
                </div>
                {!steakMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverSteak && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                steakMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Steak Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={steakMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Steak El Rancho</p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled Ribeye server with shrimp, mushrooms, onions, and
                    topped with cheese dip. Served with rice, lettuce, tomato,
                    and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Steak con Papas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Grilled Ribeye steak, served with French Fries.</p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Steak a La Mexicana</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled Ribeye steak cooked with onions, tomatoes, and bell
                    peppers. Served with rice, guacamole salad, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Steak Ranchero</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Ribeye steak cooked with our special ranchero sauce. Served
                    with rice, beans, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Carne Asada</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled thin steak, covered with sauteed onions. Served with
                    rice, lettuce, tomatoes, guacamole, and flour tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      T-Bone 10 oz. Ranchero
                    </p>
                  </div>
                  <div className="text-xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    T-Bone steak cooked in our special ranchero sauce. Served
                    with rice, beans, and flour tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      T-Bone 10 oz. a La Mexicana
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled T-Bone cooked with onions, tomatoes, bells peppers.
                    Served with rice, guacamole salad, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      T-Bone 10 oz. con Papas
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Grilled T-Bone steak. Served with French Fries.</p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      T-Bone 10 oz. &quot;El Rancho&quot;
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$17.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled T-Bone served with shrimp, mushrooms, onions, and
                    topped with cheese dip. Served with rice, lettuce, tomato,
                    and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      T-Bone 10 oz. Seafood Combo
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$19.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled T-Bone covered with sauteed scallops, shrimp,
                    vegetables, and chipotle-garlic sauce. Served with rice.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {steakMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={steakMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      steakMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Steak Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverSeafood}
                onMouseLeave={handleMouseLeaveSeafood}
                onClick={seafoodMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Seafood
                </div>
                {!seafoodMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverSeafood && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                seafoodMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Seafood Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={seafoodMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Camarones a la Diabla</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Fresh shrimp marinated in our Diabla sauce (very hot).
                    Served with rice, salad, and flour tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Camarones Acapulco</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Shrimp marinated in our special sauce and sauteed with bell
                    peppers, mushrooms, onions, and tomato. Served with rice and
                    toast.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Camarones al Mojo</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Shrimp sauteed in our special garlic sauce. Served with our
                    house salad, rice, and toast.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Camarones Veracruz</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Shrimp marinated in chipotle sauce and sauteed with
                    mushrooms and carrots. Served with Pico de Gallo, corn
                    salad, rice, and toast.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Chimichangas Del Mar</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas stuffed with shrimp, scallops, and white
                    salsa. Served with lettuce, tomato, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas Del Mar</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three enchiladas with shrimp and scallops. Topped with
                    cheese dip, white salsa, rice, and guacamole salad.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Quesadilla Del Mar</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Scallops and shrimp with tomato, onions, bell pepper,
                    lettuce, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Shrimp and Rice</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Shrimp cooked with onions, bell peppers, and tomatoes then
                    mixed with rice.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Shrimp Cocktail (Grande)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Cooked shrimp in a cocktail sauce with chopped onions,
                    tomato, cilantro, and avocado. Served with Valentina salsa,
                    saltine crackers, and lime.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Pollo y Camaron</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled chicken and grilled shrimp with rice topped with
                    Cheese Dip served with flour tortillas.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {seafoodMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={seafoodMenuHandler}
                    className={`w-full py-2 text-3xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      seafoodMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Seafood Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverTacos}
                onMouseLeave={handleMouseLeaveTacos}
                onClick={tacosMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Tacos
                </div>
                {!tacosMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverTacos && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>

            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                tacosMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Tacos Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={tacosMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="px-2 py-2 font-nunito">
                <p className="text-center md:text-xl">
                  Served with Pico de Gallo, salsa, and beans.
                </p>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tacos Carne Asada</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Three soft flour tortillas filled with grilled steak.</p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tacos de Alambre</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three soft flour tortillas filled with chopped steak,
                    onions, bacon, bell pepper, shredded cheese, and pineapple.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tacos de Carnitas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Three soft flour tortillas filled with shredded pork.</p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tacos de Pescado</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Three soft flour tortillas with tilapia filet.</p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tacos al Pastor</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three soft flour tortillas with chopped pork with a special
                    red sacue and pineapple.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tacos de Camaron</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Three soft flour tortillas with chopped shrimp.</p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {tacosMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={tacosMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      tacosMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    } `}
                  >
                    Close Tacos Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverFajitas}
                onMouseLeave={handleMouseLeaveFajitas}
                onClick={fajitasMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-linear border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Fajitas
                </div>
                {!fajitasMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverFajitas && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                fajitasMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Fajitas Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-4 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={fajitasMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-2 font-nunito">
                <p className="text-red md:text-xl md:font-bold">
                  SERVED ON A HOT SKILLET
                </p>
                <p className="py-2 text-center md:text-xl">
                  All fajitas served with fried beans, lettuce, guacamole, and
                  flour tortillas.
                </p>
                <p className="py-2 text-center md:text-xl">
                  All fajitas are cooked with onions, tomato, and bell pepper.
                </p>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Beef or Chicken Fajitas
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Beef or Chicken Fajitas for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$25.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Chicken or beef cooked with onions, tomato, and bell pepper.
                    Served with beans, lettuce, tomato, guacamole, and
                    tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Chicken And Beef Fajitas
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Chicken And Beef Fajitas for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Chicken and beef cooked with onions, tomato, and bell
                    pepper. Served with beans, lettuce, tomato, guacamole, and
                    tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Texas Fajitas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Texas Fajitas for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$27.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    A combination of beef, chicken, and shrimp cooked with
                    onions, tomato, and bell pepper. Served with beans, lettuce,
                    tomato, guacamole, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">El Mariachi</p>
                  </div>
                  <div className="text-xl md:text-3xl">$17.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      El Mariachi for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$28.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Beef, chicken, shrimp, and chorizo cooked with onions,
                    tomato, and bell pepper. Served with beans, lettuce, tomato,
                    guacamole, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Fajitas El Rancho</p>
                  </div>
                  <div className="text-xl md:text-3xl">$18.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Fajitas El Rancho for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$29.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Beef, chicken, shrimp, chorizo, and pork tips cooked with
                    onions, tomato, and bell pepper. Served with beans, lettuce,
                    tomato, guacamole, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Shrimp Fajitas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$18.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Shrimp Fajitas for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$29.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Shrimp cooked with onions, tomato, and bell peppers. Served
                    with beans, lettuce, tomato, guacamole, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Fajita Seafood</p>
                  </div>
                  <div className="text-xl md:text-3xl">$18.99</div>
                </div>
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Fajita Seafood for two (2)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$30.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Scallops and shrimp cooked with onions, tomato, and bell
                    peppers. Served with beans, lettuce, tomato, guacamole, and
                    tortillas.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {fajitasMenu && (
                <div className="px-1 py-2">
                  <button
                    onClick={fajitasMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      fajitasMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Fajitas Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-full">
            {" "}
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverCombo}
                onMouseLeave={handleMouseLeaveCombo}
                onClick={comboMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Combinations
                </div>
                {!comboMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverCombo && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl duration-500 transition-all ease-linear ${
                comboMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Combinations Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={comboMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="px-2 py-2 pb-4 font-nunito">
                <h1 className="flex items-center justify-center text-xl font-semibold text-center font-arimo md:text-3xl">
                  Pick 4 items to make your &quot;Favorite Combo&quot;!
                </h1>
              </div>
              <div className="flex items-center justify-center pt-4 text-xl font-semibold font-arimo md:text-3xl">
                <h1>$12.99</h1>
              </div>
              <div className="flex flex-col justify-center pb-4 text-lg font-nunito md:py-4">
                <div className="flex justify-evenly">
                  <div className="flex-1 text-center md:text-3xl">Chalupa</div>
                  <div className="flex-1 text-center md:text-3xl">Burrito</div>
                  <div className="flex-1 text-center md:text-3xl">
                    Chile Relleno
                  </div>
                </div>
                <div className="flex justify-evenly">
                  <div className="flex-1 text-center md:text-3xl">Tostada</div>
                  <div className="flex-1 text-center md:text-3xl">
                    Enchilada
                  </div>
                  <div className="flex-1 text-center md:text-3xl">Rice</div>
                </div>
                <div className="flex justify-evenly">
                  <div className="flex-1 text-center md:text-3xl">Beans</div>
                  <div className="flex-1 text-center md:text-3xl">Taco</div>
                  <div className="flex-1 text-center md:text-3xl">Tamale</div>
                </div>
              </div>

              <h1 className="flex items-center justify-center px-2 py-6 font-extrabold text-center font-nunito md:text-lg">
                ANY SUBSTITUTIONS OF CHICKEN, CHEESE, OR BEEF IS 0.25&#162;
                EXTRA.
              </h1>

              <div className="flex items-center justify-center px-2 py-4 font-extrabold text-center font-nunito md:text-lg">
                <h1>
                  EXTRA $1.00 CHARGE IF YOU WOULD LIKE TWO OF THE SAME ITEM.
                </h1>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {comboMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2 ">
                  <button
                    onClick={comboMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      comboMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    } `}
                  >
                    Close Combinations Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            {" "}
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverTortas}
                onMouseLeave={handleMouseLeaveTortas}
                onClick={tortasMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Tortas
                </div>
                {!tortasMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverTortas && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                tortasMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Tortas Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={tortasMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <h1 className="flex items-center justify-center py-4 text-3xl font-bold text-center ">
                  The BEST Mexican sandwich you&apos;ll ever tried!
                </h1>
                <h1 className="flex items-center justify-center py-4 text-lg text-center md:text-lg">
                  All Tortas include tomato, onion, avocado, and we add our
                  special recipe Chipotle sauce or jalapeños. We grill our bread
                  with a light touch of mayo.
                </h1>
                <h1 className="flex items-center justify-center py-2 text-lg font-semibold text-center">
                  Choose your favorite &quot;Torta&quot; from below!
                </h1>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">La Cubana</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    A unique combination of meats; steak, pork, ham, and bacon,
                    then topped with fried egg, cheese, and slices of jalapeños.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Carne Asada (Grilled Steak)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Carnitas (Fried Pork Tips)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
              </div>
              <div className="px-2 py-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {tortasMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={tortasMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      tortasMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Tortas Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-full">
            {" "}
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverSides}
                onMouseLeave={handleMouseLeaveSides}
                onClick={sidesMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Side Orders
                </div>
                {!sidesMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverSides && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl duration-500 transition-all ease-linear ${
                sidesMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Sides Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={sidesMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Grilled Beef</p>
                  </div>
                  <div className="text-xl md:text-3xl">$7.99</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Grilled Chicken</p>
                  </div>
                  <div className="text-xl md:text-3xl">$7.99</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Grilled Shrimp</p>
                  </div>
                  <div className="text-xl md:text-3xl">$9.99</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Pico de Gallo</p>
                  </div>
                  <div className="text-xl md:text-3xl">$2.00</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Lettuce</p>
                  </div>
                  <div className="text-xl md:text-3xl">$1.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Tomatoes</p>
                  </div>
                  <div className="text-xl md:text-3xl">$1.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Onions</p>
                  </div>
                  <div className="text-xl md:text-3xl">$1.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Flour Tortillas (3)</p>
                  </div>
                  <div className="text-xl md:text-3xl">$1.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Corn Tortillas (3)</p>
                  </div>
                  <div className="text-xl md:text-3xl">$1.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Bean Dip</p>
                  </div>
                  <div className="text-xl md:text-3xl">$5.99</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Sour Cream</p>
                  </div>
                  <div className="text-xl md:text-3xl">$2.00</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Beans</p>
                  </div>
                  <div className="text-xl md:text-3xl">$3.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Rice</p>
                  </div>
                  <div className="text-xl md:text-3xl">$3.50</div>
                </div>
              </div>
              <div className="py-3 font-semibold font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Shredded Cheese</p>
                  </div>
                  <div className="text-xl md:text-3xl">$2.00</div>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Jalapeños</p>
                  </div>
                  <div className="text-xl md:text-3xl">$1.50</div>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {sidesMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={sidesMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      sidesMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Side Orders Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            {" "}
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverPork}
                onMouseLeave={handleMouseLeavePork}
                onClick={porkMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Pork
                </div>
                {!porkMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverPork && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                porkMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">Pork Menu</h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={porkMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Chile Verde</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Pork tips in green sauce. Served with rice, beans, and flour
                    tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Carnitas Dinner</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Pork tips served with rice, beans, guacamole salad, and
                    flour tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Burrito Chipotle</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large flour tortilla filled with pork, rice, beans, and
                    chorizo. Topped with melted cheese, chipotle sauce, and
                    corn.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {porkMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={porkMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      porkMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Pork Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-full">
            {" "}
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverChicken}
                onMouseLeave={handleMouseLeaveChicken}
                onClick={chickenMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Chicken
                </div>
                {!chickenMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverChicken && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                chickenMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Chicken Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={chickenMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Pollo con Crema</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled chicken breast sauteed in our delicious cream sauce
                    with onions and bell peppers. Served with rice and refried
                    beans.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Pollo Fundido</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled chicken breast topped with queso fundido con
                    chorizo. Served with rice, guacamole salad, and flour
                    tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Pollo al Pastor</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Chicken breast, onions, pineapple, and topped with cheese
                    dip. Served with rice, lettuce, tomato, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Pollo Loco</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled chicken fillet covered in red sauce. Served with
                    rice, lettuce, guacamole, and flour tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Mole Poblano</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Chunks of chicken with red mole sauce. Served with rice and
                    beans.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Arroz con Pollo</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Grilled chicken with rice, topped with cheese dip. Served
                    with flour tortillas.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {chickenMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={chickenMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      chickenMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Chicken Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverDinners}
                onMouseLeave={handleMouseLeaveDinners}
                onClick={dinnersMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white "
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Specialty Dinners
                </div>
                {!dinnersMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverDinners && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                dinnersMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Specialty Dinners Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-4 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={dinnersMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Huevos Rancheros</p>
                  </div>
                  <div className="text-xl md:text-3xl">$11.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    (Ranch style eggs) Tow eggs, topped with Mexican sauce.
                    Served with rice, refried beans, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Burrito El Rancho</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large flour tortilla filled with rice, beans, chorizo,
                    chicken, and beef. Topped with Pico de Gallo and melted
                    cheese.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Burrito Grande</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large flour tortilla filled with strips of beef or chicken,
                    onions, bell peppers, tomatoes, and topped with melted
                    cheese.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Burrito Ranchero</p>
                  </div>
                  <div className="text-xl md:text-3xl">$7.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Made with chunks of beef or pork, topped with lettuce,
                    tomatoes, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Special Burrito</p>
                  </div>
                  <div className="text-xl md:text-3xl">$7.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    One beef burrito topped with cheese, lettuce, sour cream,
                    and tomatoes.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Steak Burrito</p>
                  </div>
                  <div className="text-xl md:text-3xl">$8.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Flour tortilla filled with steak cooked with salsa the
                    topped with nacho cheese.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Burritos Chicken and Creamed Spinach
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas stuffed with chicken and creamed spinach
                    then topped with lettuce, tomato, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Burritos Fundidos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$11.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two rolled flour tortillas stuffed with chicken, beef, or
                    pork. Covered with sour cream and shredded cheese then
                    baked!
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">California Burrito</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Flour tortilla filled with chicken or steak (cooked with
                    salsa), beans, rice, Pico de Gallo, and covered with melted
                    cheese.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Burritos, Shrimp, Spinach, and Cheese
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas stuffed with shrimp and spinach, covered
                    with melted cheese. Topped with lettuce, tomato, and sour
                    cream.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Super Burritos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$12.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas filled with chunks of pork, covered with
                    lettuce, guacamole, and tomatoes.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Chilaquiles</p>
                  </div>
                  <div className="text-xl md:text-3xl">$10.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Corn tortilla chips cooked in sauce with chunks of beef or
                    chicken and topped with extra cheese, rice, and beans.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Chiles Poblanos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Poblano Chile peppers stuffed with cheese. Served with rice
                    and beans in a special sauce and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Chimichangas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$11.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas rolled up and stuffed with shredded
                    beef, pork, or chicken. Covered with melted cheese (served
                    fried or soft).
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Super Chimichangas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas rolled up and stuffed with beef, pork,
                    or chicken. Covered with melted cheese and topped with
                    lettuce, tomato, sour cream, and guacamole. (served fried or
                    soft)
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas El Rancho</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Five enchiladas; one chicken, one beef, one cheese, one
                    beans, and one shredded beef. Topped with lettuce, tomatoes,
                    and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas Poblanas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three chicken or beef enchiladas covered with red mole sauce
                    and shredded cheese. Served with rice.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas Rancheras</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two cheese enchiladas topped with pork, cooked with
                    tomatoes, onions, bell peppers, and enchilada sauce. Served
                    with guacamole and rice.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas Verdes</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three chicken enchiladas covered with our special tomatillo
                    salsa and covered with shredded cheese. Served with rice and
                    refried beans.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Quesadilla Grande Texana
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large flour tortilla stuffed with cheese, chicken, steak,
                    and shrimp grilled with onions, green peppers, and tomatoes.
                    With lettuce, sour cream, and guacamole.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">El Sombrero (Grande)</p>
                  </div>
                  <div className="text-xl md:text-3xl">$20.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Our delicious marinated tender skirt steak, a small side
                    dish of sliced shrimp cooked with mushrooms and cheese with
                    a special mild sauce. Shrimp cooked with guojillo peppers.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Chicken Tenders Dinner
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$8.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Five chicken tenders and french fries.</p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas Suizas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$12.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three enchiladas with white chicken meat, cheese dip on top,
                    and white salsa. Served with rice and guacamole salad.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Enchiladas With Rice</p>
                  </div>
                  <div className="text-xl md:text-3xl">$12.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Three chicken or beef enchiladas with rice and cheese sauce.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Fajita Salad (Beef or Chicken)
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$12.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Lettuce, tomato, onion, bell pepper, and shredded cheese.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Fajita Salad (Shrimp)</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Lettuce, tomato, onion, bell pepper, and shredded cheese.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">La Changa</p>
                  </div>
                  <div className="text-xl md:text-3xl">$10.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    One flour tortilla filled with beef or chicken, covered with
                    hot melted cheese. Served with rice and beans.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Los Amigos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Poblano pepper stuffed with cheese and pork burrito. Served
                    with rice and beans.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Mexican Stew</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Choice of chopped steak or chicken, green pepper, onions,
                    tomatoes, and spices simmered together. Served with rice,
                    beans, and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 f">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Mexico&apos;s Famous Chile-Colorado
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Beef chunks with El Mariachi Red Chile Sauce. Served with
                    rice, beans, and flour tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Nachos al Carbon</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Cheese nachos with assorted beef or chicken, cooked with
                    onions, bell peppers, and tomatoes.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Quesadilla Dinner</p>
                  </div>
                  <div className="text-xl md:text-3xl">$11.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Chicken or beef quesadilla. Served with beans and rice.</p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Quesadilla Rellena</p>
                  </div>
                  <div className="text-xl md:text-3xl">$10.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    A flour tortilla grilled and stuffed with your choice of
                    chicken, chorizo, mushrooms, beef, or spinach. Served with
                    guacamole salad, topped with sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Quesadilla Grande</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large flour tortilla stuffed with cheese, grilled chicken or
                    beef cooked with tomatoes, onions, and bell peppers. Served
                    with lettuce, guacamole, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Quesadilla Grande Shrimp
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large flour tortilla stuffed with cheese and grilled shrimp
                    cooked with tomatoes, onions, and bell peppers. Served with
                    lettuce, guacamole, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Seafood Nachos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$17.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Corn tortilla chips with cheese, topped with shrimp,
                    scallops, beans, Pico de Gallo, sour cream, and avocado.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Shrimp Chimichangas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Two flour tortillas rolled up and stuffed with grilled
                    shrimp, onions, tomatoes, bell peppers, and covered with
                    melted cheese.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Shrimp Quesadilla Rellena
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    A flour tortilla grilled and stuffed shrimp, onions,
                    tomatoes, and bell peppers. Served with lettuce, guacamole,
                    and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Special Dinner</p>
                  </div>
                  <div className="text-xl md:text-3xl">$16.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    One each: Chalupa, chile relleno, beef taco, enchilada, and
                    tamale. Served with rice and beans.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Arroz Texano</p>
                  </div>
                  <div className="text-xl md:text-3xl">$17.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Steak, chicken, and shrimp served with rice, cheese sauce,
                    and tortillas.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Nachos Texanos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$17.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Cheese nachos with assorted toppings of grilled shrimp,
                    chicken, beef, onions, tomatoes, and bell peppers.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Taco Salad Fajita</p>
                  </div>
                  <div className="text-xl md:text-3xl">$12.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large fried flour tortilla shell filled with grilled chicken
                    or beef. Cooked with onions, tomatoes, and bell peppers.
                    Covered with lettuce, sour cream, and cheese.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">
                      Taco Fajita Salad Shrimp
                    </p>
                  </div>
                  <div className="text-xl md:text-3xl">$13.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large fried flour tortilla shell filled with grilled shrimp.
                    Cooked with onions, tomatoes, and bell peppers. Covered with
                    lettuce, sour cream, and cheese.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Taco Salad</p>
                  </div>
                  <div className="text-xl md:text-3xl">$9.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Large fried flour tortilla shell filled with chicken or beef
                    with lettuce, sour cream, tomatoes, and cheese.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Taquitos Flautas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$11.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Four rolled corn tortillas stuffed with beef or chicken.
                    Served with lettuce, guacamole, and sour cream.
                  </p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Shrimp Nachos</p>
                  </div>
                  <div className="text-xl md:text-3xl">$15.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Cheese nachos topped with grilled shrimp, onions, bell
                    peppers, and tomatoes.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {dinnersMenu && (
                <div className="bottom-0 w-full px-1 py-2">
                  <button
                    onClick={dinnersMenuHandler}
                    className={`w-full py-2 text-3xl md:text-3xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      dinnersMenu
                        ? "bg-darkRed text-white hover:text-[#000] hover:bg-white"
                        : ""
                    }`}
                  >
                    Close Specialty Dinners Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverSoup}
                onMouseLeave={handleMouseLeaveSoup}
                onClick={soupMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white"
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Soups
                </div>
                {!soupMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverSoup && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                soupMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Soups Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={soupMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 font-semibold bg-orange font-arimo">
                <div className="flex justify-between px-2">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Sopa de Pollo</p>
                  </div>
                  <div className="text-xl md:text-3xl">$9.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Chicken soup cooked with fresh chicken, onions, cilantro,
                    and tomato. With rice and fresh avocado added. Served with
                    Pico de Gallo and lime.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Sopa de Camaron</p>
                  </div>
                  <div className="text-xl md:text-3xl">$14.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Shrimp soup cooked with Tiger Shrimp, chipotle sauce, and
                    vegetables. With fresh avocado added. Served with Pico de
                    Gallo and lime.
                  </p>
                </div>
              </div>
              <div className="px-2 font-nunito">
                <p className="text-xs text-red md:text-sm">
                  Consuming raw or undercooked meats and seafood can increase
                  your risk of food borne illness.
                </p>
              </div>
              {soupMenu && (
                <div className="absolute bottom-0 w-full py-2 file:px-1">
                  <button
                    onClick={soupMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      soupMenu
                        ? "bg-darkRed text-white hover:text-[#000] hover:bg-white"
                        : ""
                    }`}
                  >
                    Close Soup Menu
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            <div className="px-1 pb-2 md:py-1">
              <button
                onMouseEnter={handleHoverDesserts}
                onMouseLeave={handleMouseLeaveDesserts}
                onClick={dessertsMenuHandler}
                className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white"
              >
                <div className="text-3xl font-bold font-dosis md:text-4xl">
                  Desserts
                </div>
                {!dessertsMenu ? (
                  <div className="text-sm font-nunito md:text-base">
                    {isHoverDesserts && "(click to see menu)"}
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div
              id="menu"
              className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
                dessertsMenu ? "top-0" : "top-[3000px]"
              }`}
            >
              <div className="flex items-center justify-center py-4 bg-bgMenuColor">
                <div>
                  <h1 className="text-3xl text-white font-roboto">
                    Desserts Menu
                  </h1>
                </div>
                <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
                  <ion-icon
                    name="close-circle-sharp"
                    onClick={dessertsMenuHandler}
                  ></ion-icon>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Fried Ice Cream</p>
                  </div>
                  <div className="text-xl md:text-3xl">$4.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Coated vanilla ice cream quickly fried in a tortilla shell
                    served with honey and chocolate with whipped cream and a
                    cherry on top.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Sopapillas</p>
                  </div>
                  <div className="text-xl md:text-3xl">$3.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Fried pieces of flour tortillas with cinnamon sugar. Served
                    with honey.
                  </p>
                </div>
              </div>
              <div className="py-3 bg-orange">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Sopapillas con Nieve</p>
                  </div>
                  <div className="text-xl md:text-3xl">$4.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>
                    Fried pieces of flour tortillas with cinnamon sugar. Served
                    with honey and a scoop of vanilla ice cream.
                  </p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Churros (3)</p>
                  </div>
                  <div className="text-xl md:text-3xl">$3.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Fried dough with cinnamon sugar.</p>
                </div>
              </div>
              <div className="py-3 bg-orange ">
                <div className="flex justify-between px-2 font-semibold font-arimo">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Flan</p>
                  </div>
                  <div className="text-xl md:text-3xl">$4.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg">
                  <p>Spanish caramel custard.</p>
                </div>
              </div>
              <div className="py-3 ">
                <div className="flex justify-between px-2 font-semibold font-arimo ">
                  <div className="flex">
                    <p className="text-xl md:text-3xl">Churros con Nieve</p>
                  </div>
                  <div className="text-xl md:text-3xl">$4.99</div>
                </div>
                <div className="px-2 font-nunito md:text-lg ">
                  <p>
                    Three churros dusted with cinnamon sugar and a scoop of
                    vanilla ice cream.
                  </p>
                </div>
              </div>
              {dessertsMenu && (
                <div className="absolute bottom-0 w-full px-1 py-2">
                  <button
                    onClick={dessertsMenuHandler}
                    className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                      dessertsMenu
                        ? "bg-darkRed text-white hover:bg-white hover:text-[#000]"
                        : ""
                    }`}
                  >
                    Close Desserts Menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-1 pb-2 md:py-1">
          <button
            onMouseEnter={handleHoverBev}
            onMouseLeave={handleMouseLeaveBev}
            onClick={bevMenuHandler}
            className="w-full py-2 text-3xl transition-all duration-500 ease-in border-none rounded bg-darkOrange hover:bg-darkRed hover:text-white"
          >
            <div className="text-3xl font-bold font-dosis md:text-4xl">
              Beverages
            </div>
            {!bevMenu ? (
              <div className="text-sm font-nunito md:text-base">
                {isHoverBev && "(click to see menu)"}
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
        <div
          id="menu"
          className={`fixed inset-0 z-40 overflow-y-auto lg:mx-32 bg-bgColor drop-shadow-2xl transition-all duration-500 ease-linear ${
            bevMenu ? "top-0" : "top-[3000px]"
          }`}
        >
          <div className="flex items-center justify-center py-4 bg-bgMenuColor">
            <div>
              <h1 className="text-3xl text-white font-roboto">
                Beverages Menu
              </h1>
            </div>
            <div className="absolute p-2 text-4xl text-white right-2 hover:text-black hover:cursor-pointer">
              <ion-icon
                name="close-circle-sharp"
                onClick={bevMenuHandler}
              ></ion-icon>
            </div>
          </div>
          <div className="px-2 py-2 font-nunito">
            <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
              We have your favorite mixed drinks!
            </h1>
          </div>
          <div className="py-3 bg-orange ">
            <div className="px-2">
              <h1 className="flex items-center justify-center text-3xl font-semibold font-arimo md:text-3xl">
                Delicious Margaritas
              </h1>
              <p className="flex items-center justify-center text-lg font-nunito">
                Lime - Frozen or on the rocks
              </p>
              <p className="flex items-center justify-center text-lg font-nunito">
                Additional Flavors - frozen only
              </p>
            </div>
            <div className="px-2 ">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Regular
              </h1>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Lime</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $5.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">
                  Additional Flavors
                </h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $6.99
              </div>
            </div>
            <div className="px-2 ">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Jumbo
              </h1>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Lime</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $10.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">
                  Additional Flavors
                </h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $11.99
              </div>
            </div>
            <div className="px-2 pt-2">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Skinny Margarita
              </h1>
              <p className="flex items-center justify-center text-lg font-nunito md:text-lg">
                On the rocks only.
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Regular</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $8.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Jumbo</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $14.99
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center font-nunito text-red md:text-lg">
                Top shelf
              </p>
              <p className="flex items-center justify-center font-nunito text-red md:text-lg">
                Price varies depending
              </p>
              <p className="flex items-center justify-center font-nunito text-red md:text-lg">
                on choice of Tequila
              </p>
            </div>
            <div className="px-2 pt-10 ">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Texas Margarita
              </h1>
              <p className="flex items-center justify-center font-nunito md:text-lg">
                On the rocks only.
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Regular</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $6.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Jumbo</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $13.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Margarona</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $13.99
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Jumbo Margarita and coronita.
              </p>
            </div>
            <div className="px-2 ">
              <h1 className="flex items-center justify-center font-nunito md:text-lg">
                Margaritas Especiales
              </h1>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Regular</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $6.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Jumbo</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $13.99
              </div>
            </div>
          </div>
          <div className="py-3 font-nunito">
            <div className="px-2 py-2">
              <h1 className="flex items-center justify-center text-3xl font-semibold font-arimo md:text-3xl">
                Tequila Shooters
              </h1>
            </div>
            <div className="flex justify-between px-2 bg-tan md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Cazadores</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Don Julio</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $9.00
              </div>
            </div>
            <div className="flex justify-between px-2 bg-tan md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Patron</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $9.00
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Herradura</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
            <div className="flex justify-between px-2 bg-tan md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Cabo Wabo</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Jimador</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
            <div className="flex justify-between px-2 bg-tan md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Jose Cuervo</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">1800</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
            <div className="flex justify-between px-2 bg-tan md:px-16">
              <div className="flex">
                <p className="text-xl font-nunito md:text-3xl">Hornitos</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $7.00
              </div>
            </div>
          </div>
          <div className="py-3 bg-orange font-nunito">
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-semibold font-arimo md:text-3xl">
                  Mexican Beer
                </h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $4.50
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Corona - Corona Light
              </p>
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Dos Equis - Dos Equis Lager
              </p>
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Negra Modelo
              </p>
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Modelo Especial - Victoria
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-semibold font-arimo md:text-3xl">
                  Domestic Beer
                </h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $3.50
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Michelob Ultra
              </p>
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Budweiser - Bud Light
              </p>
              <p className="flex items-center justify-center font-nunito md:text-lg">
                Coors Light - Miller Lite
              </p>
            </div>
            <div className="px-2 pt-10">
              <h1 className="flex items-center justify-center pt-4 text-3xl font-semibold font-arimo">
                Draft Beer
              </h1>
              <p className="flex items-center justify-center text-xl font-nunito md:text-3xl">
                Bud Light or Michelob Ultra
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">Pitcher</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $10.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl font-nunito md:text-3xl">34 oz. Mug</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $6.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">17 oz. Mug</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $4.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">12 oz. Mug</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $2.99
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center text-xl md:text-3xl">
                Dos Equis
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Pitcher</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$12.99</div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">34 oz. Mug</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$7.99</div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">17 oz. Mug</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$5.99</div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">12 oz. Mug</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$3.99</div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center md:text-xl">
                Imported Beer
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Heineken</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl font-nunito">
                $4.50
              </div>
            </div>
          </div>
          <div className="py-3 font-nunito">
            <div className="px-2 py-2">
              <p className="flex items-center justify-center text-3xl font-semibold font-arimo">
                Specialty Drinks
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">From</h1>
              </div>
              <div className="text-xl md:text-3xl">
                <span className="font-extrabold font-nunito">$6.50</span> to{" "}
                <span className="font-extrabold font-nunito">$9.99</span>
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Long Island Ice Tea</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $9.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Texas Hurricane</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $9.99
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center text-red md:text-lg">
                (Please ask waiter before ordering)
              </p>
            </div>
            <div className="px-2 ">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Daiquiris
              </h1>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Regular</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $6.99
              </div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Jumbo</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $11.99
              </div>
            </div>
            <div className="px-2 ">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Mixed Drinks
              </h1>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">House, single liquor</h1>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $6.50
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center text-red md:text-lg">
                Top shelf
              </p>
              <p className="flex items-center justify-center text-red md:text-lg">
                Price varies depending
              </p>
              <p className="flex items-center justify-center text-red md:text-lg">
                on choice of Tequila
              </p>
            </div>
            <div className="px-2 pt-4 pb-2">
              <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
                Wines
              </h1>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center md:text-lg">
                Burgundy - Sangria - Chardonnay
              </p>
              <p className="flex items-center justify-center md:text-lg">
                Lambrusco - Chablis - Pinot Grigio
              </p>
              <p className="flex items-center justify-center md:text-lg">
                White Zinfandel - Cabernet
              </p>
            </div>
          </div>
          <div className="py-3 bg-orange font-nunito">
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Soft Drinks</h1>
                <p className="md:text-xl md:pl-2">(from the fountain)</p>
              </div>
              <div className="text-xl font-extrabold font-nunito md:text-3xl">
                $2.50
              </div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center md:text-lg">
                Coke - Diet Coke - Sprite
              </p>
              <p className="flex items-center justify-center md:text-lg">
                Mr. Pibb - Pink Lemonade
              </p>
              <p className="flex items-center justify-center md:text-lg">
                Coffee - Iced Tea
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Bottled Soft Drinks</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$2.99</div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center md:text-lg">
                Root Beer - Jarritos - Tamarindo
              </p>
              <p className="flex items-center justify-center md:text-lg">
                Piña - Sangria - Mandarina
              </p>
              <p className="flex items-center justify-center md:text-lg">
                Toronja - Manzanita
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Juice</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$2.99</div>
            </div>
            <div className="px-2 ">
              <p className="flex items-center justify-center md:text-lg">
                Orange - Cranberry
              </p>
              <p className="flex items-center justify-center md:text-lg">
                Apple - Pineapple - Milk
              </p>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Agua de Horchata</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$3.00</div>
            </div>
            <div className="px-2 ">
              <h1 className="flex items-center justify-center md:text-lg">
                Non-Alcoholic Drinks
              </h1>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Regular</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$5.99</div>
            </div>
            <div className="flex justify-between px-2 md:px-16">
              <div className="flex">
                <h1 className="text-xl md:text-3xl">Jumbo</h1>
              </div>
              <div className="text-xl font-extrabold md:text-3xl">$7.99</div>
            </div>
          </div>
          {bevMenu && (
            <div className="bottom-0 px-1 py-2">
              <button
                onClick={bevMenuHandler}
                className={`w-full py-2 text-3xl md:text-4xl font-bold transition-all duration-500 ease-in border-none rounded font-dosis bg-darkOrange hover:bg-darkRed hover:text-white ${
                  bevMenu
                    ? "bg-darkRed text-white hover:text-[#000] hover:bg-white"
                    : ""
                }`}
              >
                Close Beverages Menu
              </button>
            </div>
          )}
        </div>
      </div> */}
      <div className="px-2 pb-14 font-outfit">
        <h1 className="py-2 text-xl font-light text-center md:text-3xl">
          Many thanks for your order. We hope you enjoy your meal. Please return
          soon!
        </h1>
        <h1 className="py-1 text-xl text-center text-red md:text-3xl">
          We reserve the right to limit alcohol consumption.
        </h1>
        <h1 className="py-1 text-xl text-center text-red md:text-3xl">
          Sorry - we are not responsible for articles left behind.
        </h1>
      </div>
    </div>
  );
};

export default Home;
