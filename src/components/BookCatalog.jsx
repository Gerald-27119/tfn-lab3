import React, { useState } from 'react';
import BOOKS from '../assets/books-data';
import AddBookForm from './AddBookForm';

export default function BookCatalog({ books }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [bookList, setBookList] = useState(books);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleBookAdded = (newBook) => {
        const updatedBooks = [...bookList, newBook];
        setBookList(updatedBooks);
    };

    const filteredBooks = selectedCategory === 'All'
        ? bookList
        : bookList.filter(book => book.category === selectedCategory);

    const categories = ['All', ...new Set(bookList.map(book => book.category))];

    return (
        <main>
            <section className="listSection">
            <h1>Book Catalog</h1>
            <label htmlFor="category-select">Filter by category:</label>
            <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <p>Description: {book.description}</p>
                    </li>
                ))}
            </ul>
            </section>
            <section className="formSection">
            <h2>Add a New Book</h2>
            <AddBookForm categories={categories} onBookAdded={handleBookAdded} />
            </section>
        </main>
    );
}