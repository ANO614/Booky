function BookCard({
    title,
    author,
    genre,
    rating,
    available,
    featured
}) {

    return (

        <div className="book-card">

            {featured && (
                <p className="featured">
                    Featured Book
                </p>
            )}

            <h2>{title}</h2>
            <p> Author: {author} </p>
            <p> Genre: {genre} </p>
            <p> Rating: {rating} </p>

            <p>
                {available
                    ? "🟢 Available"
                    : "🔴 Currently Unavailable"}
            </p>

        </div>

    );
}

export default BookCard;