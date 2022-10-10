import React from 'react'

export default function Footer(props) {
  return (
    <div>
       <ul className="container nav nav-pills fixed-bottom  justify-content-around " id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active " id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab" aria-controls="pills-info" aria-selected="true">
            <img src='../images/icons/info.svg' alt={props.tab1} width={23} /><br />
            {props.tab1}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link gray-color" id="pills-tournament-tab" data-bs-toggle="pill" data-bs-target="#pills-tournament" type="button" role="tab" aria-controls="pills-tournament" aria-selected="false">
          <img src='../images/icons/schedule.svg' alt={props.tab2} width={23}/><br />
          {props.tab2}</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link gray-color" id="pills-leaderboard-tab" data-bs-toggle="pill" data-bs-target="#pills-leaderboard" type="button" role="tab" aria-controls="pills-leaderboard" aria-selected="false">
          <img src='../images/icons/leaderboard.svg' alt={props.tab3} width={23}/><br />
          {props.tab3}</button>  
        </li>
        <li className="nav-item" role="presentation"> 
          <button className="nav-link" id="pills-terms-tab" data-bs-toggle="pill" data-bs-target="#pills-terms" type="button" role="tab" aria-controls="pills-terms" aria-selected="false">
          <img src='../images/icons/tnc.svg' alt={props.tab4} width={23}/><br /> 
          {props.tab4}</button>
        </li>
      </ul>
    </div>
  )
}


Topheader.propTypes = {
    tab1: PropTypes.string,
    tab2: PropTypes.string,
    tab3: PropTypes.string,
    tab4: PropTypes.string,
    tab5: PropTypes.string,
    tab6: PropTypes.string
  };
  
  Topheader.defaultProps = {
    tab1: 'Info',
    tab2: 'Tournaments',
    tab3: 'Leaderboard',
    tab4: 'Tnc',
    tab5: 'Schedule',   
    tab6: 'Other'
    


  };