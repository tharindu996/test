import React ,{useState, useEffect,useParam}from 'react'
import { useForm } from 'react-hook-form'
import {useHistory} from 'react-router-dom'

export const TodoForm = ({book, onSubmit}) => {

    const [fileName,setFileName] = useState("");
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [author,setAuthor] = useState("");
    const [body,setBody] = useState("");
    
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
            
           
        }
    })
    const history = useHistory()

    const submitHandler = handleSubmit((data)=>{
        const formData = new FormData()
        formData.append("pic", data.pic[0])
        
       onSubmit({
           title:title,
           price:price,
           author:author,
           body:body,
           pic:fileName.name 
       })
       history.push('/')
      
    })




    return (
        

<div className="create">
                <h2>Edit Book</h2>
                <form  onSubmit={submitHandler} encType="multipart/form-data" >
                    <label htmlFor="">Book Title</label>
                    <input ref={register} type="text"  name="title" id="title" onChange={(e)=>setTitle(e.target.value)}  required/>
                    <label htmlFor="">Book Price</label>
                    <input ref={register} type="text"  name="price" id="price" onChange={(e)=>setPrice(e.target.value)} required/>
                    <label htmlFor="">Book Author</label>
                    <input  ref={register} type="text" name="author" id="author" onChange={(e)=>setAuthor(e.target.value)} required/>
                    <label htmlFor="">Description</label>
                    <textarea  ref={register} name="body" id="body" cols="30" rows="5" onChange={(e)=>setBody(e.target.value)} ></textarea>
                    <label htmlFor="pdf">Upload (pdf only)</label>
                    <input type="file" ref={register}  name="pic" id="pic" style={{color:'#359cf1',}} onChange={onChangeFile} />
                    
                    <button>Save Book</button>
                   
                </form>
            
        </div>
    )
}
