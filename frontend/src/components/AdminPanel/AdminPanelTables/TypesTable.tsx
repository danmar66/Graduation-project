import React, {useEffect} from 'react';
import {Spinner} from 'react-bootstrap'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../../../utils/consts";

const TypesTable = () => {
    const {types, loading, error} = useTypedSelector(state => state.type)

    const {fetchTypes} = useActions()

    useEffect(() => {
        fetchTypes();
    }, []);

    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate(ADMIN_ROUTE + `/types/edit/${id}`)
        console.log('handle edit id ', id)
    }
    const handleDelete = (id: string) => {
        console.log('handle delete id ', id)

    }

    const handlePage = (page: number) => {
        console.log('handle page ' , page)
    }

    if (loading) {
        return <Spinner animation="border"/>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <TableTemplate
            data={types}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handlePage={handlePage}
            totalPages={types.totalPages}
            activePage={types.page}
        />
    );
};

export default TypesTable;