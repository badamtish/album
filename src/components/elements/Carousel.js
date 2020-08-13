import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function Slides() {
    return (
        <Container fluid id="carousel">
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://album-content.s3.us-east-2.amazonaws.com/carousel/wedding1_16_9.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://album-content.s3.us-east-2.amazonaws.com/carousel/wedding3_16_9.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://album-content.s3.us-east-2.amazonaws.com/carousel/reception1_16_9.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://album-content.s3.us-east-2.amazonaws.com/carousel/reception2_16_9.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Slides;