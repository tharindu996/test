import React ,{useState, useEffect}from 'react'
import { useForm } from 'react-hook-form'
import {useHistory , useRouteMatch} from 'react-router-dom'
import { TodoForm } from './TodoForm'
import {getBook} from './api'



export const EditBook = () => {

    const  match = useRouteMatch()
    const [book,setBook] =useState()

    useEffect(() => {
      const fetchBook = async ()=>{
          const book =  await getBook(match.params.id)
          setBook(book)
          console.log(book);
      }
      fetchBook()

    }, [])

   const onSubmit =(data)=>{
       alert(JSON.stringify(data))
   }
    return book ?  (<TodoForm  book={book} onSubmit={onSubmit} />) : (<p>Loading...</p>)
}
