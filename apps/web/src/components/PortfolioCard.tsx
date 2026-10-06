interface PortfolioCardProps {
    label: string;
    value: string;
    description?: string;
}

export function PortfolioCard({
    label,
    value,
    description,
}: PortfolioCardProps) {
    return (
        <div className="portfolio-card">
            <p className="portfolio-card__label">{label}</p>

            <p className="portfolio-card__value">{value}</p>

            {description && (
                <p className="portfolio-card__description">
                    {description}
                </p>
            )}
        </div>
    );
}