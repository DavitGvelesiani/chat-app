import React from 'react';

function Login() {
  return (
    <div className="form-container">
        <div className="form-wrapper">
            <span className="logo">dChat</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign Up</button>
            </form>
            <p>You don't have account? Register</p>
        </div>
    </div>
  )
}

export default Login