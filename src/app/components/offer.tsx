"use client"
import React from 'react';

type Offer = {
  title: string;
  description: string;
}

const SpecialOffers :  React.FC = () => {
  const offers : Offer[] = [
    {
      title: "Evening Bliss",
      description: "Enjoy flat 50% off on all drinks daily from 5 PM to 7 PM and make your evenings extra special!"
    },
    {
      title: "Coffee Time Treat",
      description: "Enjoy a delightful coffee experience with 50% off on all drinks.Perfect for unwinding with friends and family!"
    },
    {
      title: "Weekend Brunch Special",
      description: "Start your weekend right with 30% off on all brunch items every Saturday and Sunday!"
    },
   
  ]

const handleClickOffer = (description: string) => {
  alert(description);
}

return(
  <section className='py-10'>
    <div className='container mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-6 text-white'> Special Offer</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {offers.map((offer, index) => (
          <button key={index}
          onClick={() => handleClickOffer(offer.description) }
          className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale'>
            <h3 className='text-2xl font-semibold text-red-700'>{offer.title}</h3>
            <p className='text-amber-950 mt-3 mb-3'>{offer.description}</p>
          </button>
        ))}

      </div>

    </div>

  </section>
)




}
export default SpecialOffers





















