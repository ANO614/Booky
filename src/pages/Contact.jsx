import useForm from "../hooks/useForm";

function Contact() {

    const {
        values,
        errors,
        isSubmitting,
        success,
        handleChange,
        handleSubmit
    } = useForm();

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">
                                Contact Booky
                            </h2>
                            {success && (
                                <div
                                    className="alert alert-success"
                                >
                                    Your message was sent successfully
                                </div>
                            )}
                            {errors.api && (
                                <div
                                    className="alert alert-danger"
                                >
                                    {errors.api}
                                </div>
                            )}
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control"
                                        value={ values.fullName }
                                        onChange={ handleChange}
                                    />

                                    {errors.fullName && (
                                        <small
                                            className="text-danger"
                                        >
                                            {errors.fullName}
                                        </small>
                                    )}

                                </div>

                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={ values.email}
                                        onChange={ handleChange }
                                    />
                                    {errors.email && (
                                        <small
                                            className="text-danger"
                                        >
                                            {errors.email}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={ values.password}
                                        onChange={handleChange }
                                    />
                                    {errors.password && (
                                        <small
                                            className="text-danger"
                                        >
                                            {errors.password}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        value={ values.phone}
                                        onChange={ handleChange }
                                    />
                                    {errors.phone && (
                                        <small
                                            className="text-danger"
                                        >
                                            {errors.phone}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="5"
                                        value={values.message}
                                        onChange={handleChange }
                                    />
                                    {errors.message && (
                                        <small
                                            className="text-danger"
                                        >
                                            {errors.message}
                                        </small>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-dark w-100"
                                    disabled={isSubmitting }
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
