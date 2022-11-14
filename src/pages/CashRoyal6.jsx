import React from 'react'
import leaderbaoard from '../json/1000x/leaderboard.json';
import scheduleFinal from '../json/cash-royal/holdem/scheduleFinal.json'
import Topheader from '../components/Topheader';

export default function CashRoyal6() {
  const alldata=[...scheduleFinal.micro,...scheduleFinal.low,...scheduleFinal.mid,...scheduleFinal.high]
  return (
    <div>
      <Topheader colorbox="black-box" title="Cash Royal 6.0" />
      <div className=" tab-content pb-5 mb-5" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab" tabindex="0">
          <div className='text-center'>
            <div>
              <img src='./images/cash-royal5.0/1new.png' alt='img1' className='img-fluid' />
            </div>
            <h3 className='text-center pt-4'>Series Highlights</h3>
            <div className='p-3'>
              <img src='./images/cash-royal5.0/2new.png' alt='img2' className='img-fluid' />
            </div>

            <div className='px-3'>
              <img src='./images/cash-royal5.0/3new.png' alt='img3' className='img-fluid' />
            </div>

            <div className='p-3'>
              <img src='./images/cash-royal5.0/4new.png' alt='img4' className='img-fluid' />
            </div>
            <div className='p-3'>
              <img src='./images/cash-royal5.0/5new.png' alt='img4' className='img-fluid' />
            </div>

            <div className='px-3'>
              <img src='./images/cash-royal5.0/6new.png' alt='img5' className='img-fluid' />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-holdem" role="tabpanel" aria-labelledby="pills-holdem-tab" tabindex="0">
          <div className='pt-2'>
            <div className="container mt-3">

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#allh">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#microh">Micro</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#lowh">Low</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#midh">Mid</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#highh">High</a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="allh" className=" tab-pane active"><br />
                  {                 
                     alldata.map(scheduleFinal => {
                      return (
                        <div>
                          {(scheduleFinal.Break) &&
                            <div className='pb-3'>
                              <img src="images/icons/stakes-icon.svg" alt="" /><strong> Stakes:{scheduleFinal.Stakes}</strong>
                            </div>
                          }
                          <div className='schedule-box'>
                            <span className="bluebox-txt">HOLD’EM</span>
                            <div><p className='p-3 m-0'>{scheduleFinal.Time}</p></div>
                            <div className="d-flex justify-content-between mb-4 blue-shade px-3 py-2">
                              <div className='yellow-color'> <img src="images/icons/award-trophy.png" width={22} alt="" /> ₹{scheduleFinal.PrizePool}</div>
                              <div>Places Paid- <strong>{scheduleFinal['Places Paid']}</strong></div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div id="microh" className=" tab-pane fade"><br />
                  {
                    scheduleFinal.micro.map(scheduleFinal => {
                      return (
                        <div>
                          {
                            (scheduleFinal.Break) &&
                            <div>
                              <div className='pb-3'>
                                <img src="images/icons/stakes-icon.svg" alt="" /><strong> Stakes:{scheduleFinal.Stakes}</strong>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  }
                  {
                    scheduleFinal.micro.map(scheduleFinal => {
                      return(
                        <div>
                           <div className='schedule-box'>
                                  <span className="bluebox-txt">HOLD’EM</span>
                                  <div><p className='p-3 m-0'>{scheduleFinal.Time}</p></div>
                                  <div className="d-flex justify-content-between mb-4 blue-shade px-3 py-2">
                                    <div className='yellow-color'> <img src="images/icons/award-trophy.png" width={22} alt="" /> ₹{scheduleFinal.PrizePool}</div>
                                    <div>Places Paid- <strong>{scheduleFinal['Places Paid']}</strong></div>
                                  </div>
                                </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div id="lowh" className=" tab-pane fade"><br />
                {
                    scheduleFinal.low.map(scheduleFinal => {
                      return (
                        <div>
                          {

                            (scheduleFinal.Break) &&
                            <div>
                              <div className='pb-3'>
                                <img src="images/icons/stakes-icon.svg" alt="" /><strong> Stakes:{scheduleFinal.Stakes}</strong>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  }
                  {
                    scheduleFinal.low.map(scheduleFinal => {
                      return(
                        <div>
                           <div className='schedule-box'>
                                  <span className="bluebox-txt">HOLD’EM</span>
                                  <div><p className='p-3 m-0'>{scheduleFinal.Time}</p></div>
                                  <div className="d-flex justify-content-between mb-4 blue-shade px-3 py-2">
                                    <div className='yellow-color'> <img src="images/icons/award-trophy.png" width={22} alt="" /> ₹{scheduleFinal.PrizePool}</div>
                                    <div>Places Paid- <strong>{scheduleFinal['Places Paid']}</strong></div>
                                  </div>
                                </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div id="midh" className="tab-pane fade"><br />
                {
                    scheduleFinal.mid.map(scheduleFinal => {
                      return (
                        <div>
                          {

                            (scheduleFinal.Break) &&
                            <div>
                              <div className='pb-3'>
                                <img src="images/icons/stakes-icon.svg" alt="" /><strong> Stakes:{scheduleFinal.Stakes}</strong>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  }
                  {
                    scheduleFinal.mid.map(scheduleFinal => {
                      return(
                        <div>
                           <div className='schedule-box'>
                                  <span className="bluebox-txt">HOLD’EM</span>
                                  <div><p className='p-3 m-0'>{scheduleFinal.Time}</p></div>
                                  <div className="d-flex justify-content-between mb-4 blue-shade px-3 py-2">
                                    <div className='yellow-color'> <img src="images/icons/award-trophy.png" width={22} alt="" /> ₹{scheduleFinal.PrizePool}</div>
                                    <div>Places Paid- <strong>{scheduleFinal['Places Paid']}</strong></div>
                                  </div>
                                </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div id="highh" className=" tab-pane fade"><br />
                {
                    scheduleFinal.high.map(scheduleFinal => {
                      return (
                        <div>
                          {

                            (scheduleFinal.Break) &&
                            <div>
                              <div className='pb-3'>
                                <img src="images/icons/stakes-icon.svg" alt="" /><strong> Stakes:{scheduleFinal.Stakes}</strong>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  }
                  {
                    scheduleFinal.high.map(scheduleFinal => {
                      return(
                        <div>
                           <div className='schedule-box'>
                                  <span className="bluebox-txt">HOLD’EM</span>
                                  <div><p className='p-3 m-0'>{scheduleFinal.Time}</p></div>
                                  <div className="d-flex justify-content-between mb-4 blue-shade px-3 py-2">
                                    <div className='yellow-color'> <img src="images/icons/award-trophy.png" width={22} alt="" /> ₹{scheduleFinal.PrizePool}</div>
                                    <div>Places Paid- <strong>{scheduleFinal['Places Paid']}</strong></div>
                                  </div>
                                </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-plo" role="tabpanel" aria-labelledby="pills-plo-tab" tabindex="0">
          <h3 className='text-center pt-2'>Series Leaderboard</h3>
          <div className="d-flex justify-content-around">
            <div className="px-2"><b>Rank</b></div>
            <div className="px-2"><b>Prize</b></div>
          </div>

          {
            leaderbaoard.map(leaderbaoard => {
              return (
                <>
                  <div className="d-flex justify-content-around white-box">
                    <div className="p-2">#{leaderbaoard.winnernumber}</div>
                    <div className="p-2"><img src='../images/icons/cash.png' alt='cash icon' width={20} /> ₹{leaderbaoard.prize}</div>
                  </div>
                </>
              )

            })
          }
        </div>
        <div className="tab-pane fade" id="pills-terms" role="tabpanel" aria-labelledby="pills-terms-tab" tabindex="0">
          <h3 className='pt-3 text-center'>
            <img src='../images/icons/tnc-icon.svg' width={40} alt='terms and conditions' style={{ paddingRight: "10px" }} />
            Terms and Conditions
          </h3>
          <ul className='tnc-points px-5'>
            <li>
              All tournaments will begin promptly at the scheduled time stated in the Tournament Lobby. We reserve the right to delay or cancel a tournament without prior notice. In case a user is registered and the tournament gets canceled, the Buy-in amount will be refunded to the user.

            </li>
            <li>
              Seats are assigned at random. Seat changes are not permitted.
            </li>
            <li>
              Prizes will be awarded as stated in the Tournament Lobby, except when a deal is made or the tournament is canceled.
            </li>
            <li>
              The prize structure is not finalized and keeps on changing as more users enter the tournament until registration has closed and the rebuy and/or add-on period is over.
            </li>
            <li>
              If two or more players are eliminated on the same hand, a player with more chips at the start of the hand finishes higher than a player with fewer chips.
            </li>
            <li>
              In order to be eligible to rebuy in a rebuy tournament, you must have the funds available in your account. Funds currently in play in other games are not considered to be available.
            </li>
            <li>
              Important information about each tournament, including the blind structure, length of rounds, rebuy and break information, can be found by selecting the tournament in the lobby. We reserve the right to change the parameters of any tournament at any time without notice.
            </li>
            <li>
              Tickets won through a contest, satellite, rewards or any other promotion for a particular tournament cannot be exchanged for another tournament.
            </li>
            <li>
              A player can be disqualified from the promotions and their winnings can be blocked if they are found guilty of any misconduct or fraudulent activities such as multi-accounting, chip dumping etc. in violation of the PokerBaazi.com policy. The final decision will be at the discretion of the PokerBaazi team.
            </li>
            <li>
              You understand and acknowledge that once a game/tournament has commenced, not being able to play due to slow internet connections, faulty hardware, internet connection failure, low computer configuration or for some other reason are not attributable to us and the same do not entitle you to refund of the entry fee you may have paid for participation.
            </li>
            <li>
              PokerBaazi.com reserves the right to change the terms and conditions without prior notice.
            </li>
            <li>
              By taking part in this promotion, you agree to allow PokerBaazi to share your name, username and images to social media and third party media channels.
            </li>
            <li>
              All Leaderboard prizes will be credited as Real Cash Bonus.
            </li>
          </ul>
        </div>
      </div>

      <ul className="container nav nav-pills fixed-bottom  justify-content-around " id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active " id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab" aria-controls="pills-info" aria-selected="true">
            <img src='../images/icons/info.svg' alt='info' width={23} /><br />
            Info
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link gray-color" id="pills-holdem-tab" data-bs-toggle="pill" data-bs-target="#pills-holdem" type="button" role="tab" aria-controls="pills-holdem" aria-selected="false">
            <img src='../images/icons/schedule.svg' alt='schedule' width={23} /><br />
            Holdem</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link gray-color" id="pills-plo-tab" data-bs-toggle="pill" data-bs-target="#pills-plo" type="button" role="tab" aria-controls="pills-plo" aria-selected="false">
            <img src='../images/icons/leaderboard.svg' alt='plo' width={23} /><br />
            Plo</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-terms-tab" data-bs-toggle="pill" data-bs-target="#pills-terms" type="button" role="tab" aria-controls="pills-terms" aria-selected="false">
            <img src='../images/icons/tnc.svg' alt='terms' width={23} /><br />
            TnC</button>
        </li>
      </ul>
    </div>
  )
}