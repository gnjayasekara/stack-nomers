import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginRegister = () => {
    const [action, setAction] = useState('');

    const registerLink = (state, action) => {
        setAction(' active');
    }
  return (
    <div className = 'wrapper'>
        <div className="form-box login">
            <form action = "">
                <h1> Sign In </h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='DTP Code' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type = "checkbox"></input>Remember me </label>
                    <a href = "#">Forgot password? </a>
                </div>

                <button type="submit">Sign Up</button>

                <div className="register-link">
                    <p>Already have an account? <a href = "#" onClick={registerLink}>Log In</a></p>
                </div>
            </form>
        </div>

    </div>
  );
};

export default LoginRegister;