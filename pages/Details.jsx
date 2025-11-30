import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const [product, setProduct] = useState([]);
    const location = useLocation();
    const { id } = location.state;


    const getProductDetails = async () => {
        try {
            const res = await fetch(`https://ilkinibadov.com/api/v1/products/${id}/details`);
            if (res.ok) {
                const data = await res.json();
                setProduct(data);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <div>Details {id}</div>
    )
}

export default Details