import { useEffect, useState } from 'react';
import { getHealth } from '../services/api';

type ApiStatusState = 'checking' | 'connected' | 'error';

export function ApiStatus() {
    const [status, setStatus] = useState<ApiStatusState>('checking');

    useEffect(() => {
        let mounted = true;

        getHealth()
            .then(() => {
                if (mounted) {
                    setStatus('connected');
                }
            })
            .catch(() => {
                if (mounted) {
                    setStatus('error');
                }
            });

        return () => {
            mounted = false;
        };
    }, []);

    if (status === 'checking') {
        return (
            <div className="api-status api-status--checking">
                API: Checking...
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="api-status api-status--error">
                API: Disconnected
            </div>
        );
    }

    return (
        <div className="api-status api-status--connected">
            API: Connected
        </div>
    );
}