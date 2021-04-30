import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Map from '../Map/Map';
import Place from '../Place/Place';

const Destination = () => {
    document.title = 'Quick Ride - Destination';
    return (
        <Container style={{marginTop: '40px'}}>
            <Row>
                <Place />
                <Map />
            </Row>
        </Container>
    );
};

export default Destination;