import React, {useEffect} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";

const ProductsTable = () => {
    const {products, loading, error} = useTypedSelector(state => state.product)

    const {fetchProducts} = useActions()

    useEffect(() => {
        fetchProducts(1, 20);
    }, []);

    const handleEdit = (id: string) => {
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