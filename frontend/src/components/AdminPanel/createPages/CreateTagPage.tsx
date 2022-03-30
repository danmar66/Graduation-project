import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Form, Spinner} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const CreateTagPage = () => {
    type Type = {
        _id: string,
        title: string
    }

    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [type, setType] = useState({
        _id: "",
        title: ""
    })

    const {types, loading, error} = useTypedSelector(state => state.type)
    const {fetchAllTypes} = useActions()
    useEffect(() => {
        fetchAllTypes();
    }, []);

    // const types = ['laptop', 'phone', 'player', 'freezer', 'knife', 'pc']

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/admin/tags')
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/tag/create', {title, tagTypeId: type._id, slug})
            .then(res => {
                setTitle('')
                setType({_id: '', title: ''})
                setSlug('')
                alert('New tag created')
            })
            .catch(err => console.error(err))
    }

    const selectType = (type: { _id: string, title: string }) => {
        setType(type)
    }

    if (loading) {
        return <Spinner animation="border"/>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (<div className='d-flex justify-content-center'>
        <Form className='col-md-4'>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} type='title' placeholder={'Title'} onChange={(event => {
                    setTitle(event.target.value)
                })}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Type</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle style={{width: '100%'}} variant="outline-dark" id="dropdown-basic">
                        {type.title === "" ? 'Select type' : type.title}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {types?.map((el: any) => {
                            return <Dropdown.Item key={el._id} onClick={() => {
                                selectType(el)

                            }}>{el.title}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Slug</Form.Label>
                <Form.Control value={slug} type='slug' placeholder={'Slug'} onChange={(event => {
                    setSlug(event.target.value)
                })}/>
            </Form.Group>
            <div className="d-flex justify-content-between">
                <Button style={{width: "120px"}} variant="outline-success" onClick={handleSubmit} type="submit">Submit
                    form</Button>
                <Button style={{width: "120px"}} variant="outline-dark" onClick={handleClick}>Back</Button>
            </div>
        </Form>
    </div>);
};

export default CreateTagPage;