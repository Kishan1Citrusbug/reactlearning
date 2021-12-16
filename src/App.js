import React  from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Noauth from './components/noauth';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';


function App() {
    return (
      <div className="wrapper">
        <h1>Hello</h1>
        <BrowserRouter>
        <nav>
        <Link to="/noauth">Noauth</Link>
        <br></br>
        <Link to="/dashboard">Dashboard</Link>
        </nav>
          <Routes>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/noauth">
                <Noauth/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App;