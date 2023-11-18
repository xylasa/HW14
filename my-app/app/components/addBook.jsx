
import React, { useState } from 'react';

const AddBook = ({ onAddBook, user }) => {
  const [title, setTitle] = useState('');

  const handleAddBook = () => {
    // Logika penambahan buku
    onAddBook({ title, user });
    setTitle('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      {user ? (
        <button onClick={handleAddBook}>Add Book</button>
      ) : (
        <p>Login to add a book</p>
      )}
    </div>
  );
};

export default AddBook;