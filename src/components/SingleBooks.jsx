import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function SingleBooks() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [item,setItem] = useState({});
    useEffect(()=>{
        axios.get(` http://localhost:8080/Books/${id}`)
        .then((res)=> setItem(res.data))
        .catch((error)=> console.error(error));
    },[]);
    const handleEdit = ()=> {
      navigate(`/books/${id}/edit`);
    }
  return (
    <div>
        <div style={{"maxWidth": "300px", "lineHeight": "15px","padding": "10px"}} className='bookitem-card' key={item.id}>
        <img src={item.cover_photo} alt={item.id} />
        <p>{item.book_name}</p>
        <p>{item.category}</p>
        <p>{item.release_year}</p>
        <button onClick={handleEdit}>Edit</button>
    </div>
    </div>
  )
}

export default SingleBooks