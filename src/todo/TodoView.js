import {Button, Container, Form, FormControl, InputGroup, ListGroup, Modal, Row} from "react-bootstrap";
import {Plus as AddIcon, XCircleFill as DeleteIcon, Pencil as EditIcon} from 'react-bootstrap-icons';
import {useEffect, useState} from "react";
import TodoEditModal from "./TodoEditModal";
import api from './api.js';

function MyListItem({task, onToggleDone, onDelete, onEdit}) {

    const handleDelete = () => {
        onDelete && onDelete(task);
    }

    const handleEdit = () => {
        onEdit && onEdit(task);
    }
    return (
        <ListGroup.Item
            className={`d-flex align-items-center ${task.done ? `text-muted` : ``}`}
        >
            <Form.Check className="me-3" onChange={onToggleDone} checked={task.done}/>
            <div className="flex-fill">
                {
                    task.done ? (
                        <del>{task.text}</del>
                    ) : (
                        <span>{task.text}</span>
                    )
                }
            </div>
            <Button variant="link" size="sm" onClick={handleEdit}>
                <EditIcon size={20} className="text-secondary"/>
            </Button>
            <Button variant="link" size="sm" onClick={handleDelete}>
                <DeleteIcon size={20} className="text-danger"/>
            </Button>
        </ListGroup.Item>
    )
}

function TodoView() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        loadTasks().catch(console.error);
    }, []);

    const loadTasks = async () => {
            const {data} = await api.get('/');
            setTasks(data);
        };

    const addNewTask = async (event) => {
        event.preventDefault();
        await api.post('/', {text: value, done: false});
        await loadTasks();
        setValue('');
    };

    const toggleDone = (id) => async (event) => {
        const task = tasks.find((task) => task.id === id);
        task.done = event.target.checked;
        await api.put (`//${id}` , task);
        await loadTasks();
    };

    const deleteTask = async (task) => {
        const answer = window.confirm(`Are you sure you want to delete task ${task.text}`)
        if (answer) {
           await api.delete(task.id);
           await loadTasks();
        }
    }

    const updateTask = async (updatedTask) => {
        await api.put(updatedTask.id, updatedTask);
        await loadTasks();
    }

    const openEditModal = (task) => {
        setCurrentTask(task);
    }

    const hideEditModal = (task) => {
        setCurrentTask(task);
    }

    return (
        <Container className="my-3">
            <Form onSubmit={addNewTask}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="add new task"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button type="submit" variant="outline-secondary">
                        <AddIcon size="30"/>
                    </Button>
                </InputGroup>
            </Form>

            <ListGroup className="mb-3">
                {
                    tasks.filter(task => !task.done).map((task) => (
                        <MyListItem
                            key={task.id}
                            task={task}
                            onToggleDone={toggleDone(task.id)}
                            onDelete={deleteTask}
                            onEdit={openEditModal}
                        />
                    ))
                }
            </ListGroup>

            <ListGroup className="mb-3">
                {
                    tasks.filter(task => task.done).map((task) => (
                        <MyListItem
                            key={task.id}
                            task={task}
                            onToggleDone={toggleDone(task.id)}
                            onDelete={deleteTask}
                            onEdit={openEditModal}
                        />
                    ))
                }
            </ListGroup>
            <TodoEditModal
                task={currentTask}
                onAfterEdit={updateTask}
                onHide={hideEditModal}
            />
        </Container>
    )
}


export default TodoView;
