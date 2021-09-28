import React ,{useState, useEffect,useParam}from 'react'
import { useForm } from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export const TodoForm = ({book, }) => {

    const [pic,setFileName] = useState("");
    const [image,setFileName2] = useState("");
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [author,setAuthor] = useState("");
    const [body,setBody] = useState("");
    

    
    
    const history =useHistory()

    const changeOnclick =(e)=>{
        //e.preventDefault();
        const formData= new FormData();
        formData.append("title", title)
        formData.append("price", price)
        formData.append("author", author)
        formData.append("body", body)
        formData.append("pic", pic)
        formData.append("fname", pic.name)
        formData.append("fname2", image.name)
        formData.append("image", image)
        
        axios.post("http://localhost:4011/create",formData)
       history.push("/")
       
        .catch((err)=>console.log(err))

    }

    return (
        

<div className="create">
                <h2>Book</h2>
                <form method="POST"  onSubmit={changeOnclick} encType="multipart/form-data" >
                    <label htmlFor="">Book Title</label>
                    <input  type="text"  name="title" id="title" onChange={(e)=>setTitle(e.target.value)}  required/>
                    <label htmlFor="">Book Price</label>
                    <input  type="text"  name="price" id="price" onChange={(e)=>setPrice(e.target.value)} required/>
                    <label htmlFor="">Book Author</label>
                    <input   type="text" name="author" id="author" onChange={(e)=>setAuthor(e.target.value)} required/>
                    <label htmlFor="">Description</label>
                    <textarea  name="body" id="body" cols="30" rows="5" onChange={(e)=>setBody(e.target.value)} ></textarea>
                   <label htmlFor="">Upload PDF</label>
                    <input type="file" name="pic"  id="pic" onChange={(e)=>setFileName(e.target.files[0])}  />
                   <label htmlFor="">Upload Image</label>
                    <input type="file" name="image"  id="image" onChange={(e)=>setFileName2(e.target.files[0])} />

                    <button>Save Book</button>
                   
                </form>
            
        </div>
    )
}
