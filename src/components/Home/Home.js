import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import Vehicle from '../Vehicle/Vehicle';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';

const Home = () => {
    document.title = 'Quick Ride - Home';
    return (
        <div className="home">
            <Container>
                <Row className="vehicle-area">
                    <Vehicle imgSrc={bike} title="bike" />
                    <Vehicle imgSrc={car} title="car" />
                    <Vehicle imgSrc={bus} title="bus" />
                    <Vehicle imgSrc={train} title="train" />
                </Row>
            </Container>
        </div>
    );
};

export default Home;