import React from 'react';
import useProducts from '../../hooks/useProduct'
import ReviewItem from '../ReviewItem/ReviewItem';
import './Reviews.css';

const Reviews = () => {
    const [products, setProducts] = useProducts([]);

    return (
        <div classname="review-item-container">

            {
                products.map(product => <ReviewItem
                    key={product.id}
                    product={product}>


                </ReviewItem>)
            }

        </div>
    );
};

export default Reviews;