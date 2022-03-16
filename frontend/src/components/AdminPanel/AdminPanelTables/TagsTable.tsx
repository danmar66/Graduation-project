import React, {useEffect} from 'react';
import {Spinner} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import {fetchTags} from "../../../store/action-creators/tag";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import TableTemplate from "./TableTemplate";
import {ADMIN_ROUTE} from "../../../utils/consts";
import axios from "axios";


const TagsTable = () => {
    const {tags, loading, error} = useTypedSelector(state => state.tag)

    const {fetchTags} = useActions()

    useEffect(() => {
        fetchTags(1);
    }, []);

    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate(ADMIN_ROUTE + `/tags/edit/${id}`)
        console.log('handle edit id ', id)
    }
    const handleDelete = (id: string) => {
        console.log('handle delete id ', id)
    }

    const handlePage = (page: number) => {
        console.log('handle page ' , page)
        // axios({
        //     method: 'get',
        //     url: `http://localhost:5000/api/tag`,
        //     params: {
        //         page: page
        //     }
        // }).then(res => console.log(res.data))
        fetchTags(page)
    }

    if (loading) {
        return <Spinner animation="border"/>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <TableTemplate
            data={tags}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handlePage={handlePage}
            totalPages={tags.totalPages}
            activePage={tags.page}
        />
    );
};

export default TagsTable;