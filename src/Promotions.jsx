/*
Every new promotion/tournament comes here first.
i have included promotionbox component here.
i have passed the values in the promotionbox by the using of props.
*/
import React from 'react'
import PromotionBox from './components/PromotionBox';
import Topheader from './components/Topheader'

export default function Promotions() {

  return (
    <div>
      <Topheader title="Promotions" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='my-3'>
              <img src="../images/thumbnils/ig-banner.jpg" className="card-img-top" alt="..." />
            </div>
             <PromotionBox url="/baazi1000x"  promoImg="../images/thumbnils/1000x-msite-thumb.jpg" mainTitle="Baazi 1000x" subTitle="Guaranteed Prize: 5 Cr+"/>
             <PromotionBox url="/cashroyal5"  promoImg="../images/thumbnils/cash-royale-5.0-msite.jpg" mainTitle="Cash Royal 5.0" subTitle="Guaranteed Prize: 6 Cr"/>
             <PromotionBox url=""             promoImg="../images/thumbnils/refer-a-friend.jpg" mainTitle="Refer a Friend" subTitle="Earn Upto : 1 Lac per friend"/>
          
          </div>
        </div>
      </div>
    </div>
  )
}
