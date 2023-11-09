import React from "react";

const Steak = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Steak El Rancho</p>
          </div>
          <div className="text-xl md:text-3xl">$16.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Grilled Ribeye server with shrimp, mushrooms, onions, and topped
            with cheese dip. Served with rice, lettuce, tomato, and sour cream.
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
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Steak a La Mexicana</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Grilled Ribeye steak cooked with onions, tomatoes, and bell peppers.
            Served with rice, guacamole salad, and tortillas.
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
            Ribeye steak cooked with our special ranchero sauce. Served with
            rice, beans, and tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Carne Asada</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Grilled thin steak, covered with sauteed onions. Served with rice,
            lettuce, tomatoes, guacamole, and flour tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">T-Bone 10 oz. Ranchero</p>
          </div>
          <div className="text-xl">$16.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            T-Bone steak cooked in our special ranchero sauce. Served with rice,
            beans, and flour tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">T-Bone 10 oz. a La Mexicana</p>
          </div>
          <div className="text-xl md:text-3xl">$16.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Grilled T-Bone cooked with onions, tomatoes, bells peppers. Served
            with rice, guacamole salad, and tortillas.
          </p>
        </div>
      </div>
      <div className="py-3 ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">T-Bone 10 oz. con Papas</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>Grilled T-Bone steak. Served with French Fries.</p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
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
            Grilled T-Bone served with shrimp, mushrooms, onions, and topped
            with cheese dip. Served with rice, lettuce, tomato, and sour cream.
          </p>
        </div>
      </div>
      <div className="py-3">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">T-Bone 10 oz. Seafood Combo</p>
          </div>
          <div className="text-xl md:text-3xl">$19.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Grilled T-Bone covered with sauteed scallops, shrimp, vegetables,
            and chipotle-garlic sauce. Served with rice.
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

export default Steak;
