import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {getType} from "../../../http/typeAPI";
import {Button, FloatingLabel, Form, Row} from "react-bootstrap";

const TypeEditPage = () => {
    const {id} = useParams()

    const [type, setType] = useState({title: '', slug: ''})
    const [title, setTitle] = useState(type.title)
    const [slug, setSlug] = useState(type.slug)

    useEffect(() => {
        getType(id).then(data => {
            setType(data)
        })
    }, [])

    if (!type) {
        return <h1>Loading</h1>
    }

    return !type ? (<></>) : (
        <>
            <Row>
                {/*TypeEditPage*/}
                {/*<h3>ID = {id}</h3>*/}
                <h3>Title : {type.title}</h3>
                <h3>Slug : {type.slug}</h3>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Form
                    className='col-md-4'
                    onSubmit={event => {
                        event.preventDefault();
                        // let data = JSON.stringify({title, slug})
                        // let data = {title, slug}
                        // console.log(data)
                        axios.put(`http://localhost:5000/api/tag_type/edit/${id}`, {title, slug})
                            .then(res => alert('Type updated!'))
                            .catch(err => console.error(err))
                    }}
                >
                    <Form.Group className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} type='title' placeholder={type.title} onChange={(event => {
                            // console.log(title)
                            setTitle(event.target.value)
                        })}/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Slug</Form.Label>
                        <Form.Control value={slug} type='slug' placeholder={type.slug} onChange={(event => {
                            // console.log(slug)
                            setSlug(event.target.value)
                        })}/>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Row>
        </>
    );
};

export default TypeEditPage;