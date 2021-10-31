import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <Container className="text-center my-5">
            <div>
                <img src={notFound} alt="" />
                <br /><br /><br />
                <div>
                    <Link to="/home"><button className="bg-primary p-3 text-center fw-2">Go Back</button></Link>
                </div>

            </div>
        </Container>
    );
};

export default NotFound;