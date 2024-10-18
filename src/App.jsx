import React from 'react';
import BookCatalog from "./components/BookCatalog";
import BOOKS from "./assets/books-data";

const App = () => {
    return (
        <BookCatalog books={BOOKS}/>
    );
};

export default App;