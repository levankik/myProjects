import {Alert, Table, Pagination} from "react-bootstrap";
import axios from 'axios';
import React from 'react';
import {useThemeContext} from "./ThemeContext";

function UsersTable({data = [],}) {
    const theme = useThemeContext();
    return (
        <div>
            <Alert className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}>
                aaaaa bbbbb ccccc dddddd
            </Alert>
            <Table variant={theme}>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Company</td>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}, {user.address.street}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>

    )
}

export default UsersTable;