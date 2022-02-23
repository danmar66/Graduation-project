import React, {useEffect} from 'react';
import {Spinner} from 'react-bootstrap'
import {useActions} from "../../../hooks/useActions";
import {fetchTags} from "../../../store/action-creators/tag";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../../../utils/consts";

const AdminsTable = () => {
    const {tags, loading, error} = useTypedSelector(state => state.tag)
    const {fetchTags} = useActions()
    useEffect(() => {
        fetchTags();
    }, []);

    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate(ADMIN_ROUTE + `/admins/edit/${id}`)
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