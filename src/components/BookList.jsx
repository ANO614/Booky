import BookCard from "./BookCard";

function BookList({ books }) {

    return (
        <div className="row">
            {books.map((book) => (
                <div className="col-12 col-md-6 mb-4" 
                key={book.id} >

                <BookCard
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    rating={book.rating}
                    available={book.available}
                    featured={book.featured}
                />
                </div>
            ))}
        </div>
    );
}

export default BookList;