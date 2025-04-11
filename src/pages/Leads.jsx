import { useEffect, useState } from "react";
import LeadsTable from "../components/LeadsTable";
import { fetchLeads } from "../services/leadService";

export default function Leads() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function loadLeads() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchLeads();
            setLeads(response.data); 
            } catch (error) {
            console.error("Error fetching leads:", error);
            setError("Failed to load leads. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadLeads();
    }, []);

    return (
        <div className="leads-container">
            {loading && <div className="loader"></div>}
            {error && <div className="error-message">{error}</div>}

            {!loading && !error && <LeadsTable leads={leads} />}
        </div>
    );
}
