import React from "react";

// order fullfillment process section
export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10 mb-10">


        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-white p-1.5 flex items-center rounded-full">
              <span className="text-base text-amber-900 font-bold">1</span>
            </div>
            

            <div className="w-full h-1 mx-4 rounded-lg bg-amber-200"></div>
          </div>


          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-300">
              Step:1 Choose Your Coffee {" "}
            </h6>
            <p className="text-xs text-white">
              Explore our rich selection of freshly brewed coffees and find your
              perfect cup..
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-white p-1.5 flex items-center rounded-full">
              <span className="text-base text-amber-900 font-bold">2</span>
            </div>
            

            <div className="w-full h-1 mx-4 rounded-lg bg-amber-200"></div>
          </div>


          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-300">
              Step:2 Customize Your Coffee {" "}
            </h6>
            <p className="text-xs text-white">
            Personalize your brew to match your unique taste.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-white p-1.5 flex items-center rounded-full">
              <span className="text-base text-amber-900 font-bold">3</span>
            </div>
            

            <div className="w-full h-1 mx-4 rounded-lg bg-amber-200"></div>
          </div>


          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-300">
              Step:3 Place Your Order {" "}
            </h6>
            <p className="text-xs text-white">
            Ready for your perfect brew? Proceed to checkout and complete your order.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}
