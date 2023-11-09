import React from "react";

const Tortas = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl "
    >
      <div className="px-2 font-nunito">
        <h1 className="flex items-center justify-center py-4 text-3xl font-bold text-center ">
          The BEST Mexican sandwich you&apos;ll ever tried!
        </h1>
        <h1 className="flex items-center justify-center py-4 text-lg text-center md:text-lg">
          All Tortas include tomato, onion, avocado, and we add our special
          recipe Chipotle sauce or jalapeños. We grill our bread with a light
          touch of mayo.
        </h1>
        <h1 className="flex items-center justify-center py-2 text-lg font-semibold text-center">
          Choose your favorite &quot;Torta&quot; from below!
        </h1>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">La Cubana</p>
          </div>
          <div className="text-xl md:text-3xl">$14.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            A unique combination of meats; steak, pork, ham, and bacon, then
            topped with fried egg, cheese, and slices of jalapeños.
          </p>
        </div>
      </div>
      <div className="py-3 ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Carne Asada (Grilled Steak)</p>
          </div>
          <div className="text-xl md:text-3xl">$13.99</div>
        </div>
      </div>
      <div className="py-3 bg-lightGray">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Carnitas (Fried Pork Tips)</p>
          </div>
          <div className="text-xl md:text-3xl">$13.99</div>
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

export default Tortas;
