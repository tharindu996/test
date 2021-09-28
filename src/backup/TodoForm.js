import React ,{useState, useEffect,useParam}from 'react'
import { useForm } from 'react-hook-form'
import {useHistory} from 'react-router-dom'

export const TodoForm = ({book, onSubmit}) => {

    const [fileName,setFileName] = useState("");
    
    const onChangeFile= (e)=>{
        setFileName(e.target.files[0])
    }
    console.log(fileName);


    const {register,handleSubmit} = useForm({
        defaultValues:{
            title:book ? book.title:"",
            author:book ? book.author:"",
            body:book ? book.body:"",
            price:book?book.price:"",
            pdf:fileName           
        }
    })
    const history = useHistory()

    const submitHandler = handleSubmit((data)=>{
        
       onSubmit(data)
       history.push('/')
      
    })




    return (
        

<div className="create">
                <h2>Edit Book</h2>
                <form action="" method="POST" onSubmit={submitHandler} encType="multipart/form-data" >
                    <label htmlFor="">Book Title</label>
                    <input ref={register} type="text"  name="title" id="title"  required/>
                    <label htmlFor="">Book Price</label>
                    <input ref={register} type="text"  name="price" id="price"  required/>
                    <label htmlFor="">Book Author</label>
                    <input  ref={register} type="text" name="author" id="author"  required/>
                    <label htmlFor="">Description</label>
                    <textarea  ref={register} name="body" id="body" cols="30" rows="5" ></textarea>
                    <label htmlFor="pdf">Upload (pdf only)</label>
                    <input type="file" ref={register} filename="pdf" name="pdf" id="pdf" style={{color:'#359cf1',}} onChange={onChangeFile} />
                    
                    <button>Save Book</button>
                   
                </form>
            
        </div>
    )
}
