import React from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col } from 'react-bootstrap';

function Video() {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            listType: 'playlist',
            list: 'PLsIdDWICfXlVF-kT6Bn2sB35d9qNHkb8e'
        },
    };
    return (
        <Container fluid id="youtube-container">
            <Row>
                <Col xl={2}><span /></Col>
                <Col xl={8}>
                    <div id="wrapper">
                        <div className='player-wrapper'>
                            <YouTube opts={opts} className='react-player' />
                        </div>
                    </div>
                </Col >
                <Col xl={2}><span /></Col>
            </Row>
        </Container>
    );
}

export default Video;