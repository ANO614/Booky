import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import useBookSearch from "../hooks/useBookSearch";

function Home() {
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

    document.title =
        `Booky - ${filteredBooks.length} Books`;

}, [filteredBooks.length]);

return (
    <div className="container py-4">

        <h2 className="text-center mb-4">
            Explore Our Books
        </h2>

        <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        />

        <p
            className="text-center fw-bold"
            style={{
                color:
                    filteredBooks.length > 0
                        ? "green"
                        : "red"
            }}
        >

            {filteredBooks.length > 0
                ? `${filteredBooks.length} book(s) found`
                : "No books found"}

        </p>

        <BookList books={filteredBooks} />

    </div>
);
}

export default Home;
