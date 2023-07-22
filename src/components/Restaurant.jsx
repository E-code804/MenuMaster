import React from 'react'

const Restaurant = ({name, url, rating, num_reviews}) => {
  return (
    <div class="h-full p-4 xl:w-1/3 lg:w-1/2 ">
        <div class="bg-gray-100 relative rounded-md">
            <img className="rounded-t-md restaurant-img max-sm:h-full" src={url} alt="restaurant" />
            <div className="px-8 pt-12 pb-16">
                <h1>{name}</h1>
                <h1>Rating: {rating} ({num_reviews})</h1>

            </div>
        </div>
    </div>
  )
}

export default Restaurant