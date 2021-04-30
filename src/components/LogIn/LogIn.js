import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogInForm from '../LogInForm/LogInForm';
import LogInWithSocalMedia from '../LogInWithSocalMedia/LogInWithSocalMedia';
import './LogIn.css';

const LogIn = () => {
    document.title = 'Quick Ride - Log In';
    return (
        <div className="login-area">
            <Container>
                <Row className="justify-content-center">
                    <LogInForm />
                    <Col lg={8} md={10} sm={12} className='flex-area'>
                        <div className="horizontal-line"></div>
                        Or
                        <div className="horizontal-line"></div>
                    </Col>
                    <LogInWithSocalMedia />
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;