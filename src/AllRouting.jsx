/*
Every page inside the pages folder needs to be here,
here we have done the routing of all of the page/component.
coz by doing this, we will get the url of every page/component which we want.
 */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Baazi1000x from './pages/Baazi1000x';
import BaaziTurbo from './pages/BaaziTurbo';
import CashRoyal5 from './pages/CashRoyal5';
import Promotions from './Promotions';

export default function AllRouting() {
  return (
    <div>
      <Router>     
      <Routes>          
          <Route path="/"  element={<Promotions/>} />
          {/* <Route path="/:pagename"  element={<Promotions path="${}"/>} /> */}
          <Route path="/baazi1000x" element={<Baazi1000x/>} />
          <Route path="/cashroyal5" element={<CashRoyal5/>} />   
          <Route path="/baaziturbo" element={<BaaziTurbo/>} />              
      </Routes>
    </Router>
    </div>
  )
}
