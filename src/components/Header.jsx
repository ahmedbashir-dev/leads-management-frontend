import { Link } from "react-router-dom";
import logo from "../assets/health.png";

export default function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="Vital Hands Icon" />
                <h2>
                    VitalHands
                </h2>
            </div>
            <nav>
                <Link to="/leads">Leads</Link>
            </nav>
        </header>
    )
}