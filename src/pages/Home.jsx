import LeadForm from "../components/LeadForm";
import heroImage from "../assets/hero-background.png";

export default function Home() {
    return(
        <div className="hero-container">
            <div className="hero-section-left">
                <h2>Providing Compassionate Home Care</h2>
                <p>We offer personalized home care services to support your loved ones with dignity and respect.</p>
                <img src={heroImage} className="hero-img" alt="Homecare" />
            </div>
            <div className="hero-section-right">
                <LeadForm/>
            </div>
        </div>
    )
}