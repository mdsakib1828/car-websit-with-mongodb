import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Addservice.css'

const Addservice = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {

        console.log(data)
        axios.post("http://localhost:5000/services",data)
        .then(res=>{
            if(res.data.insertedId){
                alert('added successfully')
                reset();
            }
        })
    };
    return (
      <div>
        <h1>add services </h1>
        <form className="service" onSubmit={handleSubmit(onSubmit)}>
          <input
            Placeholder="name"
            {...register("Nme", { required: true, maxLength: 20 })}
          />
          <textarea placeholder="description" {...register("description")} />
          <input placeholder="price" type="number" {...register("price")} />
          <input placeholder="img url" {...register("img")} />
          <input type="submit" />
        </form>
      </div>
    );
};

export default Addservice;