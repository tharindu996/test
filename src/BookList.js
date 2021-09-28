import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ImgMediaCard from './image'
import {getBooks} from "./api"
import Pagi from "./Pagi";
import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg' 
import Header from "./component/Header";
import { Input } from 'semantic-ui-react'


 const BookList = ({items,fetchItems,searchHandler,search ,hadleDelete}) => {

    const [cpage,setCpage]=useState(1);
    const [ppp,setPpp]=useState(8);

    useEffect(() => {
        
        fetchItems();
       
    }, [])

    const indexOfLastPost =cpage*ppp ;
    const indexOfFirstPage =indexOfLastPost - ppp;
    const currentPosts = items.slice(indexOfFirstPage,indexOfLastPost)
    const [tar,setTar] = useState('')

   const paginate =(pageNumber)=>{
        setCpage(pageNumber);
    }


  
    
    const getTerm=(e)=>{
        console.log(e.target.value);
        setTar(e.target.value)
        searchHandler(e.target.value)
    
    } 


    return (
<div> 
<Header/>
<ParticlesBg className="bubbles" type="circle" bg={true}  />   

        <div style={{marginTop:'25vw'}} id='bookItems'>

     

  
            <input type="text" name="serach" style={{margin:'auto',display: 'flex',width:'15vw',border:'solid',borderWidth:2,borderRadius:5}} 

                        value={search} placeholder="Search"  autoComplete="off"  onChange={getTerm} id=""/>

            <i className="search icon"></i>




             <div className="content" style={{marginBottom:'7vw'}}>
             <p style={{marginBottom:'1.5vw'}}>Page : {cpage}</p>
            <ImgMediaCard items={currentPosts} hadleDelete={hadleDelete}/>
            <p style={{marginTop:'2vw'}}></p>
            <Pagi postPerPage={ppp} totalPosts={items.length}  paginate={paginate}  />
        </div>
        </div></div>
    )
}
export default BookList
