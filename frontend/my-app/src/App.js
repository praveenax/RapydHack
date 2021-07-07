
import './App.css';
import { Route, useLocation } from "react-router-dom";
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Explore from './pages/Explore';
import Wallet from "./pages/Wallet";
import profileIcon from '../src/assets/images/profile-icon.png';
import logoutIcon from '../src/assets/images/logout-icon.png';
import Login from './pages/Login';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      {location.pathname.includes("/login") ? null : <Sidebar />}
      <section className="main-section">
        {location.pathname.includes("/login") ? null : (
          <div className="header flex">
            <div className="profile-section flex items-center">
              <img src={profileIcon} width="24px" alt="" />
              <p>Praveen AX</p>
            </div>
            <div className="logout flex items-center">
              <img src={logoutIcon} width="20px" alt="" />
              <p>Logout</p>
            </div>
          </div>
        )}
        <div className="px-40">
          <Route path="/" component={Dashboard} exact />
          <Route path="/login" component={Login} />
          <Route path="/library" component={Library} />
          <Route path="/explore" component={Explore} />
          <Route path="/wallet" component={Wallet} />
        </div>
      </section>
    </div>
  );
}

export default App;
