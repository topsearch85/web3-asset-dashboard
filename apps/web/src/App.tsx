import './App.css';

import { ApiStatus } from './components/ApiStatus';
import { Header } from './components/Header';
import { PortfolioSummary } from './components/PortfolioSummary';
import { TransactionList } from './components/TransactionList';

function App() {

  return (
    <div className="app">
      <Header />

      <main className="main">
        <ApiStatus />

        <PortfolioSummary />

        <TransactionList />
      </main>
    </div>
  );
}

export default App;