import React from 'react';
import './Browse.css'; // Import CSS file

const BrowseByDressStyle = () => {
    return (
        <div className="browse-dress-style">
            <h2>Browse by Dress Style</h2>
            <div className="dress-style-grid">
                <div className="dress-style-item">
                    <img src="./Browse/casual.png" alt="Casual" />
                    <div className="overlay">
                        <p>Casual</p>
                    </div>
                </div>
                <div className="dress-style-item">
                    <img src="./Browse/formal.png" alt="Formal" />
                    <div className="overlay">
                        <p>Formal</p>
                    </div>
                </div>
                <div className="dress-style-item">
                    <img src="./Browse/party.png" alt="Party" />
                    <div className="overlay">
                        <p>Party</p>
                    </div>
                </div>
                <div className="dress-style-item">
                    <img src="./Browse/gym.png" alt="Gym" />
                    <div className="overlay">
                        <p>Gym</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseByDressStyle;
