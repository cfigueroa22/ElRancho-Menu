import React from "react";

const Veg = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
      <div className="py-3 bg-lightGray font-nunito">
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
      <div className="py-3 bg-lightGray font-nunito">
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
      <div className="py-3 bg-lightGray font-nunito">
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
          <p>Mixed vegetables, onions, tomatoes, bell pepper, and mushrooms.</p>
        </div>
      </div>
      <div className="py-3 bg-lightGray font-nunito">
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
            Two soft shell flour tortillas stuffed with spinach. Topped with
            lettuce, tomato, and sour cream.
          </p>
        </div>
      </div>
      <div className="py-3 bg-lightGray font-nunito">
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
    </div>
  );
};

export default Veg;
