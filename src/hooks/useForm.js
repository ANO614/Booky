import { useState } from "react";
import axios from "axios";

function useForm() {

    const initialValues = {

        fullName: "",
        email: "",
        password: "",
        phone: "",
        message: ""

    };

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!values.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!values.email.trim()) {
            newErrors.email = "Email is required";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                values.email
            )
        ) {
            newErrors.email = "Please enter a valid email";
        }

        if (!values.password) {
            newErrors.password = "Password is required";

        } else if (values.password.length < 6) {

            newErrors.password = "Password must be at least 6 characters";
        }

        if (!values.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!values.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccess(false);
        const validationErrors = validate();

        if (
            Object.keys(validationErrors).length > 0
        ) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);
        try {

            await axios.post(
                "https://reqres.in/api/users",
                values
            );

            setSuccess(true);
            setValues(initialValues);

        } catch (error) {
            console.error("Axios error:", error);
            setErrors({
                api: "Something went wrong. Please try again."
            });

        } finally {
            setIsSubmitting(false);
        }
    };

    return {

        values,
        errors,
        isSubmitting,
        success,
        handleChange,
        handleSubmit

    };
}

export default useForm;
