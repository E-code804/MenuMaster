import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReviewFrom from "../components/ReviewForm";
import { useReviewsContext } from "../hooks/useReviewsContext";

const RestaurantPage = ({ user, setUser }) => {
  const { restId } = useParams();
  //const [restaurant, setRestaurant] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const { restaurant, dispatch } = useReviewsContext();
  const url = "https://menu-master-7zih.onrender.com";

  useEffect(() => {
    const fetchRestaurant = () => {
      fetch(`${url}/api/restaurants/${restId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Bad Restaurant ID");
          }
          return response.json();
        })
        .then((json) => {
          //setRestaurant(json)
          dispatch({ type: "SET_REVIEWS", payload: json });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchRestaurant();
  }, [dispatch, restId]);

  const handleClick = async (id) => {
    const response = await fetch(`${url}/api/restaurants/${restId}/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_REVIEW", payload: json });
    }
  };

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="pt-36 flex justify-center w-full">
        {!isLoading && (
          <div className="w-full bg-gray-200 px-6 py-12 rounded-lg shadow-lg">
            <img
              className="w-80 h-64 mx-auto mb-8 rounded-lg"
              src={restaurant.photo.url}
              alt="Restaurant"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Ratings and Pricing</h1>
                <p className="text-xl">
                  {restaurant.rating} ({restaurant.num_reviews})
                </p>
                <p className="text-lg">Price level: {restaurant.price_level}</p>
                <p className="text-lg">Avg Pricing: {restaurant.price}</p>
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Details</h1>
                <p className="text-lg">
                  Cuisine:{" "}
                  {restaurant.cuisine.map((cuisine, index) => (
                    <span key={index}>
                      {cuisine}
                      {index !== restaurant.cuisine.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Location</h1>
                <p className="text-lg">{restaurant.location_string}</p>
                <p className="text-lg">{restaurant.address}</p>
              </div>
            </div>

            <ReviewFrom id={restId} user={user} />

            {restaurant.user_reviews.map((rev) => (
              <div key={rev.revId} className="bg-white p-5 rounded-lg mb-5">
                <h1 className="text-lg font-bold">
                  {rev.userName} - {rev.createdAt}
                </h1>
                <h2 className="text-xl mt-2">Rated: {rev.ratingReview}</h2>
                <p className="mt-4">{rev.writtenReview}</p>
                {rev.userName === user.userName && (
                  <span
                    className="bg-red-500 text-white cursor-pointer py-2 px-4 rounded mt-4 inline-block"
                    onClick={() => handleClick(rev.revId)}
                  >
                    Delete
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
