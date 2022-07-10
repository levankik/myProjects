import Header from "./Header";
import {Outlet} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useThemeContext} from "./ThemeContext";
import LoadingContext from "./LoadingContext";
import Loading from "./Loading";
import eventBus from "./MyEventBus";
import {Alert, Toast} from 'react-bootstrap';

function Layout({onThemeChange}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const theme = useThemeContext();
    const className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';

    function startLoading() {
        setLoading(true);
    }

    function onLoadingHandler(loading) {
        setLoading(loading);
    }

    function onErrorHandler(error) {
        setError(error?.message||'');
    }

    useEffect(() => {
        eventBus.on('loading', onLoadingHandler);
        eventBus.on('error', onErrorHandler);

        return () => {
            eventBus.detach('loading', onLoadingHandler);
            eventBus.detach('error', onErrorHandler);
        }
    }, []);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            <div className={className}>
                <Header onThemeChange={onThemeChange}/>
                {
                    error && (
                        <Toast
                            show={!!error}
                            onClose={() => setError(null)}
                            className="position-fixed"
                            style={{right: 10, bottom: 10, zIndex: 20000}}
                        >
                            <Toast.Header>
                                <strong className="me-auto">Error</strong>
                            </Toast.Header>
                            <Toast.Body>
                                {error}
                            </Toast.Body>
                        </Toast>
                    )
                }
                <Outlet/>
                {
                    loading && <Loading/>
                }
            </div>
        </LoadingContext.Provider>
    )
}

export default Layout;