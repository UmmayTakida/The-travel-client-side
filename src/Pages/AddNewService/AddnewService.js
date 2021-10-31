import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';

import './addServices.css'

const AddnewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }


    return (
        <Container>

            <h1>Add Service</h1>
            <div className="add-service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" />
                    <br />

                    <input {...register("price")} placeholder="price" />
                    <br />
                    <input {...register("img")} placeholder="image url" />
                    <br />
                    <input {...register("Arrival Date")} placeholder="Arrival Date" />
                    <br />
                    <input {...register("Departure Date")} placeholder="Departure Date" />

                    <br />
                    <textarea {...register("description")} placeholder="Description" />
                    <br />
                    <input className="submit-btn" type="submit" />
                </form>
            </div>

        </Container>
    );
};

export default AddnewService;
