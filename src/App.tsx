import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router,  } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar';
import Sidebar from './Components/Nav/Sidebar';
import Home from './Pages/Home/Home'
import {Debug, Counter} from './Pages/Debug/Debug';
import Automation from './Pages/Automation/Automation';
import Users from './Pages/Users/Users';
import About from './Pages/About/About';
const routing = (
    <Switch>
      <Route  path="/home" component={Home} />
      <Route  path="/menu-1" component={Home} />
      <Route  path="/menu-2" component={Home} />
      <Route  path="/licensing" component={Home} />
      <Route  path="/users" component={Users} />
      <Route  path="/project/" component={Home} />
      <Route  path="/project/reports" component={Home} />
      <Route  path="/project/release" component={Home} />
      <Route  path="/project/release/reports" component={Home} />
      <Route  path="/project/release/quality-data" component={Home} />
      <Route  path="/automation" component={Automation} />
      <Route  path="/automation/tests" component={Home} />
      <Route  path="/automation/clients" component={Home} />
      <Route  path="/automation/resources" component={Home} />
      <Route  path="/automation/resources" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/debug" component={Counter} />
      <Route  path="/" exact component={Debug} />

    </Switch>
)

const App: React.FC = () => {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <div style={{ display: "flex", height: "100vh" }} >
        <Sidebar></Sidebar>
        <div className="container">
          {routing}
        </div>
      </div>
    </Router>

    </>

  );
}

export default App;
