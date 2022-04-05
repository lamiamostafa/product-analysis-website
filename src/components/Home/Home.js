import React from 'react';
import './Home.css';
import banner from '../../images/banner.jpg';
import { Button } from 'react-bootstrap';


const Home = () => {
    return (
        <div className="banner ">
            <div className="banner-desc" >
                <h1>Falcon Shoes</h1>
                <p className="ms-4">It is a long established fact that a reader will be distracted by the readable content of the page when looking its layout.</p>
                <Button variant="primary">Shop Now</Button>
            </div>
            <div >
                <img className="banner-image" src={banner} alt="" />
            </div>

            {/* <button>Shop Now</button> */}
        </div >
    );
};

export default Home;