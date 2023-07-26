import React from 'react'

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RestaurantDisplay from "../components/RestaurantDisplay";

const Home = ({user, setUser}) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Hero />
      <RestaurantDisplay />
    </>
  )
}

export default Home