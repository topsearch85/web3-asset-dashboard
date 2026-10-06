interface HeaderProps {
    onConnect: () => void;
}

export function Header({ onConnect }: HeaderProps) {
    return (
        <header className="header">
            <div className="header__inner">
                <div>
                    <h1 className="header__title">Web3 Asset Dashboard</h1>
                    <p className="header__subtitle">
                        Manage your blockchain assets
                    </p>
                </div>

                <button className="button button--primary" onClick={onConnect}>
                    Connect Wallet
                </button>
            </div>
        </header>
    );
}