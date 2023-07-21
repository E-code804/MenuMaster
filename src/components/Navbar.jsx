import React from 'react'
import logo from "../assets/icon.png"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex justify-center items-center cursor-pointer">
          <img src={logo} alt="logo" />
          <p className="nav-logo-text">Menu Master</p>
        </div>

        <button type="button" className="custom-btn sign-in">Sign In</button>
      </nav>
    </header>
  )
}

export default Navbar