import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-amber-950">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                
                {/* burger logo */}
                <GiHamburgerMenu className="w-6 h-6 text-amber-200 hover:text-white" />

                {/* {search icon} */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl  py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search"
                  />

                  <FaSearch className="w-5 h-5 text-amber-950 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className=" w-5 h-5 text-amber-200 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  {" "}
                  Order Now and Get it with
                  <span className="text-amber-200"> 10 minutes!</span>
                </p>
              </div>

              {/* {cart icon} */}
              <div className="flex items-center justify-end gap-2">
                <FaShoppingCart className="p-1 w-8 h-8 rounded-full ring-2 relative ring-white hover:ring-black text-amber-200" />

                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white hover:text-amber-200"
                  src="https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_640.jpg"
                  alt="user avtar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
