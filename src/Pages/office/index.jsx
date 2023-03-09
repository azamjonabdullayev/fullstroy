import React from 'react'
import office from '../../video/office.mp4'
import './style.scss'

function index() {
  return (
    <>
      <div className="office_cont container">
        <div className="office_top">
          <h2 className="office_title">
            Bizning Office
          </h2>
        </div>
        <div className="office_card">
          <video src={office} muted autoPlay loop className="office_video"></video>
        </div>
      </div>
    </>
  )
}

export default index