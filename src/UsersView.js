import UsersTable from "./UsersTable";
import React from 'react';
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

    //<SearchForm onSearch = {search}/>
    //<Stack gap={1} className="mb-3"></Stack>


    return (
            <UsersTable data={users}/>
    )
}
export default UsersView;