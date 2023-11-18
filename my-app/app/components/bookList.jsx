/* use client */
import React, { useState } from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      {/* Menambahkan konten tambahan di dalam BookList */}
      <div>
        {/* Konten tambahan */}
        <p>Additional Content Goes Here</p>
      </div>
    </div>
  );
};

export default BookList;
