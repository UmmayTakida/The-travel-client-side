import React from 'react';
import { Container } from 'react-bootstrap';
import aboutimg from '../../../images/about.jpg'

const Aboutus = () => {
    return (
        <div>
            <Container className="mb-5">
                <h2 className="my-5 text-center fs-1 fw-2 mb-5 header-color text-dark">About Us</h2>
                <div className="row row-cols-2 mt-5">
                    <div className="col">
                        <h1>All Travel Services top agency in America </h1>
                        <p className="about-details">All Travel Services top agency in America. We’ve been providing corporate travel management solutions to many of American’s most respected and established organizations for over 25 years.

                            Our best-in-class consulting services have earned us a reputation for smart, innovative, and efficient business travel management.  Our team is among the most experienced individuals in the industry. Our dedication to our travelers is clear; we’ve retained the same clients for over 25 years, and our employees have an average tenure of 10 years.</p>
                        <br />

                    </div>
                    <div className="col">
                        <img src={aboutimg} alt="" />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Aboutus;