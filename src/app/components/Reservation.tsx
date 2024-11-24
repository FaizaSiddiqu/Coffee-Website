import React from "react";

const reservationSection = () => {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Make a Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="date"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="Time"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <button className="bg-amber-200 py-2 px-4 text-amber-950 rounded-md hover:bg-white">
              Reserved Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default reservationSection;
