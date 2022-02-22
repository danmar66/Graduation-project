import React, {useEffect} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap'
import {useActions} from "../../hooks/useActions";
import {fetchTags} from "../../store/action-creators/tag";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";

const AdminsTable = () => {
    const {tags, loading, error} = useTypedSelector(state => state.tag)
    const {fetchTags} = useActions()
    useEffect(() => {
        fetchTags();
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
        <TableTemplate data={tags} handleEdit={handleEdit} handleDelete={handleDelete}/>
    );
};

export default AdminsTable;