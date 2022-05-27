import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Reveiw = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // const product = { email: user.email }
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div>
            <h2 className='text-center text-primary mt-4'>Add new Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='ratings' type="number" {...register("quantity")} />
            </form>
        </div>
    );
};

export default Reveiw;