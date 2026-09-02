import styles from "../styles/BookCard.module.css";

function BookCard({
    title,
    author,
    genre,
    rating,
    available,
    featured
}) {

const availabilityStyle = {
    color: available ? "green" : "red",
    fontWeight: "bold"
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

            <p className="card-text">
                <strong>Author:</strong> {author}
            </p>

            <p className="card-text">
                <strong>Genre:</strong> {genre}
            </p>

            <p className="card-text">
                ⭐ {rating}
            </p>

            <p style={availabilityStyle}>

                {available
                    ? "🟢 Available"
                    : "🔴 Currently Borrowed"}

            </p>

        </div>

    </div>
);

}

export default BookCard;
