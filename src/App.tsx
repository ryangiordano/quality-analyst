import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar';
import Sidebar from './Components/Nav/Sidebar';
import Home from './Pages/Home'
const routing = (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/menu-1" component={Home} />
    <Route path="/menu-2" component={Home} />
    <Route path="/licensing" component={Home} />
    <Route path="/users" component={Home} />
    <Route path="/project/" component={Home} />
    <Route path="/project/reports" component={Home} />
    <Route path="/project/release" component={Home} />
    <Route path="/project/release/reports" component={Home} />
    <Route path="/project/release/quality-data" component={Home} />
    <Route path="/automation" component={Home} />
    <Route path="/automation/tests" component={Home} />
    <Route path="/automation/clients" component={Home} />
    <Route path="/automation/resources" component={Home} />
    <Route path="/automation/resources" component={Home} />
  </Router>
)

const App: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex", height: "100vh" }} >
        <Sidebar></Sidebar>
        <div className="container">
          {routing}
        </div>
      </div>
    </>

  );
}

export default App;
