import { Button, Col, Image, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { logOut } from '../../data/firebaseManager';

const User = () => {
    const [user, setUser] = useContext(UserContext);
    document.title = `Quick Ride - ${user.name}`;
    const handleLogOut = () => {
        logOut().then(() => {
            setUser({});
        })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {
                user.photo
                && <Row className="justify-content-center">
                        <Col xs={6} md={4}>
                            <Image src={user.photo} roundedCircle />
                        </Col>
                    </Row>
            }
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <Button variant="danger" className="navBar-link" onClick={handleLogOut}>Log Out</Button>
        </div>
    );
};

export default User;