import {useSelector, useDispatch} from "react-redux";
import {removeFromCart, clearCart} from "../redux/slices/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const cartItems =
        useSelector(
            (state) => state.cart.items
        );

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">
                🛒 Your Cart
            </h2>

            {cartItems.length === 0 ? (
                <div className="text-center">
                    <h4>
                        Your cart is empty
                    </h4>
                    <p>
                        Go back to Home and add some books!
                    </p>
                </div>

            ) : (
                <>
                    <div className="row">
                        {cartItems.map((book) => (
                            <div
                                className="col-12 col-md-6 mb-3 "
                                key={book.id}
                            >
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4>
                                            {book.title}
                                        </h4>

                                        <p>
                                            <strong>
                                                Author:
                                            </strong>
                                            {" "}
                                            {book.author}
                                        </p>

                                        <p>
                                            <strong>
                                                Genre:
                                            </strong>
                                            {" "}
                                            {book.genre}
                                        </p>

                                        <p>
                                            ⭐ {book.rating}
                                        </p>
                                        <button
                                            className="
                                                btn
                                                btn-danger
                                            "
                                            onClick={() =>
                                                dispatch( removeFromCart(book.id)
                                                    )}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <button
                            className="
                                btn
                                btn-outline-danger
                            "
                            onClick={() =>
                                dispatch( clearCart() )
                            }
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;