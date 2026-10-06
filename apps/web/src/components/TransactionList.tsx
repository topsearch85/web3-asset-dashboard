export function TransactionList() {
    return (
        <section className="transactions">
            <div className="section-heading">
                <h2>Recent Transactions</h2>
            </div>

            <div className="transaction-empty">
                <p>No transactions yet.</p>
                <span>
                    Your blockchain transactions will appear here.
                </span>
            </div>
        </section>
    );
}