import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({transactions}) => {
    return (
        <>
            <Container>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="/">Budget App</Navbar.Brand>
                    <Nav >
                        <Nav.Link href="/transactions">All Transactions</Nav.Link>
                        <Nav.Link href="/transactions/new">New Transaction</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>Signed in as Guest</Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
};

export default NavBar;