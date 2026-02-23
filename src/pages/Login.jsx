import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (username === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", true)
      navigate("/home")
    } else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <>
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                    <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
                  </a>
                  <p className="text-center">Your Social Campaigns</p>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                      <input type="email" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" type='submit' >Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
