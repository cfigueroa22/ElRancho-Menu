import React from "react";

const Beverages = () => {
  return (
    <div
      id="menu"
      className="fixed inset-0 z-40 overflow-y-auto transition-all duration-500 ease-linear bg-white top-14 lg:mx-32 drop-shadow-2xl"
    >
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
            <h1 className="text-3xl font-semibold font-arimo ">Mexican Beer</h1>
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
  );
};

export default Beverages;
