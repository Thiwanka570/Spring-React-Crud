import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alertmessage from '../component/Alertmessage';


function User() {

    const [users, setUsers] = useState([]);
    const [showModalAdduser, setshowModalAdduser] = useState(false);
    const [showModalEdituser, setshowModalEdituser] = useState(false);
    const [showModalDeleteuser, setshowModalDeleteuser] = useState(false);
    const [message, setmessage] = useState("");
    const [alertColor, setalertColor] = useState("");
    const [editUserID, setEditUserId] = useState();
    const [useridforDelete, setuseridforDelete] = useState();
    const [updateuser,setupdateuser]=useState([]);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    });

    const [edituser, seteditUser] = useState({
        Ename: '',
        Eusername: '',
        Eemail: '',
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

    const handleDeleteUser = () => {
        setshowModalDeleteuser(true);
    };

    const handleCloseModal = () => {
        setshowModalAdduser(false);
        setshowModalEdituser(false);
        setshowModalDeleteuser(false);
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onInputChangeEdit = (e) => {
        seteditUser({ ...edituser, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/user', user);
        console.log('User added');
        setmessage('New user Added');
        setalertColor("success")
        getUsers(); // Fetch users again after adding a new user
        handleCloseModal();

    };

    const onEditSubmit = async (e) => {
        console.log(editUserID);
        e.preventDefault();
        await axios.put(`http://localhost:8080/updateUser/${editUserID}`, edituser);
        console.log('User Updated');
        setmessage('User update success');
        setalertColor('info')
        console.log(edituser);
        getUsers(); // Fetch users again after adding a new user
        handleCloseModal();
    };


    const deleteUser = async () => {
        console.log(useridforDelete);
        await axios.delete(`http://localhost:8080/deleteUser/${useridforDelete}`);
        setmessage('user deleted');
        setalertColor('warning')
        console.log('User Deleted');
        getUsers(); // Fetch users again after adding a new user


    }


    return (
        <div>
            <div className='d-flex'>
                <Button variant="primary" onClick={handleAddUser}>
                    Add User
                </Button>
            </div>
            <div className='mt-2'>
                <Alertmessage message={message} bg={alertColor} />
            </div>
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
                                    <Button type="button" className="btn btn-success mx-2" onClick={() => { setEditUserId(user.id); handleEditUser(); setupdateuser(user)}}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => { handleDeleteUser(); setuseridforDelete(user.id) }}>Delete</Button>
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
                <Modal show={showModalEdituser} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(e) => onEditSubmit(e)}>
                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        placeholder="Name"
                                        defaultValue={updateuser.name}
                                        readOnly={false}
                                        onChange={(e) => onInputChangeEdit(e)}
                                        required
                                    />
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        placeholder="User Name"
                                        defaultValue={updateuser.username}
                                        onChange={(e) => onInputChangeEdit(e)}
                                        required
                                    />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        defaultValue={updateuser.email}
                                        placeholder="name@example.com"
                                        onChange={(e) => onInputChangeEdit(e)}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <Button type="submit" variant="primary" className='mx-2'>
                                Save
                            </Button>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                close
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>

            <div>
                <Modal show={showModalDeleteuser} onHide={handleCloseModal} >
                    <Modal.Body className='bg-danger text-white'>
                        <p>Are you sure you want to delete this user?</p>
                    <Button variant="primary" onClick={()=>{deleteUser();handleCloseModal()}} className='mx-2'>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    </Modal.Body>

                </Modal>
            </div>
        </div>
    );
}

export default User;
