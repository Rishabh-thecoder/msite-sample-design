/*
This is the common promotionbox component which is used in promotions page.
by the using of this component we can make unlimited promotions in the promotion page.
have also used the props here ie. url,promoImg,mainTitle and subTitle.
navigate hook is also used here, by the using of this hook one can go to the another page
by leaving the current page.
it is different from the basic router.
*/
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function PromotionBox(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card mb-3" >
        <div onClick={() => navigate(props.url)}>
          <img src={props.promoImg} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title pb-0 mb-0">{props.mainTitle}</h5>
          <p className="card-text">{props.subTitle}</p>
        </div>
      </div>
    </div>
  )
}
