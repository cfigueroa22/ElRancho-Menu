import React from "react";

const Combo = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
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
          <div className="flex-1 text-center md:text-3xl">Chile Relleno</div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex-1 text-center md:text-3xl">Tostada</div>
          <div className="flex-1 text-center md:text-3xl">Enchilada</div>
          <div className="flex-1 text-center md:text-3xl">Rice</div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex-1 text-center md:text-3xl">Beans</div>
          <div className="flex-1 text-center md:text-3xl">Taco</div>
          <div className="flex-1 text-center md:text-3xl">Tamale</div>
        </div>
      </div>

      <h1 className="flex items-center justify-center px-2 py-6 font-extrabold text-center font-nunito md:text-lg">
        ANY SUBSTITUTIONS OF CHICKEN, CHEESE, OR BEEF IS 0.25&#162; EXTRA.
      </h1>

      <div className="flex items-center justify-center px-2 py-4 font-extrabold text-center font-nunito md:text-lg">
        <h1>EXTRA $1.00 CHARGE IF YOU WOULD LIKE TWO OF THE SAME ITEM.</h1>
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

export default Combo;
