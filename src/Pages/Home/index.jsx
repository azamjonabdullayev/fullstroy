import React,{useRef} from 'react'
import './style.scss'
import full from '../../video/full.mp4'

function index() {
  
  return (
    <>
    <div className="home">
        <div className="home_cont container ">
          <div className="home_top">
            <h2 className="home_title">
              Orzularingiz Biz bilan
            </h2>
          </div>
          <div className="home_video">
            <video src={full} muted loop autoPlay className='home_videoss'></video>
          </div>
        </div>
    </div>
    </>
  )
}

export default index