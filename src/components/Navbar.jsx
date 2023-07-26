import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icon.png"
import ErrorMsg from './ErrorMsg';

// make a lot of components

const Navbar = ({user, setUser}) => {
  const [displaySignIn, setDisplaySignIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleSignInClick = () => {
    // If the user is empty, user has not signed in yet so display sign in
    if (isObjectEmpty(user)) {
      setDisplaySignIn(true)
    } else {
      setUser({})
    }
  }

  const handleEnterClick = async (action) => {
    if (action === "in") {
      fetch(`http://localhost:4000/api/users/${userName}`)
        .then(response => {
          if (!response.ok) {
            throw Error("User not found, enter correct info or create new user.")
          } else {
            return response.json()
          }
        })
        .then(json => {
          setUser(json)
          setDisplaySignIn(false)
          setErrorMessage("")
        })
        .catch(err => {
          setErrorMessage(err.message)
        })
    } else {
        fetch(`http://localhost:4000/api/users/`, {
          method: 'POST',
          body: JSON.stringify({userName, userPassword}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (!response.ok) {
              throw Error("This username already exists.")
            } 
            return response.json()
          })
          .then(json => {
            setUser(json)
            setDisplaySignIn(false)
            setErrorMessage("")
          })
          .catch(err => {
            setErrorMessage(err.message)
          })
    }
    setUserName("")
    setUserPassword("")
  }

  const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
      <header className="w-full absolute z-10">
        {displaySignIn && (
        <div className="confirm-delete">
          <div className="delete-container">
            <h1 className="mb-3">Please enter your credentials</h1>
            <input
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p>To demo: username=Demo, password=demo123</p>
            <div className="mt-3 w-full flex justify-evenly">
              <button 
              className="rounded-md p-2 bg-primary text-white" 
              onClick={() => handleEnterClick("in")}
              >
                Sign In
              </button>
              <button 
                className="bg-green-600 text-white rounded-md p-2"  
                onClick={() => handleEnterClick("create")}
              >
                Create Account
              </button>
            </div>
            {errorMessage.length > 0 && 
              <ErrorMsg errorMessage={errorMessage} />
            }
          </div>
        </div>
      )}
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link to="/">
            <div className="flex justify-center items-center cursor-pointer">
              <img src={logo} alt="logo" />
              <p className="nav-logo-text">Menu Master</p>
            </div>
          </Link>

          <button type="button" onClick={handleSignInClick} className="custom-btn sign-in">{isObjectEmpty(user) ? "Sign In" : "Sign Out"}</button>
        </nav>
      </header>
  )
}

export default Navbar