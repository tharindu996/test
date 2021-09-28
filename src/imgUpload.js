import React ,{useState, useEffect,useParam}from 'react'
import { useForm } from 'react-hook-form'
import {useHistory} from 'react-router-dom'

export const ImgUpload = () => {


    const {register,handleSubmit} = useForm({
        defaultValues:{
          
           
        }
    })
    const history = useHistory()

    const submitHandler = handleSubmit((data)=>{
        //alert(data)
       onSubmit(data)
       history.push('/')
      
    })




    return (
        

<div className="create">
                <h2>Edit Book</h2>
                <form action="" onSubmit={submitHandler} encType="multipart/form-data" >
                    <label htmlFor="">Book Title</label>
                    <input ref={register} type="text"  name="title" id="title"  required/>
                    <label htmlFor="">Book Price</label>
                    <input ref={register} type="text"  name="title" id="price"  required/>
                    <label htmlFor="">Book Author</label>
                    <input  ref={register} type="text" name="author" id="author"  required/>
                    <label htmlFor="">Description</label>
                    <textarea  ref={register} name="body" id="body" cols="30" rows="5" ></textarea>
                   
                    
                    <button>Save Book</button>
                   
                </form>
            
        </div>
    )
}
