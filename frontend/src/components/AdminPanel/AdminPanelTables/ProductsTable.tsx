import React, {useEffect} from 'react';
import {Spinner} from 'react-bootstrap'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../../../utils/consts";

const ProductsTable = () => {
    const {products, loading, error} = useTypedSelector(state => state.product)

    const {fetchProducts} = useActions()

    useEffect(() => {
        fetchProducts(1, 20);
    }, []);

    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate(ADMIN_ROUTE + `/products/edit/${id}`)
        console.log('handle edit id ', id)
    }
    const handleDelete = (id: string) => {
        console.log('handle delete id ', id)
    }

    if (loading) {
        return <Spinner animation="border"/>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    console.log(products)

    return (
        <TableTemplate data={products} handleEdit={handleEdit} handleDelete={handleDelete}/>
    );
};

export default ProductsTable;