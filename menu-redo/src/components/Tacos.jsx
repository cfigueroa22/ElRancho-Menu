import React from "react";

const Tacos = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="px-2 py-2 font-nunito">
        <p className="text-center md:text-xl">
          Served with Pico de Gallo, salsa, and beans.
        </p>
      </div>
      <div className="py-3 bg-lightGray ">
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
            Three soft flour tortillas filled with chopped steak, onions, bacon,
            bell pepper, shredded cheese, and pineapple.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray">
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
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Tacos al Pastor</p>
          </div>
          <div className="text-xl md:text-3xl">$13.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Three soft flour tortillas with chopped pork with a special red
            sacue and pineapple.
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
      <div className="px-2 py-2 font-nunito">
        <p className="text-xs text-red md:text-sm lg:text-base">
          Consuming raw or undercooked meats and seafood can increase your risk
          of food borne illness.
        </p>
      </div>
    </div>
  );
};

export default Tacos;
