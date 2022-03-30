import React, {useEffect} from 'react';
import {Spinner} from 'react-bootstrap'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../../../utils/consts";
import axios from "axios";

const TypesTable = () => {
    const {types, loading, error} = useTypedSelector(state => state.type)

    const {fetchTypes} = useActions()
    const {deleteType} = useActions()

    useEffect(() => {
        fetchTypes(1);
    }, []);

    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate(ADMIN_ROUTE + `/types/edit/${id}`)
        // console.log('handle edit id ', id)
    }
    const handleDelete = (id: string) => {
        console.log('handle delete id ', id)
        // axios.delete(`http://localhost:5000/api/tag_type/delete/${id}`)
        //     .then(res => {
        //         console.log(res);
        //         // alert('Type deleted!')
        //     })
        //     .catch(err => console.error(err))
        deleteType(id)

    }

    const handlePage = (page: number) => {
        fetchTypes(page)
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