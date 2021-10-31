import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../../images/b1.jpg'
import banner2 from '../../../images/b2.jpg'
import banner3 from '../../../images/b5.jpg'
import banner4 from '../../../images/b4.jpg'
import './banner.css'

const Banner = () => {
    return (
        <Container className="banner-container">
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400px"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>The Grand Canyon</h3>
                        <p>The Grand Canyon is one of those must-see, bucket-list destinations that have been attracting visitors for generations</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400px"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>San Francisco</h3>
                        <p>This charming and picturesque West Coast city is the perfect getaway destination for couples</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400px"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Miami</h3>
                        <p>The hot spot of southern Florida, Miami is more than just a great beaching destination</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400px"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Los Angeles</h3>
                        <p>Southern California has a culture all of its own, and Los Angeles is the epicenter of this unique area.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    );
};

export default Banner;