import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './Placeorder.css'

const PlaceOrder = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams()
    const { user } = useAuth();
    const [detailsService, setServiceDetails] = useState([]);
    // const [singleService, setSingleService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceDetails(data))

    }, [])
    // // setServiceDetails(data.myorders)
    // useEffect(() => {
    //     const singleServiceFound = detailsService.find((sr) => sr?._id === id);
    //     setSingleService(singleServiceFound);
    //     console.log(setSingleService)

    // }, [detailsService])
    const onSubmit = data => {
        console.log(data)


        fetch('http://localhost:5000/myorders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    return (


        <div className="place-order mx-5 my-5">
            <div>
                <img src={detailsService?.img} alt="" />
                <p>{detailsService?.description}</p>

            </div>
            <h2>Confirm Your Order</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>



        </div>
    );
};

export default PlaceOrder;