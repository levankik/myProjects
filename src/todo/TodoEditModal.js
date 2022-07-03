import {Button, Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import {Plus as AddIcon} from "react-bootstrap-icons";
import {useEffect, useState} from "react";

function TodoEditModal ({task, onAfterEdit, onHide}) {
    const [value, setValue] = useState(String(task?.text)||'');

    useEffect(() => {
        task && setValue(task.text || '');
    }, [task]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onAfterEdit && onAfterEdit ({...task, text: value});
        close();
    }

    const close = () => onHide && onHide();
    return (
        task ? (
        <Modal show={true} onHide={() => onHide && onHide()}>
            <Modal.Header closeButton>
                <Modal.Title>{`Editing task ${task.text}`}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form  onSubmit={handleSubmit}>
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