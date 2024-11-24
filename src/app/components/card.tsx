import React from "react";

const floatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2  md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white underline">
          Specialty Coffee
        </h2>
        <p className="text-white mb-4">
          Experience the finest coffee in town, made with the freshest beans and
          brewed to perfection for an unforgettable taste.
        </p>
        <button className="bg-amber-500 text-amber-950 px-4 py-2 rounded hover:bg-green-50 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          {" "}
          Coming soon: Our new coffee blends launching soon!{" "}
        </h3>

        <ul className="text-white mt-4">
          <li>
            {" "}
            <strong>Handpicked Beans, Crafted for Excellence:</strong> The
            result is a rich, flavorful coffee with distinct notes that reflect
            the care and craftsmanship involved.
          </li>
          <br />
          
          <li>
            {" "}
            <strong>Exclusive Flavors, Only at Our Café :</strong> one-of-a-kind
            coffee flavors crafted only at our café, offering a unique taste
            experience you won’t find anywhere else.
          </li>
          <br />

          <li>
            {" "}
            <strong>New Coffee Blends Coming Soon :</strong> Get ready for a
            bold new adventure in every cup—our exclusive coffee blends are
            launching soon!
          </li>
          <br />

          <li>
            {" "}
            <strong>Your New Favorite Coffee :</strong> Premium Beans, Perfectly
            Roasted for Unmatched Flavor, one-of-a-kind coffee flavors crafted
            only at our café
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2  mt-6 md:mt-0">
        <img
          src="/coffee-background-2.png"
          alt="backround-image"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};
export default floatingImageContentBlock;
