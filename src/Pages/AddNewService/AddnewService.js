import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

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
        <div>
            <h1>Please add new Service</h1>
            <div className="add-service">
                <h2>Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" />

                    <input {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input {...register("Arrival Date")} placeholder="Arrival Date" />
                    <input {...register("Departure Date")} placeholder="Departure Date" />
                    <input type="submit" />
                    <br />
                    <textarea {...register("description")} placeholder="Description" />
                </form>
            </div>
        </div>
    );
};

export default AddnewService;
