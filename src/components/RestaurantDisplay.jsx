import React from 'react'
import Restaurant from './Restaurant'
import { useState, useEffect } from 'react'

const RestaurantDisplay = () => {
  const [restaurants, setRestaurants] = useState([])

  
  useEffect( () => {
    const fetchRestaurants = () => {
      fetch(`http://localhost:4000/api/restaurants/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Bad Restaurant ID")
        }
        return response.json()
      }).then( json => {
        setRestaurants(json)
      }).catch(err => {
        console.log(err);
      })
    }
    fetchRestaurants()
}, [])

  return (
    <div className="display-restaurants w-full padding-x">
        {/* Have a Form input for filtering based on ratings and price level. */}
        <div className="w-full flex justify-center">
          <h1 id="rest-display-title" className="mt-4 2xl:text-[48px] sm:text-[32px] text-[50px] max-sm:text-[48px] font-extrabold">
            Discover something new
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
          {restaurants && restaurants.map(r => (
            <Restaurant 
              key={r._id}
              id={r._id}
              name={r.name} 
              url={r.photo.url} 
              rating={r.rating} 
              num_reviews={r.num_reviews} 
            />
          ))}
        </div>
    </div>
  )
}

export default RestaurantDisplay