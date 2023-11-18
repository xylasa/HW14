'Use client'
import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import DeleteBook from '../components/DeleteBook';

const Page = () => {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    // ... daftar buku lainnya
  ]);

  const handleLogin = (username) => {
    // Logika autentikasi, mungkin menyimpan informasi pengguna di state
    setUser({ username });
  };

  const handleRegister = (username, password) => {
    // Logika pendaftaran pengguna
    // Misalnya, bisa mengirimkan data ke API untuk membuat akun baru
  };

  const handleAddBook = (newBook) => {
    // Logika penambahan buku
    setBooks([...books, { id: books.length + 1, title: newBook.title }]);
  };

  const handleDeleteBook = () => {
    // Logika penghapusan buku
    // Misalnya, bisa mengirimkan data ke API untuk menghapus buku
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Konten yang sudah ada */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {user ? (
          <>
            <BookList books={books} />
            <AddBook onAddBook={handleAddBook} user={user} />
            <DeleteBook onDeleteBook={handleDeleteBook} user={user} />
          </>
        ) : (
          <>
            <Login onLogin={handleLogin} />
            <Register onRegister={handleRegister} />
          </>
        )}
      </div>
    </main>
  );
};

export default Page;