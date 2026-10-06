import './App.css';
import { Header } from './components/Header';
import { PortfolioSummary } from './components/PortfolioSummary';
import { TransactionList } from './components/TransactionList';

function App() {
  const handleConnectWallet = () => {
    console.log('Connect wallet clicked');
  };

  return (
    <div className="app">
      <Header onConnect={handleConnectWallet} />

      <main className="main">
        <PortfolioSummary />
        <TransactionList />
      </main>
    </div>
  );
}

export default App;