"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealth = getHealth;
const API_URL = 'http://localhost:3001';
async function getHealth() {
    const response = await fetch(`${API_URL}/api/health`);
    if (!response.ok) {
        throw new Error('API request failed');
    }
    return response.json();
}
//# sourceMappingURL=api.js.map