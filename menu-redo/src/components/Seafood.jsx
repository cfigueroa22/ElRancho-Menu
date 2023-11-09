import React from "react";

const Seafood = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Camarones a la Diabla</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Fresh shrimp marinated in our Diabla sauce (very hot). Served with
            rice, salad, and flour tortillas.
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
            Shrimp marinated in our special sauce and sauteed with bell peppers,
            mushrooms, onions, and tomato. Served with rice and toast.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Camarones al Mojo</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Shrimp sauteed in our special garlic sauce. Served with our house
            salad, rice, and toast.
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
            Shrimp marinated in chipotle sauce and sauteed with mushrooms and
            carrots. Served with Pico de Gallo, corn salad, rice, and toast.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Chimichangas Del Mar</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Two flour tortillas stuffed with shrimp, scallops, and white salsa.
            Served with lettuce, tomato, and sour cream.
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
            Three enchiladas with shrimp and scallops. Topped with cheese dip,
            white salsa, rice, and guacamole salad.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Quesadilla Del Mar</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Scallops and shrimp with tomato, onions, bell pepper, lettuce, and
            sour cream.
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
            Shrimp cooked with onions, bell peppers, and tomatoes then mixed
            with rice.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray ">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Shrimp Cocktail (Grande)</p>
          </div>
          <div className="text-xl md:text-3xl">$15.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Cooked shrimp in a cocktail sauce with chopped onions, tomato,
            cilantro, and avocado. Served with Valentina salsa, saltine
            crackers, and lime.
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
            Grilled chicken and grilled shrimp with rice topped with Cheese Dip
            served with flour tortillas.
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

export default Seafood;
