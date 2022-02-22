import React, {useEffect} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";

const TypesTable = () => {
    const {types, loading, error} = useTypedSelector(state => state.type)

    const {fetchTypes} = useActions()

    useEffect(() => {
        fetchTypes();
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

    return (
        <TableTemplate data={types} handleEdit={handleEdit} handleDelete={handleDelete}/>
    );
};

export default TypesTable;