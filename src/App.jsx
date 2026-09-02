import { useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";
import "./App.css";

function App() {
    const books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        rating: 4.9,
        available: true,
        featured: true
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        rating: 4.6,
        available: false,
        featured: false
    },
    {
        id: 3,
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        rating: 4.8,
        available: true,
        featured: true
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        rating: 4.5,
        available: true,
        featured: false
    },
    {
        id: 5,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        rating: 4.7,
        available: false,
        featured: true
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        rating: 4.6,
        available: true,
        featured: false
    }
    ];

    const {
        searchTerm,
        setSearchTerm,
        filteredBooks
    } = useBookSearch(books);

    useEffect(() => {
        document.title = `Book Explorer - ${filteredBooks.length} Books`;
    }, [filteredBooks.length]);

    return (
        <div className="app">

            <Header />

            <main className="container py-4">

                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <p
                    className="text-center fw-bold"
                    style={{
                        color: filteredBooks.length > 0
                            ? "green"
                            : "red"
                    }}
                >
                    {filteredBooks.length > 0
                        ? `${filteredBooks.length} book(s) found`
                        : "No books found"}
                </p>

                <BookList books={filteredBooks} />

            </main>

            <Footer />

        </div>
    );

}

export default App;