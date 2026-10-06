import { PortfolioCard } from './PortfolioCard';

export function PortfolioSummary() {
    return (
        <section>
            <div className="section-heading">
                <h2>Portfolio</h2>
            </div>

            <div className="portfolio-grid">
                <PortfolioCard
                    label="Total Portfolio"
                    value="$0.00"
                    description="Estimated value"
                />

                <PortfolioCard
                    label="ETH"
                    value="0.000 ETH"
                    description="Native balance"
                />

                <PortfolioCard
                    label="INT"
                    value="0.00 INT"
                    description="ERC-20 balance"
                />

                <PortfolioCard
                    label="Wallet"
                    value="Not connected"
                    description="Connect your wallet to continue"
                />
            </div>
        </section>
    );
}