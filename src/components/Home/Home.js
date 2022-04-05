import React from 'react';
import './Home.css';
import banner from '../../images/banner.jpg';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProduct'
import ReviewItem from '../ReviewItem/ReviewItem';


const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts([]);
    return (
        <div >
            <div className="banner ">
                <div className="banner-desc" >
                    <h1>Falcon Shoes</h1>
                    <p className="ms-4">It is a long established fact that a reader will be distracted by the readable content of the page when looking its layout.</p>
                    <Button variant="primary">Shop Now</Button>
                </div>
                <div >
                    <img className="banner-image" src={banner} alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-center">Customer review</h1>
                {
                    products.slice(0, 3).map(product => <ReviewItem
                        key={product.id}
                        product={product}>


                    </ReviewItem>)
                }
                <button onClick={() => navigate('/review')}>See All Reviews</button>
            </div>


            {/* <button>Shop Now</button> */}
        </div >


    );
};

export default Home;