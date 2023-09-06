import React from 'react';
import { useForm } from "react-hook-form"
function Project1(props) {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="container">
                <h1 className='text-center mt-2'>Student form</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label >FirstName:</label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} className='form-control mt-2' />
                    <label >LastName:</label>
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} className='form-control mt-2' />
                    <label className='mt-2'>Select gender:</label>
                    <select {...register("gender")} className='form-select mt-2'>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <label htmlFor="" className='mt-2'>Age:</label>
                    <input type="number" {...register("age", { min: 18, max: 99 })} className='form-control' />
                    <input type="submit" className="btn btn-outline-info mt-2" />
                </form>
            </div>
        </>
    );
}

export default Project1;