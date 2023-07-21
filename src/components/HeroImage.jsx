import React from 'react'
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpg"

const HeroImage = ({foodImg, styles}) => {
    const foods = {
        "1": food1,
        "2": food2,
        "3": food3
    }

  return (
    <img className={styles} width="300" src={foods[foodImg]} alt="hero-food" />
  )
}

export default HeroImage