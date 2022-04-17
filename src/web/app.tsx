import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './styles.css';

const App = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/App2");
  }

  return (
    <div>
      <button onClick={handleClick}>Hello World</button>
    </div>
  )
}
const App2 = () => {
  return (
    <div>
      Hello World2
    </div>
  )
};

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/App2" element={<App2 />} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);


