import React from 'react'
import '../office/style.scss'
import './style.scss'
import led from '../../video/office.mp4'
function index() {
  return (
    <>
        <div className="office_cont container">
            <div className="office_top">
                <h2 className="office_title">
                    videolar
                </h2>
            </div>
            <div className="instagram_cards">
                <div className="instagram_card">
                  <video src={led} controls></video>
                </div>
                <div className="instagram_card">
                  <video src={led} controls></video>
                </div>
                <div className="instagram_card">
                  <video src={led} controls></video>
                </div>
                <div className="instagram_card">
                  <video src={led} controls></video>
                </div>
            </div>
        </div>
    </>
  )
}

export default index