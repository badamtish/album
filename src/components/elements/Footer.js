import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <Navbar id="footer">
            <Container>
                <Row>
                    <Col id="credits">
                        <Row>
                            <Col>
                                <img src="https://album-content.s3.us-east-2.amazonaws.com/kalnad.png" id="logo-image" />
                            </Col>
                            <Col>
                                <div id="icons">
                                    <a id="logo" href="https://www.facebook.com/224155541013872/posts/3047368982025833/?sfnsn=wiwspmo&extid=KZXnLStn7SaZV7Yx" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a id="logo" href="https://www.instagram.com/kalnadstudios/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col id="copyright">
                        <Row>
                            <Col><span /></Col>
                            <Col>
                                Created by
                            </Col>
                            <Col><span /></Col>
                        </Row>
                        <Row>
                            <Col><span /></Col>
                            <Col>
                                <p><a id="logo" href="http://badamtish.com/" target="_blank">&copy;&nbsp; badamtish.com</a></p>
                            </Col>
                            <Col><span /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Footer;