import React from 'react';
import {useParams} from "react-router-dom";

const ProductEditPage = () => {
    const {id} = useParams()

    return (
        <div>
            ProductEditPage
            <h2>ID = {id}</h2>
        </div>
    );
};

export default ProductEditPage;