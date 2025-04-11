
export default function LeadsTable({leads}) {
    console.log("Leads in Table", leads);

    return (
        <div className="leads-list-container">
            <h2>All Leads</h2>
            <table className="leads-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {leads?.length === 0 ? (
                        <tr>
                            <td colSpan="5">No leads available.</td>
                        </tr>
                    ) : (
                        leads?.map((lead) => (
                            <tr key={lead.id}>
                                <td>{lead.fullName}</td>
                                <td>{lead.email}</td>
                                <td>{lead.phoneNumber ?? "Not available"}</td>
                                <td>{lead.company ?? "Not available"}</td>
                                <td>{lead.notes ?? "Not available"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}