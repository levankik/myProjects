import SearchForm from './SearchForm';
import UsersTable from "./UsersTable";
import React from 'react';
import {Stack} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import axios from "axios";
function UsersView () {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       search().catch(console.error);
    }, [])

    const search = async (params) => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users', {params});
        setUsers(data);
        console.log('SearchForm was submitted')
    }

    return (
        <Stack gap={4} className="mb-3">
            <SearchForm onSearch = {search}/>
            <UsersTable data={users}/>
        </Stack>
    )
}
export default UsersView;