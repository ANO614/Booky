import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

import styles from "../styles/BookCard.module.css";

function BookCard({
    id,
    title,
    author,
    genre,
    rating,
    available,
    featured,
}) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const book = {
            id,
            title,
            author,
            genre,
            rating,
        };

        console.log("Adding book:", book);

        dispatch(addToCart(book));
    };

    const availabilityStyle = {
        color: available ? "green" : "red",
        fontWeight: "bold",
    };

    return (
        <div className={`card h-100 shadow-sm ${styles.bookCard}`}>
            <div className="card-body text-center">

                {featured && (
                    <span className="badge text-bg-warning mb-2">
                        ⭐ Featured Book
                    </span>
                )}

                <h3 className="card-title">
                    {title}
                </h3>

                <p>
                    <strong>Author:</strong> {author}
                </p>

                <p>
                    <strong>Genre:</strong> {genre}
                </p>

                <p>
                    ⭐ {rating}
                </p>

                <p style={availabilityStyle}>
                    {available
                        ? "🟢 Available"
                        : "🔴 Currently Borrowed"}
                </p>

                <button
                    className="btn btn-dark w-100"
                    onClick={handleAddToCart}
                >
                    🛒 Add to Cart
                </button>
            </div>
        </div>
    );
}

export default BookCard;