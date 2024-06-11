import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const BookSearchPage = () => {
    const [books, setBooks] = useState([]);

    const handleSearch = async (query) => {
        if (query) {
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
                setBooks(response.data.docs.map(doc => ({
                    title: doc.title,
                    edition_count: doc.edition_count
                })));
            } catch (error) {
                console.error('Error fetching books:', error);
                setBooks([]);
            }
        } else {
            setBooks([]);
        }
    };

    const addToBookshelf = (book) => {
        let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        bookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    };

    return (
        <div className="search-page">
            <h1>Search for Books</h1>
            <div className="search-bar">
                <table>
                <tbody>
                    <tr>
                        
                        <td></td>
                        <td><SearchBar onSearch={handleSearch} /></td>
                        <td><button className='butsearch' onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button></td>
                    </tr>
                        </tbody>
                </table>
            </div>
            <div className="book-list">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} onAdd={addToBookshelf} />
                ))}
            </div>
            
        </div>
    );
};

export default BookSearchPage;
