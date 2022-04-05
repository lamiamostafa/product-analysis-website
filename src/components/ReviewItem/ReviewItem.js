import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, comment, ratings } = props.product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details">
                <p>{name}</p>
                <p>FeedBack: {comment}</p>
                <p>Ratings:{ratings} </p>

            </div>

        </div>
    );
};

export default ReviewItem;