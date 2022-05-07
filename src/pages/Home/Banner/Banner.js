import React from 'react';
import bannerImage from '../../../image/banner-img.png'

const Banner = () => {
    return (
        <div>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="banner-text w-50">
                    <h2>Get your solution for</h2>
                    <h2>Warehouse</h2>
                </div>
                <div className="banner-img w-50">
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;