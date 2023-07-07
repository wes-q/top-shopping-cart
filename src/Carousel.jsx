// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroA from './assets/HeroA.webp';
import HeroB from './assets/HeroB.webp';
import HeroC from './assets/HeroC.webp';

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={HeroA} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={HeroB} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={HeroC} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="false"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    );
}

