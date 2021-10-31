import React from 'react';
import { Container } from 'react-bootstrap';

const Ourteams = () => {
    return (
        <Container className="px-3 bg-light">
            <h2 className="my-5 text-center fs-1 fw-2 mb-5 header-color">Our Teams</h2>
            <div className="row row-cols-3 g-5 mb-5 mt-5 bg-light">
                <div className="col"><h3>Grim Goltsman</h3>
                    <p>Phychaistists</p>

                </div>
                <div className="col"><h3>Robert Jonathan</h3>
                    <p>Manager</p>
                </div>
                <div className="col"><h3>David Niklas</h3>
                    <p>service manager</p>
                </div>


            </div>
            <div className="row row-cols-3 g-5 mb-5 mt-5 bg-light">
                <div className="col"><h3>Milton Hinricks</h3>
                    <p>Tour manager</p>
                </div>
                <div className="col"><h3>Metthew Wood</h3>
                    <p>Assistant</p>
                </div>
                <div className="col"><h3>Cathy Jonathan</h3>
                    <p>manager</p>
                </div>


            </div>
        </Container >

    )
};

export default Ourteams;