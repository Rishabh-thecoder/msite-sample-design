/*
Every page inside the pages folder needs to be here,
here we have done the routing of all of the page/component.
coz by doing this, we will get the url of every page/component which we want.
 */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Baazi1000x from './pages/Baazi1000x';
import BaaziTurbo from './pages/BaaziTurbo';
import CashRoyal6 from './pages/CashRoyal6';
import Faq from './pages/Faq';
import FaqDesktop from './pages/FaqDesktop';
import FaqPartner from './pages/FaqPartner';
import GrinderSeries from './pages/GrinderSeries';
import Promotions from './Promotions';

export default function AllRouting() {
  let { pagename } = useParams();
  return (
    <div>
      {/* <h1>ID: {id}</h1> */}
      <Router>     
      <Routes>          
          <Route path="/promotions"  element={<Promotions/>} />
          {/* <Route path="/:pagename"  element={<Promotions path="${}"/>} /> */}
          <Route path="/baazi1000x" element={<Baazi1000x/>} />
          <Route path="/cashroyal6" element={<CashRoyal6/>} />   
          <Route path="/baaziturbo" element={<BaaziTurbo/>} />   
          <Route path="/" element={<Faq/>} />  
          <Route path="/faqdesktop" element={<FaqDesktop/>} />  
          <Route path="/faqpartner" element={<FaqPartner/>} /> 
          <Route path="/grinderseries" element={<GrinderSeries/>} />  
      </Routes>
    </Router>
    </div>
  )
}
