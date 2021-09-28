
import axios from 'axios'


const url = "http://localhost:4011";

export const getBooks = () => fetch("http://localhost:4011/").then(res => res.json())



export const    createBooks = (todo) => fetch("http://localhost:4011/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateTodo = (todo, id) => fetch(`http://localhost:4011/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) ; 

export const getBook= (id) => fetch(`http://localhost:4011/${id}`).then(res => res.json());

export const getDetail= (id) => fetch(`http://localhost:4011/book/${id}`).then(res => res.json());

export const deleteTask = (id) => axios.delete(`${url}/admin/${id}`);

// export function deleteTask(id){
//   return axios.delete(`${url}/admin/${id}`)
// }