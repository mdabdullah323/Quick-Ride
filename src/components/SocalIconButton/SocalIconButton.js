import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';

const SocalIconButton = ({iconName, iconColor, title}) => {
    return (
        <>
            <Col md={3}>
                <FontAwesomeIcon icon={iconName} className="socal-icon" style={{ color: `${iconColor}` }} />
            </Col>
            <Col md={6} style={{ textAlign: 'center' }}>
                <h5>{title}</h5>
            </Col>
        </>
    );
};

export default SocalIconButton;