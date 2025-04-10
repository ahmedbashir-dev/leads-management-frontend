export default function LeadForm() {
    return(
        <form className="lead-form">
            <h2>Get Personalized Homecare Assistance</h2>
            <div className="form-group">
                <label htmlFor="fullname">Name</label>
                <input type="text" id="fullname" name="fullname" required/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required/>
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" required/>
            </div>

            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" required></textarea>
            </div>

            <button type="submit" className="btn">Get Assistance</button>
        </form>
    )
}