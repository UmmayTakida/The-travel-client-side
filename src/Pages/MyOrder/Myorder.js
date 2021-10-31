import React, { useState, useEffect } from 'react';
// import useAuth from '../../hooks/useAuth';
// import { useParams } from 'react-router';

const Myorder = () => {
    const [order, setOrder] = useState([]);
    // const { user } = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/myorders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const handleDeleteOrder = id => {
        const proceed = window.confirm('are u sure ,you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/myorders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = order.filter(or => or._id !== id)
                        setOrder(remainingOrders)
                    }
                })
        }
    }

    return (

        <div>
            <h2>Show my orders</h2>
            {
                order.map(or =>
                    <div >
                        <input type="email" value={or.email} id="" />
                        <input type="text" value={or.name} id="" />
                        <input type="number" value={or.phone} id="" />
                        <input type="text" value={or.address} id="" />

                        <input type="text" value={or.city} id="" />

                        <button onClick={() => handleDeleteOrder(or._id)}>Cancel Order</button>







                    </div>
                )
            }


        </div >
    );
};

export default Myorder;
{/* <input type="email" value={or.email} id="" />
                        <input type="text" value={or.name} id="" />
                        <input type="number" value={or.phone} id="" />
                        <input type="text" value={or.address} id="" />

                        <input type="text" value={or.city} id="" /> */}