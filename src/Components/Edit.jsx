import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Edit = (props) => {


    const ref = useRef()
    const add = useRef()

   

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm()

    const onSubmit = async (data) => {
    
        const sdata=props.value;
        sdata['pro_id']=props.value._id

        if(data.name){
            sdata.name=data.name
        }
        if(data.link){
            sdata.link=data.link
        }
        if(data.image){
            sdata.image=data.image
        }
        if(data.new_price){
            sdata.new_price=data.new_price
        }
        if(data.tag1){
            sdata.tag1=data.tag1
        }
        if(data.tag2){
            sdata.tag2=data.tag2
        }
        // console.log(sdata)
        let res = await axios.put('https://affiliate-back-x12u.onrender.com/updateproduct', sdata, {
            withCredentials: true,
        });
        if (res.data.status) {
            alert(res.data.message)

        } else {
            alert("Something went wrong")
        }

    }

    useEffect(() => {
        if (isSubmitting) {
            ref.current.style.cursor = 'progress'
            add.current.style.cursor = 'progress'
        }
        else {
            ref.current.style.cursor = 'default'
            add.current.style.cursor = 'default'
        }
    }, [isSubmitting])

    return (
        <div className='fixed z-[50] top-[100px] w-[70vw] bg-gray-300 left-[15vw] h-[600px]'>
            <button onClick={() => { props.setEditpop(-1) }} className='absolute top-[-5px] right-[-5px] bg-black rounded-full p-[5px]'>
                <svg className="w-[15px] h-[15px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>


            <form style={{ width: '100%', backgroundColor: 'transparent' }} ref={ref} onSubmit={handleSubmit(onSubmit)}>
                <div className='fill'>
                    <span>Name</span>
                    <input {...register('name')} placeholder={`${props.value.name}`} type="text" name="name" id="name" />
                </div>
                <div className='prices'>
                    <div className='fill'>
                        <span>Link</span>
                        <input {...register('link')} placeholder={`${props.value.link}`} type="text" name="link" id="link" />
                    </div>
                    <div className='fill'>
                        <span>Price</span>
                        <input {...register('new_price')} placeholder={`${props.value.new_price}`} type="text" name="new_price" id="newprice" />
                    </div>
                </div>
                <div className='fill'>
                        <span>Image Link</span>
                        <input {...register('image')} placeholder={`${props.value.image}`} type="text" name="image" id="link" />
                    </div>

                <div className='flex items-center gap-[100px]'>
                    <div className='flex items-center gap-[10px]'>

                        <div><span className='font-bold'>Category:</span> {props.value.category}</div>
                        
                    </div>

                    <div className='flex items-center gap-[30px]'>

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
                </div>
                <div className='flex gap-[40px] mt-[30px]'>

                    <input style={{ backgroundColor: 'transparent' }} ref={add} disabled={isSubmitting} id='add' type="submit" value="Add" />
                    <button style={{ backgroundColor: 'transparent' }} onClick={() => { props.setEditpop(-1) }} id='cancel' >Cancel</button>
                </div>

            </form>
        </div>
    )
}

export default Edit