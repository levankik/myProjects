import {Button, Container} from "react-bootstrap";
import {useUserContext} from "./UserContext";
import UsersTable from "./UsersTable";

function HomeView() {
    const {setUser} = useUserContext();
    return (
        <Container>
        <Button onClick={() => setUser ({username: 'jemal'})}>change user</Button>
        </Container>
    );
}

export default HomeView;