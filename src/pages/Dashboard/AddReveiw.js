import React from 'react';
import { useForm } from "react-hook-form";


const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const [success, isSuccess] = React.useState(false)
    const onSubmit = (data) => {
        if (data.rating > 1 && data.rating < 6) {

        }
        console.log(register)

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    isSuccess(true);

                }
                reset();
            });

    };
    return (
        <div className='bg-blue p-8 text-purple-500 rounded-2xl'>
            <h2>add a review</h2>

            <form className="details-form" onSubmit={handleSubmit(onSubmit)}>
                <input className='bg-black mb-3' placeholder='name' {...register("name")} />{" "}
                <br />
                <input
                    required
                    type="number"
                    className='bg-black'
                    placeholder="INPUT A NUMBER FOR RATING(MIN:0 AND MAX:5)"
                    {...register("rating", { min: 0, max: 5 })}
                />
                <br />
                <textarea className='bg-black' style={{
                    width: "80%", height: "80px",
                    marginTop: "10px"
                }} {...register("text")} placeholder="Message" /> <br />
                <input className="custom-btn" type="submit" value="Send" />
            </form>
            {success && alert("Review add")}
        </div>
    );
};

export default AddReview;