import axios from "axios";
import { useState } from "react";
import { useReducer } from "react";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    notes: ""
}

function leadFormReducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return { ...state, [action.field]: action.value };
        case "RESET_FORM":
            return initialState;
        default:
            return state;
    }
}


export default function LeadForm() {
    const [formState, dispatch] = useReducer(leadFormReducer, initialState);
    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState(null);

    function handleChange(event) {
        dispatch({
            type: "UPDATE_FIELD",
            field: event.target.name,
            value: event.target.value
        })
    }


    function validateForm() {
        const newErrors = {};

        if (!formState.fullName.trim()) newErrors.fullname = "Name is required.";
        if (!formState.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = "Invalid email format.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };


    async function handleSubmit(event) {
        event.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post(`${API_BASE_URL}/leads`, formState);
            console.log("Response:", response.data);
            setStatusMessage({ type: "success", text: "Form submitted successfully!" });
            dispatch({ type: "RESET_FORM" });
            setErrors({});
            setTimeout(() => {
                setStatusMessage(null);
            }, 3000); // Clear message after 3 seconds
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatusMessage({ type: "error", text: "Failed to submit form. Please try again." });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="lead-form">
            <h2>Get Personalized Homecare Assistance</h2>
            {statusMessage && (
                <div className={`status-message ${statusMessage.type}`}>
                    {statusMessage.text}
                </div>
            )}
            <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input type="text" id="fullName" name="fullName" value={formState.fullName} onChange={handleChange} required />
                {errors.fullname && <span className="error">{errors.fullname}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formState.phoneNumber} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" value={formState.company} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" value={formState.notes} name="notes" onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn">Get Assistance</button>
        </form>
    )
}