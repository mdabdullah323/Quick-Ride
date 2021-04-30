import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LogInWithSocalMedia.css';
import { facebookSignIn, gitHubSignIn, googleSignIn } from '../../data/firebaseManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import SocalIconButton from '../SocalIconButton/SocalIconButton';

const LogInWithSocalMedia = () => {
    const [user, setUser] = useContext(UserContext);
    const userData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const updateUserData = data => {
        const { displayName, email, photoURL } = data;
        userData.name = displayName;
        userData.email = email;
        userData.photo = photoURL;
        setUser(userData);
        history.replace(from);
    }

    const handleFacebookSignIn = () => {
        facebookSignIn().then(res => {
            updateUserData(res);
        }).catch(err => {
            alert(err);
        });
    }
    const handleGoogleSignIn = () => {
        googleSignIn().then(res => {
            updateUserData(res);
        }).catch(err => {
            alert(err);
        });
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn().then(res => {
            updateUserData(res);
        }).catch(err => {
            alert(err);
        });
    }

    return (
        <Col lg={8} md={10} sm={12}>
            <Container>
                <Row className="socal-account-area" onClick={handleFacebookSignIn}>
                    <SocalIconButton iconName={faFacebook} iconColor='royalblue' title='Continue with Facebook' />
                </Row>

                <Row className="socal-account-area" onClick={handleGoogleSignIn}>
                    <SocalIconButton iconName={faGoogle} iconColor='saddlebrown' title='Continue with Google' />
                </Row>

                <Row className="socal-account-area" onClick={handleGitHubSignIn}>
                    <SocalIconButton iconName={faGithub} title='Continue with GitHub' />
                </Row>
            </Container>
        </Col>
    );
};

export default LogInWithSocalMedia;