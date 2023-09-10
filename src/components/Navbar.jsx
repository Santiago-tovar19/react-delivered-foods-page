import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full p-1 text-[14px] mt-1">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]  ">
        <AiOutlineSearch size={30} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Buscar Comidas"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full px-3">
        <BsFillCartFill size={20} className="mr-2 " /> Cart
      </button>

      {/* mobile menu  */}

      {nav ? (
        <div className="bg-black/80 fixed h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu  */}

      <div
        className={
          nav
            ? `fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300`
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={20}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Ordenes
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favoritos
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Cartera
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Ayudas
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promociones
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Mejores del mes
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invita a un amigo
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
