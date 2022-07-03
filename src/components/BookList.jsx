import React from 'react';
import { useNavigate } from 'react-router';
import "../App.css";

function BookList({item}) {
  const navigate = useNavigate();
  const handleclick = ()=>{
    console.log(item.id);
    navigate(`/books/${item.id}`);
  }
  return (
    <div onClick={handleclick} className='bookitem-card' key={item.id}>
        <img src={item.cover_photo} alt={item.id} />
        <p>{item.book_name}</p>
        <p>{item.category}</p>
        <p>{item.release_year}</p>
    </div>
  )
}

export default BookList