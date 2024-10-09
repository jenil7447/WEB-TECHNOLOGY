import React, { useEffect, useState } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function User() {
    const [users, setUser] = useState([])
    const navigate = useNavigate();

    const apiurl = 'http://localhost:3001/users'
    useEffect(() => {
        fetch(apiurl, { method: "GET" })
            .then(res => res.json())
            .then(res => setUser(res))
    }, [])
    return (
        <div className='usertable'>
            <Link type='button' to='/add' class='btn btn-primary'><i class="fa-solid fa-user-plus"></i> Add User</Link>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>index</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td class='actionbutton'>
                                    <Link type='button' to={`/update/`+user._id} class='btn btn-info'> <i class="fa-solid fa-pen-to-square"></i></Link>
                                    <button type='button' class='btn btn-danger'
                                        onClick={() => {
                                            const apiUrl = 'http://localhost:3001/users'
                                            fetch(apiUrl, { method: "DELETE" })
                                                .then(res => res.json())
                                                .then(res => {
                                                    navigate('/');
                                                })

                                        }}>
                                        <i class="fa-solid fa-trash"></i></button>

                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default User
