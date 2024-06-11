import React from 'react';

const Bookshelf = ({ books }) => {
    return (
        <div className="bookshelf">
            {books.map((book, index) => (
                <div className="book-card" key={index}>
                    <h3>{book.title}</h3>
                    <p>Edition Count: {book.edition_count}</p>
                </div>
            ))}
        </div>
    );
};

export default Bookshelf;
