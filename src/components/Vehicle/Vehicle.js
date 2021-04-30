import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { VehicleContext } from '../../App';

const Vehicle = ({imgSrc, title}) => {
    const [selectedVehicle, setSelectedVehicle] = useContext(VehicleContext);
    const history = useHistory();
    const handleVehicleSelection = () => {
        setSelectedVehicle(title);
        history.push("/destination");
    }
    return (
        <Col lg={3} md={4} sm={6} xs={12} style={{marginTop: '20px'}}>
            <Card style={{padding: '20px', boxShadow: '5px 5px 10px lightgrey', cursor: 'pointer', backgroundColor: 'rgba(112, 128, 144, 0.8)', color: 'white'}} onClick={handleVehicleSelection}>
                <Card.Img variant="top" src={imgSrc} style={{padding: '20px'}}/>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>{title.toUpperCase()}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Vehicle;