
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import BookList from './BookList';
import { EditBook } from './EditBook';
import { CreateBook } from './CreateBook';
import BookDetails from './BookDetails';
import {getBooks} from "./api"
import Footer from "./component/Footer";
import Header from "./component/Header";
import Admin from "./views/admin/admin";
import {deleteTask} from './api'

function App() {


const [items, setItems] = useState([])  
const [search,setSearch]= useState("")
const [searchRes,setsearchRes]= useState([])





  const fetchItems = async()=>{
    const books = await getBooks()
     setItems(books)
     console.log(items);        
} 



useEffect(() => {
  fetchItems();
}, [])

//hello github


const searchHandler=(term)=>{
  console.log(term);
  setSearch(term)

  if(search !=""){
    const newList = items.filter((td)=>{
     return Object.values(td.title).join('').toLowerCase()
      .includes(search.toLowerCase());
    })
    setsearchRes(newList)
  }else{
    setsearchRes(items)
  }

}
  return (
    
    <div >
    <NavBar  search={search} searchHandler={searchHandler} /> 
       
    <Switch>
     <Route exact path="/"> <BookList search={search} searchHandler={searchHandler} items={search.length < 1? items :searchRes} fetchItems={fetchItems} /> </Route>
     <Route  path="/edit/:id"> <EditBook /> </Route>
     <Route   path="/create"> <CreateBook /> </Route>
     <Route   path="/book/:id"> <BookDetails  latest={items} /> </Route>
     <Route   path="/admin"> <Admin items={items}  /> </Route>

    </Switch>
   


    </div>
   
  );
}

export default App;
