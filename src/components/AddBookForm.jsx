import React, { useState } from 'react';

export default function AddBookForm({ categories, onBookAdded }) {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        category: '',
        description: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onBookAdded(newBook);
        setNewBook({ title: '', author: '', category: '', description: '' });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={newBook.category}
                    onChange={handleInputChange}
                    required
                >
                    {categories.slice(1).map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={newBook.description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
}