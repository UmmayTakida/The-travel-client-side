import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
// import { useParams } from 'react-router';

const Myorder = () => {
    const [order, setOrder] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        fetch('https://serene-lowlands-88457.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <h1>See All my orders</h1>

        </div >
    );
};

export default Myorder;