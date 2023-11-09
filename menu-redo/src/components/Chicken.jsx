import React from "react";

const Chicken = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Pollo con Crema</p>
          </div>
          <div className="text-xl md:text-3xl">$14.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Grilled chicken breast sauteed in our delicious cream sauce with
            onions and bell peppers. Served with rice and refried beans.
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
            Grilled chicken breast topped with queso fundido con chorizo. Served
            with rice, guacamole salad, and flour tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Pollo al Pastor</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Chicken breast, onions, pineapple, and topped with cheese dip.
            Served with rice, lettuce, tomato, and sour cream.
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
            Grilled chicken fillet covered in red sauce. Served with rice,
            lettuce, guacamole, and flour tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Mole Poblano</p>
          </div>
          <div className="text-xl md:text-3xl">$14.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Chunks of chicken with red mole sauce. Served with rice and beans.
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
            Grilled chicken with rice, topped with cheese dip. Served with flour
            tortillas.
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

export default Chicken;
