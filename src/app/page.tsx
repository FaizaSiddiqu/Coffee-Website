
import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "./components/carousel";
import Banner from "./components/banner";
import Card from "./components/card";
import Footer from "./components/footer";
import Offer from "./components/offer";
import ProductList from "./components/product-List";
import Progressor from "./components/progressor";
import Coffee from "./components/coffee";
import MenuItems from "./components/Menu-Items";
import Reservation from "./components/Reservation";



export default function App(){
  return(
    <div className="bg-gradient-to-r from-yellow-900 to-yellow-900 min-h-screen">

<Navbar/>
<Carousel/>
<Progressor/>
<Coffee />
<Banner/>
<ProductList/>
<MenuItems />
<Offer/>
<Card/>
<Reservation />
<Footer/>
      
    </div>
  )
}