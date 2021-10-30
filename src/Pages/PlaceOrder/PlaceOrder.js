import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const PlaceOrder = () => {
    const { register, formState: { errors } } = useForm();
    const { id } = useParams()
    const { user } = useAuth();
    return (
        <div>
            <h2>this is service id{id}</h2>
            <div>
                <form>

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