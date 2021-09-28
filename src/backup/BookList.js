import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ImgMediaCard from './image'
import {getBooks} from "./api"


 const BookList = () => {
     
    const [items, setItems] = useState([])

    useEffect(() => {
        
      const fetchItems = async ()=>{
          const books = await getBooks()
           setItems(books)          
      }

      fetchItems()
      //console.log(items);
    }, [])


    return (
        <div>
             <div className="content">
            <ImgMediaCard items={items}/>
        </div>
        </div>
    )
}
export default BookList
