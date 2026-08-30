import BookCard from "./BookCard";

function BookList({ books }) {

    return (
        <div className="book-list">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    rating={book.rating}
                    available={book.available}
                    featured={book.featured}
                />
            ))}
        </div>
    );
}

export default BookList;