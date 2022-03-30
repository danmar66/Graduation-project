import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Auth() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({message: ''})
    const navigate = useNavigate()

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 500}} className="p-5">
                <h2 className="m-auto">
                    Authorization
                </h2>
                <Form
                    className="d-flex flex-column mt-3"
                    onSubmit={event => {
                        event.preventDefault()
                        axios.post(
                            'http://localhost:5000/api/admin/login',
                            {username, password}
                        )
                            .then(res => {
                                window.localStorage.setItem('authToken', res.data.token)
                                setPassword('')
                                setUsername('')
                                navigate('/admin')
                            })
                            .catch((error) => {
                                if (error.response) {
                                    setError(error.response.data)
                                    setPassword('')
                                    setUsername('')
                                }
                            })
                    }}
                >
                    <Form.Control
                        placeholder="Enter username..."
                        value={username}
                        className="mt-3"
                        onChange={event => setUsername(event.target.value)}
                    />
                    <Form.Control
                        placeholder="Enter password..."
                        value={password}
                        className="mt-3"
                        type={'password'}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button
                        className="mt-3 align-self-end"
                        variant={"outline-dark"}
                        type="submit"
                    >
                        LOGIN
                    </Button>
                    {error.message !== ''
                        ? <div
                            className='mt-3 mb-0'
                            style={{color: 'red', fontWeight: '500'}}
                        >
                            Error: {error.message}
                        </div>
                        : null
                    }
                </Form>
            </Card>
        </Container>
    );
}

export default Auth;