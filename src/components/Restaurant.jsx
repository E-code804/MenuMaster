import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ id, name, url, rating, num_reviews }) => {
  return (
    <div className="rounded-3xl h-full p-4 xl:w-1/3 lg:w-1/2 cursor-pointer group">
      <div className="bg-gray-100 relative rounded-md overflow-hidden">
        <img
          className="w-full h-40 object-cover rounded-t-md restaurant-img"
          src={url}
          alt="restaurant"
        />
        <div className="group-hover:invisible absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 transition duration-300">
          <div className="px-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg">
              Rating: {rating} ({num_reviews})
            </p>
          </div>
        </div>
        <Link to={`/${id}`} className="absolute inset-0">
          <button
            type="button"
            className="custom-btn rest-card__btn group-hover:visible absolute bottom-[-120px] left-0 right-4"
          >
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
