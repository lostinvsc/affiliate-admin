import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import '../Css/Addproduct.css'
import axios from 'axios'

const Addproduct = () => {
    const ref = useRef()
    const add = useRef()



    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm()

    const onSubmit = async (data) => {
        let sdata = data

        let res = await axios.post('http://localhost:3000/addproduct', sdata, {
            withCredentials: true,
        });
        if (res.data.status) {
            alert(res.data.message)

        } else {
            alert("Something went wrong")
        }
    }



    return (
        <div className='flex bg-gray-400'>
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
                <div className='fill'>
                    <span>Name</span>
                    <input {...register('name')} type="text" name="name" id="name" />
                </div>
                <div className='prices'>
                    <div className='fill'>
                        <span>Affiliate Link</span>
                        <input {...register('link')} type="text" name="link" id="link" />
                    </div>
                    <div className='fill'>
                        <span>Price</span>
                        <input {...register('new_price')} type="text" name="new_price" id="newprice" />
                    </div>
                </div>
            
                    <div className='fill'>
                        <span>Image Link</span>
                        <input {...register('image')} type="text" name="image" id="link" />
                    </div>
            

                <div className='flex items-center gap-[30px]'>

                    <select {...register('category')} name="category" id="category">
                   
                        <option value="tech">Tech</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="accessories">Accessories</option>

                    </select>

                    <select  {...register('tag1')} name="tag1" id="tag1">
                        <option value="">All</option>
                        <option value="new">New collection</option>
                        <option value="famous">Famous</option>
                    </select>

                    <select {...register('tag2')} name="tag2" id="tag2">
                        <option value="">All</option>
                        <option value="new">New collection</option>
                        <option value="famous">Famous</option>

                    </select>
                </div>

                <input ref={add} disabled={isSubmitting} id='add' type="submit" value="Add" />

            </form>

          
          


        </div>
    )
}

export default Addproduct