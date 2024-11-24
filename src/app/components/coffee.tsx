import React from "react";

const products = [
    {
        id: 1,
        title: "Mocha",
        category: "Fixing",
        price: "$200.00",
        imageUrl: "/buy-coffee-03.jpg",
        bgColor: "bg-amber-600",
    },
    {
        id: 2,
        title: "Flate-White",
        category: "Delight",
        price: "$170.00",
        imageUrl: "/buy-coffee-04.png",
        bgColor: "bg-amber-600",
    },
    {
        id: 3,
        title: "Affogato",
        category: "Fixing",
        price: "$250.00",
        imageUrl: "/buy-coffee-05.jpg",
        bgColor: "bg-amber-600",
    },
];

export default function Coffee() {
    return (
        <div className="p-1 flex flex-wrap items-center justify-center mb-6 gap-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`flex flex-col items-center m-4 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
                >
                    {/* Decorative SVG */}
                    <svg
                        className="absolute bottom-0 left-0 scale-150 group-hover:scale-[1.65] transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: 0.1 }}
                    >
                        <rect
                            x="159.52"
                            y="152"
                            height="152"
                            width="152"
                            rx="8"
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            height="152"
                            width="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>

                    {/* Image Section */}
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 rounded-full"
                            style={{
                                background: "radial-gradient(black, transparent 50%)",
                                transform: "rotate3d(0,0,1,20deg) scale3d(1,0.6, 1)",
                                opacity: 0.2,
                            }}
                        ></div>
                        <img className="relative w-40 h-40 object-cover" src={product.imageUrl} alt={product.title} />
                    </div>

                    {/* Text Section */}
                    <div className="relative text-white px-6 pb-6 mt-4 text-center w-full">
                        <span className="block opacity-75 text-sm mb-1">{product.category}</span>
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-xl">{product.title}</span>
                            <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none">
                                {product.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
