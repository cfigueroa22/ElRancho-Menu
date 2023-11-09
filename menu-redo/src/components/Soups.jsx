import React from "react";

const Soups = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 font-semibold bg-lightGray font-arimo">
        <div className="flex justify-between px-2">
          <div className="flex">
            <p className="text-xl md:text-3xl">Sopa de Pollo</p>
          </div>
          <div className="text-xl md:text-3xl">$9.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Chicken soup cooked with fresh chicken, onions, cilantro, and
            tomato. With rice and fresh avocado added. Served with Pico de Gallo
            and lime.
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
            vegetables. With fresh avocado added. Served with Pico de Gallo and
            lime.
          </p>
        </div>
      </div>
      <div className="px-2 py-2 font-nunito">
        <p className="text-xs text-red md:text-sm lg:text-base">
          Consuming raw or undercooked meats and seafood can increase your risk
          of food borne illness.
        </p>
      </div>
    </div>
  );
};

export default Soups;
