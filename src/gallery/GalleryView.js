import {useEffect, useState} from 'react';
import React from "react";
import axios from 'axios';
import {Row, Col, Card, Modal} from 'react-bootstrap';
import './GalleryView.scss';
import Photos from "./Photos";

function GalleryView() {
    const [albums, setAlbums] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentAlbum, setCurrentAlbum] = useState(null);

    useEffect(() => {
        async function loadAlbums() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(res.data)
        }

        loadAlbums().catch(console.error);

    }, []);

    const openAlbum = (album) => () => {
           setCurrentAlbum(album);
           setShowModal (true);
       }

    const closeAlbum = () => setShowModal(false);

    return (
        <>
            <Row className="m-3 g-0">
                {
                    albums.map ((album) => (
                        <Col sm={3} key={album.id}>
                            <Card
                                className="h-100 album-card"
                                onClick={openAlbum(album)}
                            >
                                <Card.Body>
                                    {album.title}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <Modal size="lg" show={showModal} onHide={closeAlbum}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {currentAlbum?.title}
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Photos album={currentAlbum}/>
                    </Modal.Body>
            </Modal>
        </>
    )
}

export default GalleryView;