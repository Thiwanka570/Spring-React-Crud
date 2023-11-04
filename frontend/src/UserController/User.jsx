import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function User() {
    const [users, setUsers] = useState([]);
    const [showModalAdduser, setshowModalAdduser] = useState(false);
    const [showModalEdituser, setshowModalEdituser] = useState(false);
    const [showModalDeleteuser, setshowModalDeleteuser] = useState(false);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    });

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const result = await axios.get('http://localhost:8080/users');
        setUsers(result.data);
    };

    const handleAddUser = () => {
        setshowModalAdduser(true);
    };

    const handleEditUser = () => {
        setshowModalEdituser(true);
    };

    const handleADeleteUser = () => {
        setshowModalDeleteuser(true);
    };

    const handleCloseModal = () => {
        setshowModalAdduser(false);
        setshowModalDeleteuser(false);
        setshowModalEdituser(false);
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/user', user);
        console.log('User added');
        getUsers(); // Fetch users again after adding a new user
        handleCloseModal();
    };

    return (
        <div>
            <Button variant="primary" onClick={handleAddUser}>
                Add User
            </Button>
            <div className="Usertable mt-4">
                <Table className="shadow">
                    <thead className="bg-warning text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light">
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button type="button" className="btn btn-success mx-2" onClick={handleEditUser}>
                                        Edit
                                    </Button>
                                    <Button variant="success" onClick={handleADeleteUser}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <div>
                <Modal show={showModalAdduser} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register User</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Modal.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        placeholder="Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        placeholder="User Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        placeholder="name@example.com"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">
                                Save
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>

            <div>
                <Modal show={showModalAdduser} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register User</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Modal.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        placeholder="Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        placeholder="User Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        placeholder="name@example.com"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">
                                Save
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>

            <div>
                <Modal show={showModalEdituser} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register User</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Modal.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        placeholder="Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        placeholder="User Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        placeholder="name@example.com"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">
                                Save
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>

            <div>
                <Modal show={showModalDeleteuser} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register User</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Modal.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        placeholder="Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        placeholder="User Name"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        placeholder="name@example.com"
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">
                                Save
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default User;
