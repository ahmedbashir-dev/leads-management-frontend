import { Link, NavLink } from "react-router-dom";
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
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Home
                </NavLink>
                <NavLink to="/leads" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Leads
                </NavLink>
            </nav>
        </header>
    )
}