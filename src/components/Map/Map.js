import React from 'react';
import { Col } from 'react-bootstrap';
import SimpleMap from '../GoogleMap/GoogleMap';

const Map = () => {
    return (
        <Col sm={12} md={7} lg={8}>
            <SimpleMap />
        </Col>
    );
};

export default Map;