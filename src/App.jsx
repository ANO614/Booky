import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {

    const books = [
        {
            id: 1,
            title: "Harry Potter",
            author: "J.K. Rowling",
            genre: "Fantasy",
            rating: 4.8,
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
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.9,
            available: true,
            featured: true
        }
    ];

    return (
        <>
            <Header />
            <BookList books={books} />
        </>
    );
}

export default App;