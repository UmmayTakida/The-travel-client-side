import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, img, description } = service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-body">
                        <Card.Title><h3>{name}</h3>
                        </Card.Title>
                        <Card.Text >
                            <p>{description.slice(0, 250)}</p>
                            <br />
                            <strong>Price:${price}</strong>
                            <br />
                            {
                                <Link to={`/placeorder/${_id}`}>
                                    <button className="btn btn-primary btn-lg">
                                        Book now
                                    </button>
                                </Link>
                            }



                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;