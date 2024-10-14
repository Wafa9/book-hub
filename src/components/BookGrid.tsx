import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export default function BookGrid() {

    interface Book {
        id : number;
        name : string;
    }


    interface FetchBooksResponse {
        count : number ;
        results : Book[]
    }
    const [ books , setBooks] = useState<Book[]>([]);
    const [ error , setError] =useState('');

    useEffect(() =>{
        apiClient.get<FetchBooksResponse>('/books')
        .then(res => setBooks(res.data.results))
        .catch(err => setError(err.message))
    }, [])
    if (error) return <p>Error: {error}</p>
  return (
    <ul>
        {books.map(book => <li key={book.id}></li>)}
        {books.map(book => <h2 key={book.name}></h2>)}
    </ul>
  )
}
