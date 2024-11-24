import React from "react";

export default function Banner(){
    return(
    <div className="relative overflow-hidden bg-gradient-to-r from-amber-950 to-amber-950 font-sans px-6 py-12 mb-7">

  <div className="absolute inset-0 opacity-40">
    <img src="/banner.jpeg" alt="delicious coffee bar banner"
    className="w-full h-full object-cover" />
    

  </div>

  <div className="relative z-10 container mx-auto flex flex-col justify-center items-center">
    <h2 className="text-white sm:text-5xl font-bold mb-4"> Discover Our Menu </h2>

    <p className="text-white text-lg text-center mb-6 max-w-xl">
    Experience the rich taste of freshly brewed coffee — Shop now and enjoy exclusive discounts!
    </p>

    <button type="button" className="bg-amber-200 text-amber-950 text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white transition duration-300">
    Exciting coffee deals drop at 12 PM — Don’t miss out!
    </button>

  </div>
    </div>
    )
}