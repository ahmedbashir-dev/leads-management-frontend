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
                <a href="">Leads</a>
            </nav>
        </header>
    )
}