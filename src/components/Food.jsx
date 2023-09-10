import React, { useState } from "react";
import { data } from "../components/data/data";

export const Food = () => {
  console.log(data);

  const [foods, setFoods] = useState(data);

  // filter type burgers

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-500 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/* filter row  */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type  */}

        <div className="">
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              Burguers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter price  */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full ">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-2 mr-2 rounded-lg border"
            >
              $$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => {
          return (
            <div className="border shadow-lg hover:scale-105 duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg "
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name} </p>
                <p className="">
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
