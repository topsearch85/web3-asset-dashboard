import { useAccount, useConnect, useDisconnect } from 'wagmi';

interface HeaderProps {
    onConnect?: () => void;
}

export function Header({ onConnect }: HeaderProps) {
    const { address, isConnected } = useAccount();
    const { connectors, connect, isPending } = useConnect();
    const { disconnect } = useDisconnect();

    const injectedConnector = connectors.find(
        (connector) => connector.id === 'injected',
    );

    const handleConnect = () => {
        if (!injectedConnector) {
            return;
        }

        connect(
            { connector: injectedConnector },
            {
                onSuccess: () => {
                    onConnect?.();
                },
            },
        );
    };

    return (
        <header className="header">
            <div className="header__brand">
                <h1>Web3 Asset Dashboard</h1>
            </div>

            <div className="header__wallet">
                {isConnected && address ? (
                    <>
                        <span className="wallet-address">
                            {address.slice(0, 6)}...{address.slice(-4)}
                        </span>

                        <button
                            type="button"
                            className="button button--secondary"
                            onClick={() => disconnect()}
                        >
                            Disconnect
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        className="button button--primary"
                        onClick={handleConnect}
                        disabled={isPending}
                    >
                        {isPending ? 'Connecting...' : 'Connect Wallet'}
                    </button>
                )}
            </div>
        </header>
    );
}