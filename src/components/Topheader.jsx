/*
This is the common header component. 
whereever you want the header just include this.
here i have used some props for title and header background.
i have also passed some default values regarding for color and title.
also i have used navigate hook for back functionity.just try to click on
 back button so you will get an idea.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"

export default function Topheader(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className='pb-46'>
        <div className='fixed-top '>
          <div className={props.colorbox}>
            <div className='py-2'>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex">
                      <div className="flex-fill pl-2">
                        <div onClick={() => navigate("/")} className="back-buttonsvg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                              fill="#FFFFFF" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-fill">{props.title}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Topheader.propTypes = {
  title: PropTypes.string,
  colorbox: PropTypes.string,
};

Topheader.defaultProps = {
  title: 'PokerBaazi',
  colorbox: 'blue-box'
};

