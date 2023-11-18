
import React, { useState } from 'react';

const DeleteBook = ({ onDeleteBook, user }) => {
  const handleDeleteBook = () => {
    // Logika penghapusan buku
    onDeleteBook();
  };

  return (
    <div>
      <h2>Delete Book</h2>
      {user ? (
        <button onClick={handleDeleteBook}>Delete Book</button>
      ) : (
        <p>Login to delete a book</p>
      )}
    </div>
  );
};

export default DeleteBook;