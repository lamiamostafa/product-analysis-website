import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { cname, comment, ratings } = props.product;
    return (
        <div className="review-item">

            <div className="review-item-details">
                <p>{cname}</p>
                <p>FeedBack: {comment}</p>
                <p>Ratings:{ratings} </p>

            </div>

        </div>
    );
};

export default ReviewItem;