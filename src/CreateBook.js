import React from 'react'
import { useForm } from 'react-hook-form'
import { createBooks } from './api'
import { TodoForm } from './TodoForm'
import {useHistory} from 'react-router-dom'   


export const CreateBook = () => {

    const {register,handleSubmit} = useForm()
    const history = useHistory()


    const onSubmit = async (data)=>{

     await createBooks(data).then(()=>{history.push("/")})
     
        
     
    
       alert( JSON.stringify(data))
    }
    return (
        <div className="content">
            
        <TodoForm />
        </div>
    )
}
