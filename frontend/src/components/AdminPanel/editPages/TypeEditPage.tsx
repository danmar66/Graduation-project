import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {getType} from "../../../http/typeAPI";

const TypeEditPage = () => {
    const {id} = useParams()

    const [type, setType] = useState()

    useEffect(() => {
        getType(id).then(data => {
            setType(data)
        })
    }, [])

    if (!type) {
        return <h1>Loading</h1>
    }

    return !type ? (<>ba</>) : (
        <div>
            TypeEditPage
            <h2>ID = {id}</h2>
            {/*<h3>{type ?? type.title}</h3>*/}
            {/*<h3>{type.title}</h3>*/}
        </div>
    );
};

export default TypeEditPage;