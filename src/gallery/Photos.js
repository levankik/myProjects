import {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Col, Image, Row, Modal} from "react-bootstrap";
import React from "react";

function Photos({album}) {
    const [photos, setPhotos] = useState([]);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function loadPhotos() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    albumId: album.id,
                }
            });
            setPhotos(res.data);
        }

        loadPhotos().catch(console.error);
    }, [album.id]);

    const openPhoto = (photo) => () => {
        setCurrentPhoto(photo);
        setShowModal(true);
    }

    const closePhoto = () => setShowModal(false);


    return (
        <>
            <Row className="m-3 g-2">
                {
                    photos.map((photo) => (
                        <Col md={6} lg={3} key={album.id}>
                            <Card
                                className="h-100"
                                onClick={openPhoto(photo)}
                            >
                                <Card.Img src={photo.thumbnailUrl} alt={photo.title}/>
                                <Card.Body>
                                    <Card.Text>
                                        <small>{photo.title}</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <Modal fullscreen show={showModal} onHide={closePhoto}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentPhoto?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <Image
                        src={currentPhoto?.url}
                        alt={currentPhoto?.title}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                    }}
                    >

                    </Image>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Photos;