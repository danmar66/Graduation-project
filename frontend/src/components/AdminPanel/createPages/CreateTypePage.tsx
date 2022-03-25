import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";

const CreateTypePage = () => {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const token = window.localStorage.getItem('authToken') || ''

    return (<div className='d-flex justify-content-center'>
        <Form
            className='col-md-4'
            onSubmit={event => {
                event.preventDefault();
                axios.post('http://localhost:5000/api/tag_type/create',
                    {title, slug},
                    {
                        headers: {
                            'Authorization': token
                        }
                    })
                    .then(res => {
                        setSlug('')
                        setTitle('')
                        alert(`Type "${title}" with slug "${slug}" created!`)
                    })
                    .catch(err => console.error(err))
            }}
        >
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} type='title' placeholder={'Enter title...'} onChange={(event => {
                    setTitle(event.target.value)
                })}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Slug</Form.Label>
                <Form.Control value={slug} type='slug' placeholder={'Enter slug...'} onChange={(event => {
                    setSlug(event.target.value)
                })}/>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    </div>);
};

export default CreateTypePage;