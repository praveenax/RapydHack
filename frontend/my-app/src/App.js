
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Explore from './pages/Explore';
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"></header>
        <Sidebar />
        <section className="main-section">
          <Route path="/" component={Dashboard} exact />
          <Route path="/library" component={Library} />
          <Route path="/explore" component={Explore} />
          <Route path="/wallet" component={Wallet} />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
