import { API_URL } from '../config';

export interface HealthResponse {
    status: string;
    service: string;
    timestamp: string;
}

export async function getHealth(): Promise<HealthResponse> {
    const response = await fetch(`${API_URL}/api/health`);

    if (!response.ok) {
        throw new Error('Unable to connect to API');
    }

    return response.json();
}