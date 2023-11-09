import React from "react";

const Desserts = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 bg-lightGray">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Fried Ice Cream</p>
          </div>
          <div className="text-xl md:text-3xl">$4.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Coated vanilla ice cream quickly fried in a tortilla shell served
            with honey and chocolate with whipped cream and a cherry on top.
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
            Fried pieces of flour tortillas with cinnamon sugar. Served with
            honey.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray">
        <div className="flex justify-between px-2 font-semibold font-arimo">
          <div className="flex">
            <p className="text-xl md:text-3xl">Sopapillas con Nieve</p>
          </div>
          <div className="text-xl md:text-3xl">$4.99</div>
        </div>
        <div className="px-2 font-nunito md:text-lg">
          <p>
            Fried pieces of flour tortillas with cinnamon sugar. Served with
            honey and a scoop of vanilla ice cream.
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
      <div className="py-3 bg-lightGray ">
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
            Three churros dusted with cinnamon sugar and a scoop of vanilla ice
            cream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
