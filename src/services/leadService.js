import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function submitLead(leadData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/leads`, leadData);
        return {data: response.data, status: response.status, statusText: response.statusText, error: response.error};
    } catch (error) {
        throw new Error("Error submitting form. Please try again.");
    }
}

export async function fetchLeads() {
    try {
        const response = await axios.get(`${API_BASE_URL}/leads`);
        return {data: response.data, status: response.status};
    } catch (error) {
        throw new Error("Error fetching leads. Please try again.");
    }
}
