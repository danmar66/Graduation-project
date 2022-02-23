import React from 'react';
import { useParams} from "react-router-dom";

const TagEditPage = () => {
    const {id} = useParams()

    return (
        <div>
            TagEditPage
            <h2>ID = {id}</h2>
        </div>
    );
};

export default TagEditPage;