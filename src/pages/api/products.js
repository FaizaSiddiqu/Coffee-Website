// products.js ki file is liye bnai hai qk hum product ko fetch krna chahty hain api sy 
export default function handler(req, res) {
    const Products = [
        {
            id: 1,
            name: "nuty bliss",
            price: 10,
            image: "/nuty.jpg",
        },
        {
            id: 2,
            name: "Pistachio-latte",
            price: 20,
            image: "/pistachio-latte.jpg"
        },
        {
            id: 3,
            name: "Vanilla bliss",
            price: 30,
            image: "/vanilla-bliss.jpg"
        },
        {
            id: 4,
            name: "Iced Maple",
            price: 40,
            image: "/iced-maple.jpg"
        },
        {
            id: 5,
            name: "Creamy Delight",
            price: 50,
            image: "/creamy-delight.jpg"
        },
        {
            id: 6,
            name: "Copy Cat",
            price: 10,
            image: "/copycat-coffee.jpg"
        },
    ];
    res.status(200).json(Products);
}