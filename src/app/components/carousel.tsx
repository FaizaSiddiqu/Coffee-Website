import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-900">
        <div className="py-4 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-t from-amber-900 to-amber-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pt-40 flex-grow"
              >
                <img
                  src="/coffee-1.png"
                  alt="coffee"
                  className="absolute inset-0 h-full w-full object-fit group-hover:scale-105 transition-transform-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-950/25 to-amber-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Brewed Bliss{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-t from-amber-900 to-amber-700">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src=" /coffee-6.avif"
                  alt="coffee-img"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-950/25 to-amber-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Sip of Serenity{" "}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/coffee-5.jpg"
                    alt="coffee-3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-900/25 to-amber-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Caffeine Craze{" "}
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/coffee-3.png"
                    alt="coffee-3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-900/25 to-amber-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Java Joy{" "}
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-amber-900/25 to-amber-900/5 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/coffee-glass-2.png"
                  alt="coffee-5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/25 to-amber-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Golden Brew{" "}
                </h3>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
