import React from "react";

const Full = () => {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-in-out bg-white top-14 lg:mx-32 drop-shadow-xl ">
      {/* Lunch */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Lunch Menu
          </h1>
        </div>
        <div className="px-2 py-2 md:py-0">
          <p className="text-center font-nunito md:text-xl md:py-4">
            Lunch items are available Monday-Friday ONLY.
          </p>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-arimo">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3">No. 1</p>
              <p className="">Speedy Gonzales</p>
            </div>
            <div className="text-xl font-semibold md:text-3xl">$6.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>One taco, one enchilada, choice of rice or beans.</p>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 2</p>
              <p className="">Special Lunch</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $7.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>Chile relleno, taco, beans, and guacamole salad.</p>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 3</p>
              <p className="">Special Lunch</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>One beef burrito, rice, and beans.</p>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2 ">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 4</p>
              <p className="">Special Lunch</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>One beef enchilada, rice, and beans.</p>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 5</p>
              <p className="">Special Lunch</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>Chile relleno, rice, and beans.</p>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 6</p>
              <p className="">Special Lunch</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>Burrito, taco, and rice.</p>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 7</p>
              <p className="">Huevos Rancheros</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $9.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>
              (Ranch style eggs) Two eggs, Mexican sauce on top, rice, beans,
              and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 8</p>
              <p className="">Lunch Fajitas</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $10.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>
              Chicken or beef fajitas served with beans, rice, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 9</p>
              <p className="">Burrito Mexicano</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $8.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>
              Burrito made with chorizo (Mexican sausage) and egg, topped with
              melted cheese, choice of rice or beans.
            </p>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No. 10</p>
              <p className="">Lunch Chimichanga</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $7.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>One chimichanga, beef or chicken. Served with rice or beans.</p>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-3 ">No.11</p>
              <p className="">Huevos con Chorizo</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $10.99
            </div>
          </div>
          <div className="px-2 md:text-lg">
            <p>
              Two scrambled eggs with Mexican sausage served with rice, beans,
              and tortillas.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Appetizers */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Appetizers
          </h1>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Nachos with Chicken</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $8.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Nachos with Cheese</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Nachos with Beans</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $8.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Nachos with Beef</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $8.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Nachos with Beans and Beef</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $9.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Cheese Dip</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $3.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Quesadilla (cheese)</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $3.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Quesadilla with Chicken or Beef</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $5.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Quesadilla (Chicken or Beef) & Cheese Dip</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $7.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Guacamole Dip</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $3.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Cheese Sticks (6)</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $5.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Guacamole Salad</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $3.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Cheese Dip (Large)</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $7.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Queso Fundido con Chorizo</p>
            </div>
            <div className="pl-1 text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Queso Fundido con Carne</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Guacamole Dip (Large)</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $7.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">French Fries</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $3.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">French Fries with Melted Cheese</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Papas Ala Mexicana</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $10.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Quesadilla Fajita, Chicken or Beef</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $7.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="">Fresh Made Guacamole</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $8.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Chips and Salsa To Go</p>
            </div>
            <div>
              <p className=" md:text-3xl">(Small) $2.99</p>
              <p className=" md:text-3xl">(Large) $6.99</p>
            </div>
          </div>
        </div>
        <div className="flex px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Kids */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Kids Menu
          </h1>
        </div>
        <div className="px-2 font-nunito md:py-3">
          <p className="font-bold text-center md:text-lg">
            Dine-in Only. Served to children under 10 years old! Includes soft
            drink, add juice or milk.
          </p>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1">1.</p>
              <p className="">Cheese Sticks and Fries</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">2.</p>
              <p className="">Taco and rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">3.</p>
              <p className="">Enchilada and rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">4.</p>
              <p className="">One Quesadilla and rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">5.</p>
              <p className="">One Burrito and rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">6.</p>
              <p className="">One Soft Shell Taco and rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">7.</p>
              <p className="">One Hot Dog with French Fries</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">8.</p>
              <p className="">One Child&apos;s Hamburger with French Fries</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">9.</p>
              <p className="">Chicken Tenders and French Fries</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>

        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">10.</p>
              <p className="">Cheese Sticks and rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">11.</p>
              <p className="">Cheese Pizza with French Fries</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="flex justify-between px-2">
            <div className="flex text-xl font-semibold font-arimo md:text-3xl">
              <p className="pr-1 ">11.</p>
              <p className="">French Fries with rice</p>
            </div>
            <div className="text-xl font-semibold font-arimo md:text-3xl">
              $6.99
            </div>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Vegetarian */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Vegetarian Plates
          </h1>
        </div>
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
            <p>
              Mixed vegetables, onions, tomatoes, bell pepper, and mushrooms.
            </p>
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
      {/* A La Carte */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            A La Carte
          </h1>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Cheese Burrito</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $5.99</p>
              <p className=" md:text-3xl">(2) $10.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Spinach Burrito</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $5.99</p>
              <p className=" md:text-3xl">(2) $10.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Enchiladas</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.50</p>
              <p className=" md:text-3xl">(3) $9.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Beef Tostada</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.99</p>
              <p className=" md:text-3xl">(2) $7.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Beef Burrito</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $5.75</p>
              <p className=" md:text-3xl">(2) $10.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Chicken Burrito</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $5.99</p>
              <p className=" md:text-3xl">(2) $11.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Bean Burrito</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $5.50</p>
              <p className=" md:text-3xl">(2) $9.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Chalupas</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.99</p>
              <p className=" md:text-3xl">(2) $7.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Chile Rellenos</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.99</p>
              <p className=" md:text-3xl">(2) $7.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Cheese Pizza</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Cheese Enchiladas</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.50</p>
              <p className=" md:text-3xl">(3) $9.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Chicken Enchiladas</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.50</p>
              <p className=" md:text-3xl">(3) $9.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Tacos (Beef)</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $2.75</p>
              <p className=" md:text-3xl">(3) $7.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Tacos (Chicken)</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $2.75</p>
              <p className=" md:text-3xl">(3) $7.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className=" md:text-3xl">Tamales</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $3.99</p>
              <p className=" md:text-3xl">(3) $10.99</p>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 text-xl font-semibold font-arimo">
            <div className="flex items-center">
              <p className="md:text-3xl">Soft Shell Beef Tacos</p>
            </div>
            <div>
              <p className=" md:text-3xl">(1) $2.99</p>
              <p className=" md:text-3xl">(3) $8.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex items-center">
              <p className="text-xl md:text-3xl">Soft Shell Chicken Tacos</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl">(1) $2.99</p>
              <p className="text-xl md:text-3xl">(3) $8.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex items-center">
              <p className="text-xl md:text-3xl">
                Chimichanga (Chicken or Beef)
              </p>
            </div>
            <div>
              <p className="text-xl md:text-3xl">(1) $6.00</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex items-center">
              <p className="text-xl md:text-3xl">Chimichanga (Shrimp)</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl">(1) $6.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex items-center">
              <p className="text-xl md:text-3xl">Chile Poblano</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl">(1) $4.99</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex items-center">
              <p className="text-xl md:text-3xl">
                Side of Rice with Cheese sauce
              </p>
            </div>
            <div>
              <p className="text-xl md:text-3xl">$6.99</p>
            </div>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>

      {/* Steak */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Steak
          </h1>
        </div>
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
              with cheese dip. Served with rice, lettuce, tomato, and sour
              cream.
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
              Grilled Ribeye steak cooked with onions, tomatoes, and bell
              peppers. Served with rice, guacamole salad, and tortillas.
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
            <div className="text-xl md:text-3xl">$16.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              T-Bone steak cooked in our special ranchero sauce. Served with
              rice, beans, and flour tortillas.
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
              with cheese dip. Served with rice, lettuce, tomato, and sour
              cream.
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
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Seafood */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Seafood
          </h1>
        </div>
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
              Shrimp marinated in our special sauce and sauteed with bell
              peppers, mushrooms, onions, and tomato. Served with rice and
              toast.
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
              Two flour tortillas stuffed with shrimp, scallops, and white
              salsa. Served with lettuce, tomato, and sour cream.
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
            <div className="text-xl md:text-3xl">$14.99</div>
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
            <div className="text-xl md:text-3xl">$16.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Grilled chicken and grilled shrimp with rice topped with Cheese
              Dip served with flour tortillas.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Tacos */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Tacos
          </h1>
        </div>
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
              Three soft flour tortillas filled with chopped steak, onions,
              bacon, bell pepper, shredded cheese, and pineapple.
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
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Fajitas */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Fajitas
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center px-2 font-nunito">
          <p className="text-red md:text-xl md:font-bold">
            SERVED ON A HOT SKILLET
          </p>
          <p className="py-2 text-center md:text-xl">
            All fajitas served with fried beans, lettuce, guacamole, and flour
            tortillas.
          </p>
          <p className="py-2 text-center md:text-xl">
            All fajitas are cooked with onions, tomato, and bell pepper.
          </p>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Beef or Chicken Fajitas</p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Beef or Chicken Fajitas for two (2)
              </p>
            </div>
            <div className="text-xl md:text-3xl">$25.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Chicken or beef cooked with onions, tomato, and bell pepper.
              Served with beans, lettuce, tomato, guacamole, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Chicken And Beef Fajitas</p>
            </div>
            <div className="text-xl md:text-3xl">$15.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Chicken And Beef Fajitas for two (2)
              </p>
            </div>
            <div className="text-xl md:text-3xl">$26.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Chicken and beef cooked with onions, tomato, and bell pepper.
              Served with beans, lettuce, tomato, guacamole, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Texas Fajitas</p>
            </div>
            <div className="text-xl md:text-3xl">$16.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Texas Fajitas for two (2)</p>
            </div>
            <div className="text-xl md:text-3xl">$27.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              A combination of beef, chicken, and shrimp cooked with onions,
              tomato, and bell pepper. Served with beans, lettuce, tomato,
              guacamole, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">El Mariachi</p>
            </div>
            <div className="text-xl md:text-3xl">$17.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">El Mariachi for two (2)</p>
            </div>
            <div className="text-xl md:text-3xl">$28.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Beef, chicken, shrimp, and chorizo cooked with onions, tomato, and
              bell pepper. Served with beans, lettuce, tomato, guacamole, and
              tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Fajitas El Rancho</p>
            </div>
            <div className="text-xl md:text-3xl">$18.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Fajitas El Rancho for two (2)
              </p>
            </div>
            <div className="text-xl md:text-3xl">$29.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Beef, chicken, shrimp, chorizo, and pork tips cooked with onions,
              tomato, and bell pepper. Served with beans, lettuce, tomato,
              guacamole, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Shrimp Fajitas</p>
            </div>
            <div className="text-xl md:text-3xl">$18.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Shrimp Fajitas for two (2)</p>
            </div>
            <div className="text-xl md:text-3xl">$29.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Shrimp cooked with onions, tomato, and bell peppers. Served with
              beans, lettuce, tomato, guacamole, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Fajita Seafood</p>
            </div>
            <div className="text-xl md:text-3xl">$18.99</div>
          </div>
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Fajita Seafood for two (2)</p>
            </div>
            <div className="text-xl md:text-3xl">$30.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Scallops and shrimp cooked with onions, tomato, and bell peppers.
              Served with beans, lettuce, tomato, guacamole, and tortillas.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Combos */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Combinations
          </h1>
        </div>
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
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Tortas */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Tortas
          </h1>
        </div>
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
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Sides */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Sides
          </h1>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Grilled Beef</p>
            </div>
            <div className="text-xl md:text-3xl">$7.99</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Grilled Chicken</p>
            </div>
            <div className="text-xl md:text-3xl">$7.99</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Grilled Shrimp</p>
            </div>
            <div className="text-xl md:text-3xl">$9.99</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Pico de Gallo</p>
            </div>
            <div className="text-xl md:text-3xl">$2.00</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Lettuce</p>
            </div>
            <div className="text-xl md:text-3xl">$1.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Tomatoes</p>
            </div>
            <div className="text-xl md:text-3xl">$1.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Onions</p>
            </div>
            <div className="text-xl md:text-3xl">$1.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Flour Tortillas (3)</p>
            </div>
            <div className="text-xl md:text-3xl">$1.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Corn Tortillas (3)</p>
            </div>
            <div className="text-xl md:text-3xl">$1.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Bean Dip</p>
            </div>
            <div className="text-xl md:text-3xl">$5.99</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Sour Cream</p>
            </div>
            <div className="text-xl md:text-3xl">$2.00</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Beans</p>
            </div>
            <div className="text-xl md:text-3xl">$3.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Rice</p>
            </div>
            <div className="text-xl md:text-3xl">$3.50</div>
          </div>
        </div>
        <div className="py-3 font-semibold font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Shredded Cheese</p>
            </div>
            <div className="text-xl md:text-3xl">$2.00</div>
          </div>
        </div>
        <div className="py-3 font-semibold bg-lightGray font-arimo">
          <div className="flex justify-between px-2">
            <div className="flex">
              <p className="text-xl md:text-3xl">Jalapeños</p>
            </div>
            <div className="text-xl md:text-3xl">$1.50</div>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Pork */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Pork
          </h1>
        </div>
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
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Chicken */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Chicken
          </h1>
        </div>
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
              Grilled chicken breast topped with queso fundido con chorizo.
              Served with rice, guacamole salad, and flour tortillas.
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
              Grilled chicken with rice, topped with cheese dip. Served with
              flour tortillas.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Dinners */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Specialty Dinners
          </h1>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Huevos Rancheros</p>
            </div>
            <div className="text-xl md:text-3xl">$11.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              (Ranch style eggs) Tow eggs, topped with Mexican sauce. Served
              with rice, refried beans, and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Burrito El Rancho</p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large flour tortilla filled with rice, beans, chorizo, chicken,
              and beef. Topped with Pico de Gallo and melted cheese.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Burrito Grande</p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large flour tortilla filled with strips of beef or chicken,
              onions, bell peppers, tomatoes, and topped with melted cheese.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Burrito Ranchero</p>
            </div>
            <div className="text-xl md:text-3xl">$7.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Made with chunks of beef or pork, topped with lettuce, tomatoes,
              and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Special Burrito</p>
            </div>
            <div className="text-xl md:text-3xl">$7.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              One beef burrito topped with cheese, lettuce, sour cream, and
              tomatoes.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Steak Burrito</p>
            </div>
            <div className="text-xl md:text-3xl">$8.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Flour tortilla filled with steak cooked with salsa the topped with
              nacho cheese.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Burritos Chicken and Creamed Spinach
              </p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two flour tortillas stuffed with chicken and creamed spinach then
              topped with lettuce, tomato, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Burritos Fundidos</p>
            </div>
            <div className="text-xl md:text-3xl">$11.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two rolled flour tortillas stuffed with chicken, beef, or pork.
              Covered with sour cream and shredded cheese then baked!
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">California Burrito</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Flour tortilla filled with chicken or steak (cooked with salsa),
              beans, rice, Pico de Gallo, and covered with melted cheese.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Burritos, Shrimp, Spinach, and Cheese
              </p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two flour tortillas stuffed with shrimp and spinach, covered with
              melted cheese. Topped with lettuce, tomato, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Super Burritos</p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two flour tortillas filled with chunks of pork, covered with
              lettuce, guacamole, and tomatoes.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Chilaquiles</p>
            </div>
            <div className="text-xl md:text-3xl">$10.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Corn tortilla chips cooked in sauce with chunks of beef or chicken
              and topped with extra cheese, rice, and beans.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Chiles Poblanos</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Poblano Chile peppers stuffed with cheese. Served with rice and
              beans in a special sauce and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Chimichangas</p>
            </div>
            <div className="text-xl md:text-3xl">$11.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two flour tortillas rolled up and stuffed with shredded beef,
              pork, or chicken. Covered with melted cheese (served fried or
              soft).
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Super Chimichangas</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two flour tortillas rolled up and stuffed with beef, pork, or
              chicken. Covered with melted cheese and topped with lettuce,
              tomato, sour cream, and guacamole. (served fried or soft)
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas El Rancho</p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Five enchiladas; one chicken, one beef, one cheese, one beans, and
              one shredded beef. Topped with lettuce, tomatoes, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas Poblanas</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Three chicken or beef enchiladas covered with red mole sauce and
              shredded cheese. Served with rice.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas Rancheras</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two cheese enchiladas topped with pork, cooked with tomatoes,
              onions, bell peppers, and enchilada sauce. Served with guacamole
              and rice.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas Verdes</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Three chicken enchiladas covered with our special tomatillo salsa
              and covered with shredded cheese. Served with rice and refried
              beans.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Quesadilla Grande Texana</p>
            </div>
            <div className="text-xl md:text-3xl">$16.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large flour tortilla stuffed with cheese, chicken, steak, and
              shrimp grilled with onions, green peppers, and tomatoes. With
              lettuce, sour cream, and guacamole.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">El Sombrero (Grande)</p>
            </div>
            <div className="text-xl md:text-3xl">$20.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Our delicious marinated tender skirt steak, a small side dish of
              sliced shrimp cooked with mushrooms and cheese with a special mild
              sauce. Shrimp cooked with guojillo peppers.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Chicken Tenders Dinner</p>
            </div>
            <div className="text-xl md:text-3xl">$8.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>Five chicken tenders and french fries.</p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Chicken Wings (12)</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Served covered with our special wing sauce and celery sticks.
              Ranch dressing or White Salsa available upon request.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas Suizas</p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Three enchiladas with white chicken meat, cheese dip on top, and
              white salsa. Served with rice and guacamole salad.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas With Rice</p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>Three chicken or beef enchiladas with rice and cheese sauce.</p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Fajita Salad (Beef or Chicken)
              </p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>Lettuce, tomato, onion, bell pepper, and shredded cheese.</p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Fajita Salad (Shrimp)</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>Lettuce, tomato, onion, bell pepper, and shredded cheese.</p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">La Changa</p>
            </div>
            <div className="text-xl md:text-3xl">$10.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              One flour tortilla filled with beef or chicken, covered with hot
              melted cheese. Served with rice and beans.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Los Amigos</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Poblano pepper stuffed with cheese and pork burrito. Served with
              rice and beans.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Mexican Stew</p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Choice of chopped steak or chicken, green pepper, onions,
              tomatoes, and spices simmered together. Served with rice, beans,
              and tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">
                Mexico&apos;s Famous Chile-Colorado
              </p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Beef chunks with El Mariachi Red Chile Sauce. Served with rice,
              beans, and flour tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Nachos al Carbon</p>
            </div>
            <div className="text-xl md:text-3xl">$14.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Cheese nachos with assorted beef or chicken, cooked with onions,
              bell peppers, and tomatoes.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Quesadilla Dinner</p>
            </div>
            <div className="text-xl md:text-3xl">$11.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>Chicken or beef quesadilla. Served with beans and rice.</p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Quesadilla Rellena</p>
            </div>
            <div className="text-xl md:text-3xl">$10.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              A flour tortilla grilled and stuffed with your choice of chicken,
              chorizo, mushrooms, beef, or spinach. Served with guacamole salad,
              topped with sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Quesadilla Grande</p>
            </div>
            <div className="text-xl md:text-3xl">$15.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large flour tortilla stuffed with cheese, grilled chicken or beef
              cooked with tomatoes, onions, and bell peppers. Served with
              lettuce, guacamole, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Quesadilla Grande Shrimp</p>
            </div>
            <div className="text-xl md:text-3xl">$16.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large flour tortilla stuffed with cheese and grilled shrimp cooked
              with tomatoes, onions, and bell peppers. Served with lettuce,
              guacamole, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Seafood Nachos</p>
            </div>
            <div className="text-xl md:text-3xl">$17.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Corn tortilla chips with cheese, topped with shrimp, scallops,
              beans, Pico de Gallo, sour cream, and avocado.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Shrimp Chimichangas</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two flour tortillas rolled up and stuffed with grilled shrimp,
              onions, tomatoes, bell peppers, and covered with melted cheese.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Shrimp Quesadilla Rellena</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              A flour tortilla grilled and stuffed shrimp, onions, tomatoes, and
              bell peppers. Served with lettuce, guacamole, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Special Dinner</p>
            </div>
            <div className="text-xl md:text-3xl">$16.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              One each: Chalupa, chile relleno, beef taco, enchilada, and
              tamale. Served with rice and beans.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Arroz Texano</p>
            </div>
            <div className="text-xl md:text-3xl">$17.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Steak, chicken, and shrimp served with rice, cheese sauce, and
              tortillas.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Nachos Texanos</p>
            </div>
            <div className="text-xl md:text-3xl">$17.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Cheese nachos with assorted toppings of grilled shrimp, chicken,
              beef, onions, tomatoes, and bell peppers.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Taco Salad Fajita</p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large fried flour tortilla shell filled with grilled chicken or
              beef. Cooked with onions, tomatoes, and bell peppers. Covered with
              lettuce, sour cream, and cheese.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Taco Fajita Salad Shrimp</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large fried flour tortilla shell filled with grilled shrimp.
              Cooked with onions, tomatoes, and bell peppers. Covered with
              lettuce, sour cream, and cheese.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Taco Salad</p>
            </div>
            <div className="text-xl md:text-3xl">$9.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Large fried flour tortilla shell filled with chicken or beef with
              lettuce, sour cream, tomatoes, and cheese.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Taquitos Flautas</p>
            </div>
            <div className="text-xl md:text-3xl">$11.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Four rolled corn tortillas stuffed with beef or chicken. Served
              with lettuce, guacamole, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Shrimp Nachos</p>
            </div>
            <div className="text-xl md:text-3xl">$15.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Cheese nachos topped with grilled shrimp, onions, bell peppers,
              and tomatoes.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Burritos Tipicos</p>
            </div>
            <div className="text-xl md:text-3xl">$10.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Two rolled flour tortillas filled with beef and beans, topped with
              nacho cheese sauce.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Enchiladas Tapatias</p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Four enchiladas (one beef, one chicken, one cheese, one bean)
              topped with lettuce, tomatoes, and sour cream.
            </p>
          </div>
        </div>
        <div className="py-3 ">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Yolandas</p>
            </div>
            <div className="text-xl md:text-3xl">$12.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Three chicken enchiladas, topped with lettuce, guacamole, and sour
              cream. Served with rice.
            </p>
          </div>
        </div>
        <div className="py-3 bg-lightGray">
          <div className="flex justify-between px-2 font-semibold font-arimo">
            <div className="flex">
              <p className="text-xl md:text-3xl">Nachos Supreme</p>
            </div>
            <div className="text-xl md:text-3xl">$13.99</div>
          </div>
          <div className="px-2 font-nunito md:text-lg">
            <p>
              Cheese nachos with assorted toppings of ground beef, chopped
              chicken, and beans. All covered with shredded lettuce, tomatoes,
              and sour cream.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Soups */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Soups
          </h1>
        </div>
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
              tomato. With rice and fresh avocado added. Served with Pico de
              Gallo and lime.
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
              vegetables. With fresh avocado added. Served with Pico de Gallo
              and lime.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 font-nunito">
          <p className="text-xs text-red md:text-sm lg:text-base">
            Consuming raw or undercooked meats and seafood can increase your
            risk of food borne illness.
          </p>
        </div>
      </div>
      {/* Desserts */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Desserts
          </h1>
        </div>
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
              Three churros dusted with cinnamon sugar and a scoop of vanilla
              ice cream.
            </p>
          </div>
        </div>
      </div>
      {/* Beverages */}
      <div id="menu">
        <div className="py-6 text-center">
          <h1 className="font-extrabold underline underline-offset-8 text-7xl text-red font-amatic">
            Beverages
          </h1>
        </div>
        <div className="px-2 py-2 font-nunito">
          <h1 className="flex items-center justify-center text-xl font-semibold font-arimo md:text-3xl">
            We have your favorite mixed drinks!
          </h1>
        </div>
        <div className="py-3 bg-lightGray ">
          <div className="px-2">
            <h1 className="flex items-center justify-center text-3xl font-semibold font-arimo md:text-3xl">
              Delicious Margaritas
            </h1>
            <p className="flex items-center justify-center text-lg font-nunito">
              Lime - Frozen or on the rocks
            </p>
            <p className="flex items-center justify-center text-lg font-nunito">
              Additional Flavors - frozen only
            </p>
            <p className="flex items-center justify-center text-lg font-nunito">
              Regular and Jumbo Sizes
            </p>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Lime Margarita</li>
            <li>Skinny Margarita</li>
            <li>Margarona</li>
            <li>Margaritas Especiales</li>
          </div>

          <div className="px-2 ">
            <p className="flex items-center justify-center font-nunito text-red md:text-lg">
              Top shelf
            </p>
            <p className="flex items-center justify-center font-nunito text-red md:text-lg">
              Price varies depending
            </p>
            <p className="flex items-center justify-center font-nunito text-red md:text-lg">
              on choice of Tequila
            </p>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="px-2 py-2">
            <h1 className="flex items-center justify-center text-3xl font-semibold font-arimo md:text-3xl">
              Tequila Shooters
            </h1>
          </div>
          <div className="flex justify-between px-2 bg-lightGray md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Cazadores</li>
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Don Julio</li>
            </div>
          </div>
          <div className="flex justify-between px-2 bg-lightGray md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Patron</li>
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Herradura</li>
            </div>
          </div>
          <div className="flex justify-between px-2 bg-lightGray md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Cabo Wabo</li>
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Jimador</li>
            </div>
          </div>
          <div className="flex justify-between px-2 bg-lightGray md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Jose Cuervo</li>
            </div>
          </div>
          <div className="flex justify-between px-2 md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">1800</li>
            </div>
          </div>
          <div className="flex justify-between px-2 bg-lightGray md:px-16">
            <div className="flex">
              <li className="text-xl font-nunito md:text-3xl">Hornitos</li>
            </div>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex px-2 md:px-16">
            <div className="flex mx-auto text-center">
              <h1 className="text-3xl font-semibold font-arimo ">
                Mexican Beer
              </h1>
            </div>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Corona</li>
            <li>Corona Light</li>
            <li>Dos Equis</li>
            <li>Dos Equis Lager</li>
            <li>Negra Modelo</li>
            <li>Modelo Especial</li>
            <li>Victoria</li>
          </div>
          <div className="flex px-2 pt-4 md:px-16">
            <div className="flex mx-auto text-center">
              <h1 className="text-3xl font-semibold font-arimo ">
                Domestic Beer
              </h1>
            </div>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Michelob Ultra</li>
            <li>Budweiser</li>
            <li>Bud Light</li>
            <li>Coors Light</li>
            <li>Miller Liet</li>
          </div>
          <div className="flex px-2 pt-4 md:px-16">
            <div className="flex mx-auto text-center">
              <h1 className="text-3xl font-semibold font-arimo ">
                Imported Beer
              </h1>
            </div>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Heineken</li>
          </div>
          <div className="px-2 pt-10">
            <h1 className="flex items-center justify-center pt-4 text-3xl font-semibold font-arimo">
              Draft Beer
            </h1>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Bud Light</li>
            <li>Michelob Ultra</li>
            <li>Dos Equis</li>
            <li>Modelo Especial</li>
          </div>
        </div>
        <div className="py-3 font-nunito">
          <div className="px-2 py-2">
            <p className="flex items-center justify-center text-3xl font-semibold font-arimo">
              Specialty Drinks
            </p>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Long Island Iced Tea</li>
            <li>Texas Hurricane</li>
            <li>Mixed Drinks</li>
            <li>Daiquiris</li>
          </div>

          <div className="px-2 ">
            <p className="flex items-center justify-center text-red md:text-lg">
              Top shelf
            </p>
            <p className="flex items-center justify-center text-red md:text-lg">
              Price varies depending
            </p>
            <p className="flex items-center justify-center text-red md:text-lg">
              on choice of Tequila
            </p>
          </div>
          <div className="px-2 ">
            <p className="flex items-center justify-center text-red md:text-lg">
              (Please ask waiter before ordering)
            </p>
          </div>
          <div className="px-2 pt-4 pb-2">
            <h1 className="flex items-center justify-center text-3xl font-semibold font-arimo">
              Wines
            </h1>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Burgundy</li>
            <li>Sangria</li>
            <li>Chardonnay</li>
            <li>Lambrusco</li>
            <li>Chablis</li>
            <li>Pinot Grigio</li>
            <li>White Zinfandel</li>
            <li>Cabernet</li>
          </div>
        </div>
        <div className="py-3 bg-lightGray font-nunito">
          <div className="flex px-2 md:px-16">
            <div className="flex items-center mx-auto text-center">
              <h1 className="text-3xl ">Soft Drinks</h1>
              <p className="md:text-xl md:pl-2"> (from the fountain)</p>
            </div>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Coke</li>
            <li>Diet Coke</li>
            <li>Sprite</li>
            <li>Mr. Pibb</li>
            <li>Pink Lemonade</li>
            <li>Coffee</li>
            <li>Iced Tea</li>
            <li>Agua de Horchata</li>
          </div>

          <div className="flex px-2 md:px-16">
            <div className="flex mx-auto text-center">
              <h1 className="text-3xl">Bottled Soft Drinks</h1>
            </div>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Root Beer</li>
            <li>Jarritos</li>
            <li>Tamarindo</li>
            <li>Piña</li>
            <li>Sangria</li>
            <li>Mandarina</li>
            <li>Toronja</li>
            <li>Manzanita (Sidral)</li>
          </div>

          <div className="flex justify-between px-2 md:px-16">
            <div className="flex mx-auto text-center">
              <h1 className="text-3xl ">Juice</h1>
            </div>
          </div>
          <div className="px-2 py-4 text-xl font-nunito md:text-3xl md:px-16">
            <li>Orange</li>
            <li>Cranberry</li>
            <li>Apple</li>
            <li>Pineapple</li>
            <li>Milk</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Full;
