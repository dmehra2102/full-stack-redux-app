import React, { useEffect } from 'react'
import { getBooks } from '../Redux/Bookaction';
import {useDispatch,useSelector} from "react-redux";
import BookList from './BookList';
import "../App.css";
import Filter from './Filter';
import "../App.css";
import { useLocation, useSearchParams } from 'react-router-dom';

function Books() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const books  = useSelector((state)=> state.book.Books);

    useEffect(()=> {
      if(books?.length==0 || location.search){
        const sortBy = searchParams.get("sortBy");
        const getBookjs = {
          params : {
            category : searchParams.getAll("category"),
            _sort: sortBy && "release_year",
            _order :sortBy 
          }
        }
        
    dispatch(getBooks(getBookjs));
  }

    },[dispatch , location.search]);
  return (
    <div className="main-div">
    <Filter />
    <div className='main-book-div'>
        {books.map((item, index)=> {
            return <BookList item={item} key={index}/>
        })}
    </div>
    </div>
  )
}

export default React.memo(Books);