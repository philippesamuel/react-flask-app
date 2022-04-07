import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  const [x, setX] = useState([])
  const [pLiq, setPLiq] = useState([])
  const [pVap, setPVap] = useState([])

  useEffect(() => {
    fetch('/vle/pressure').then(res => res.json()).then(data => {
      setX(data.x);
      setPLiq(data.liquid);
      setPVap(data.vapor);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/app1" element={<Portfolio />} />
          <Route path="/portfolio/app2" element={<Portfolio />} />
          <Route path="/portfolio/app3" element={<Portfolio />} />
          <Route path="/contact" element={<Home />} />
        </Route>
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <Plot
    //       data={[
    //         {x: x, y: pVap, type: 'line'},
    //         {x: x, y: pLiq, type: 'line'}
    //       ]}
    //       layout={ {} }
    //     />
    //   </header>
    //   <main>
    //
    //   </main>
    //   <footer>
    //
    //   </footer>
    // </div>
  );
}

export default App;
