import React from "react";

const Pork = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 bg-lightGray ">
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
            Pork tips served with rice, beans, guacamole salad, and flour
            tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Burrito Chipotle</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Large flour tortilla filled with pork, rice, beans, and chorizo.
            Topped with melted cheese, chipotle sauce, and corn.
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

export default Pork;
