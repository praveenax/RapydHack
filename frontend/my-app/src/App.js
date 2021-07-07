
import './App.css';
import { Route, useLocation, Redirect } from "react-router-dom";
import Sidebar from './pages/Sidebar';
import Topbar from './pages/Topbar';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Explore from './pages/Explore';
import Wallet from "./pages/Wallet";
import Earning from "./pages/Earning";

import Login from './pages/Login';
// import { useState } from 'react';

function App() {
  const location = useLocation();
  // const [username,setUsername] = useState('')
  console.log(location);
  return (
    <div className="App">
      {location.pathname.includes("/login") ? null : <Sidebar />}
      <section className="main-section">
        {location.pathname.includes("/login") ? null : (
          <Topbar />
         
        )}
        <div
          className={location.pathname.includes("/login") ? "px-40 pt-40" : "body-section px-40"}
        >
          <Route path="/dashboard" component={Dashboard}  />
          <Route path="/login" component={Login} />
          <Route path="/library" component={Library} />
          <Route path="/explore" component={Explore} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/earning" component={Earning} />
          
          <Redirect exact from="/" to="login" />
        </div>
      </section>
    </div>
  );
}

export default App;
