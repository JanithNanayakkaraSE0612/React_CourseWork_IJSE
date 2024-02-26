import React, { useEffect, useState } from 'react'
const URL = "http://localhost:3000/books"
import axios from 'axios'

const fetchHandler = async()=>{
    return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
    const [books , setBooks] = useState();
    useEffect(()=>{
       fetchHandler().then((data)=>setBooks(data)) ;
    });
    console.log(books);
  return (
    <div>Books</div>
  )
}

export default Books