import React from 'react';
import useProducts from '../../hooks/useProduct'

const Reviews = () => {
    const [products, setProducts] = useProducts([]);







    return (
        <div>
            <h1>This is review page:{products.length}</h1>

        </div>
    );
};

export default Reviews;