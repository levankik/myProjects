import {Button, Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useUserContext} from "../contexts/UserContext";

function TodoEditModal({task, onAfterEdit, onHide}) {
    const [value, setValue] = useState(String(task?.text) || ''); // მარტო ''-ს რომ ვტოვებ აქ ფრჩხილებში, მაინც იმუშავებს
    // ალბათ useEffect-ის გამო

    const {user} = useUserContext();

    useEffect(() => {
        task && setValue(task.text || '');
    }, [task]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onAfterEdit && onAfterEdit({...task, text: value, username: user.username});
        close();
    }

    const close = () => {
        onHide && onHide();
    }

    return (
        task ? (
            <Modal show={true} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Editing task ${task.text}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {task.text}
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="enter new task"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <Button type="submit" variant="outline-secondary">
                                Edit
                            </Button>
                        </InputGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        ) : null
    )
}


export default TodoEditModal;