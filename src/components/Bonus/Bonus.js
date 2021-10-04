import React from 'react';
import './Bonus.css';

// discount offer content under header section
const Bonus = () => {
    return (
        <div className="bonus py-4 my-4 row container">
            <div className="col-12 col-md-6">
                <img width="90%" src="https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg" alt="" />
            </div>
            <div className="col-12 col-md-6">
                <h1 className="bonus-text mb-4 fs-1">Save 20%</h1>
                <p className="mb-4">Get enrolled withing 31st October 2021 to get 20% discount in any course of English Language Academy.</p>
                <button className="btn btn-secondary mt-4">Start Now</button>
            </div>
        </div>
    );
};

export default Bonus;