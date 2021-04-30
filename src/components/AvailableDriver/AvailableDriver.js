import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './AvailableDriver.css';

const AvailableDriver = (props) => {
    const { vehicle_img, vehicle_type, sit_capacity, cost_per_km } = props.data;
    return (
        <Col lg={12} sm={12} className="driver-area">
            <img src={vehicle_img} alt="" className="vehicle-image" />
            <p>{vehicle_type}</p>
            <p><FontAwesomeIcon icon={faUsers} /> {sit_capacity}</p>
            <p>${cost_per_km}</p>
        </Col>
    );
};

export default AvailableDriver;