import React from "react";

export default function Footer(){
    return(
    <div>
        <footer className="flex flex-col space-y-10 justify-center m-10 mb-0 bg-gradient-to-r from-amber-950 to bg-yellow-800 py-10">
            <nav className="flex justify-center flex-wrap gap-6 text-white font-medium">
                <a className="hover:text-amber-200 text-yellow-500" href="#">Home</a>
                <a className="hover:text-amber-200 text-yellow-500" href="#">About</a>
                <a className="hover:text-amber-200 text-yellow-500" href="#">Delivery</a>
                <a className="hover:text-amber-200 text-yellow-500" href="#">Contact</a>
            </nav>

            <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://www.facebook.com/emaan.siddiqui.792" target="blank" rel="nofollow noopener">
                <img src="/icons8-facebook-48.png" alt="facebook-logo" />
                </a>

                <a href="https://www.linkedin.com/in/faiza-siddiqui-b319122b8" target="blank" rel="nofollow noopener">
                <img src="/icons8-linkedin-48.png" alt="linkedin-logo" />
                </a>

                <a href="https://instagram.com" target="blank" rel="nofollow noopener">
                <img src="/icons8-instagram-48.png" alt="insta-logo" />
                </a>

                <a href="https://twitter.com" target="blank" rel="nofollow noopener">
                <img src="/icons8-twitter-48.png" alt="twitter-logo" />
                </a>
            </div>

            <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">2024 Faiza Siddiqui .All Rights Reserved</p>
        <br />
        <br />
        </footer>
  
    </div>
    )
}