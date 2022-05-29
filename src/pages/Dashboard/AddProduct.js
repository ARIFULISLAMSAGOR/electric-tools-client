import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

import "./AddProduct.css"

const AddProduct = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const url = 'https://dry-thicket-30903.herokuapp.com/AddService'
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    alert("Product added successfully")
                }
            });
    };
    return (
        <div className="addProduct">
            <div >

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 style={{ textAlign: "center", color: "#0D6EFD" }}>ADD SERVICE</h3>
                    <input
                        {...register("email", { required: true })}
                        defaultValue={user.email}

                    />
                    <input
                        {...register("name", { required: true })}
                        placeholder="SERVICE TITLE"
                    />
                    <input
                        {...register("picture", { required: true })}
                        placeholder="SERVICE IMAGE URL"
                    />

                    <input
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="SERVICE PRICE"
                    />

                    <textarea
                        {...register("description", { required: true })}
                        placeholder="SERVICE DESCRIPTION"
                    />

                    <button className="btn btn-primary" type="submit">ADD PRODUCT</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;