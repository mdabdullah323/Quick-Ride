import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './TopNavigationBar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboySide } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import { logOut } from '../../data/firebaseManager';

const TopNavigationBar = () => {
    const [user, setUser] = useContext(UserContext);

    const handleLogOut = () => {
        logOut().then(() => {
            setUser({});
        })
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faHatCowboySide} /> Quick Ride</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home" className="navBar-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination" className="navBar-link">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className="navBar-link">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="navBar-link">Contact</Nav.Link>
                        {
                            user.name
                            && <Nav.Link as={Link} to="/user" className="navBar-link" style={{fontWeight: '700'}}>{user.name}</Nav.Link>
                        }
                        {
                            !user.name
                            ? <Button as={Link} to="/login" variant="danger" className="navBar-link">Login</Button>
                            : <Button variant="danger" className="navBar-link" onClick={handleLogOut}>Log Out</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavigationBar;