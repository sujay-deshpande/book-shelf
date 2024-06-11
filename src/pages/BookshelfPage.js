import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBooks(bookshelf);
    }, []);

    return (
        <div>
            <h1>My Bookshelf</h1>
            <Bookshelf books={books} />
        </div>
    );
};

export default BookshelfPage;
