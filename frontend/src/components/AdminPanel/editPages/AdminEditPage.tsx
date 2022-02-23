import React from 'react';
import {useParams} from "react-router-dom";

const AdminEditPage = () => {
    const {id} = useParams()

    return (
        <div>
            AdminEditPage
            <h2>ID = {id}</h2>
        </div>
    );
};

export default AdminEditPage;