import React from 'react'
import Restaurant from './Restaurant'
import restaurants from "../data"

const RestaurantDisplay = () => {
  return (
    <div className="display-restaurants w-full padding-x">
        {/* Have a Form input for filtering based on ratings and price level. */}
        <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center">
            {restaurants.map(r => <Restaurant name={r.name} url={r.photo.url} rating={r.rating} num_reviews={r.num_reviews} />)}
        </div>
    </div>
  )
}

export default RestaurantDisplay