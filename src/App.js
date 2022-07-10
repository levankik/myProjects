import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import Layout from "./Layout";
import Website from "./Website";
import Alert from 'react-bootstrap/Alert';
import React, {useState} from 'react';
import UsersView from "./UsersView";
import GalleryView from "./gallery/GalleryView";
import TodoView from "./todo/TodoView";
import HomeView from "./HomeView";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import LoginView from "./LoginView";
import {useEffect} from "react";
import axios from "axios";
import api from "./todo/api";


function App() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.get('/user', {
                headers: {
                    "Authorization": token
                }
            })
                .then(res => {setUser(res.data)})
                .catch(err => setError(err.message))
                .finally(() => setChecked(true));
        } else {
            setChecked (true);
        }
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>
                    <Routes>
                        {user ? (
                            <Route path="/" element={<Layout user={user} onThemeChange={setTheme}/>}>
                                <Route path="" element={<HomeView/>}/>
                                <Route path="first" element={<Outlet/>}>
                                    <Route path="website" element={<Website/>}/>
                                </Route>
                                <Route path="website" element={<Website/>}/>
                                <Route path="users" element={<UsersView/>}/>
                                <Route path="gallery" element={<GalleryView/>}></Route>
                                <Route path="todo" element={<TodoView theme='light'/>}/>
                                <Route path="*" element={<Alert variant="danger">page not found</Alert>}/>
                            </Route>
                        ) : checked && (
                            <Route path="*"
                                   element={<LoginView error={error} onError={(e) => setError(e.message)}/>
                            }/>
                        )
                        }
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
