import { useReducer } from "react";

const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    notes: ""
}

function leadFormReducer(state, action){
    switch(action.type){
        case "UPDATE_FIELD":
            return {...state, [action.field]: action.value};
        case "RESET_FORM":
            return initialState;
        default:
            return state;
    }
}


export default function LeadForm() {
    const [formState, dispatch] = useReducer(leadFormReducer, initialState);

    function handleChange(event){
        dispatch({
            type:"UPDATE_FIELD",
            field: event.target.name,
            value: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Form submitted:", formState);
        dispatch({type: "RESET_FORM"});
    }

    return(
        <form onSubmit={handleSubmit} className="lead-form">
            <h2>Get Personalized Homecare Assistance</h2>
            <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input type="text" id="fullName" name="fullName" value={formState.fullName} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formState.phoneNumber} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" value={formState.company} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" value={formState.notes} name="notes" onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn">Get Assistance</button>
        </form>
    )
}