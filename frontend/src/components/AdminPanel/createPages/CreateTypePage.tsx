import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import axios from "axios";

const CreateTypePage = () => {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')


    return (<div className='d-flex justify-content-center'>
        <Form
            className='col-md-4'
            onSubmit={event => {
                event.preventDefault();
                let data = JSON.stringify({title, slug})
                console.log(data)
                axios.post('http://localhost:5000/api/tag_type/create', {title, slug})
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
            }}
        >
            <Form.Group className='mb-3'>
                {/*<Form.Label>Title</Form.Label>*/}
                <FloatingLabel
                    controlId='floatingInput'
                    label='title'
                >
                    <Form.Control value={title} type='title' placeholder={'Title'} onChange={(event => {
                        setTitle(event.target.value)
                    })}/>
                </FloatingLabel>

            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Slug</Form.Label>
                <Form.Control value={slug} type='slug' placeholder={'Slug'} onChange={(event => {
                    setSlug(event.target.value)
                })}/>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    </div>);
};

export default CreateTypePage;