import React from "react";
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="content">
                <h2>Join Our DiFi Community</h2>
                <form action="https://getform.io/f/673f51e5-1b2b-4dca-ab12-91bdf3eb7728" method="POST">
                    <div className="form-container display-col">
                        <input type="email" name="email" placeholder="Enter your email"/>
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox" />
                        <p>Yes, I agree to receive email communications from DeFi</p>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default Subscribe;