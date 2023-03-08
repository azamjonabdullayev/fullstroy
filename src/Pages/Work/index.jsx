import React from 'react'
import {Link} from 'react-router-dom'
import uy1 from '../../../public/2-etaj_yotoqhona.jpg'
import strelka from '../../assets/strelka.svg'
import './style.scss'
function index() {
  return (
    <>
        <div className="work_cont container">
            <div className="work_top">
                <h2 className="work_title">
                    Bizning Loyihalarimiz 
                </h2>
            </div>
            <div className="work_card">
                <Link to={`/project/id`} className='card_link'>
                    <div className="card_imagebox">
                        <img src={uy1} alt="" className="card_img" />

                    </div>
                    <div className="card_titlebox">
                        <h2 className="card_title">
                            Interyer dizayn
                        </h2>
                        <img src={strelka} alt="" className="strelka" />
                    </div>
                </Link>
                <Link to={`/project/id`} className='card_link'>
                    <div className="card_imagebox">
                        <img src={uy1} alt="" className="card_img" />

                    </div>
                    <div className="card_titlebox">
                        <h2 className="card_title">
                            Interyer dizayn
                        </h2>
                        <img src={strelka} alt="" className="strelka" />
                    </div>
                </Link>
                <Link to={`/project/id`} className='card_link'>
                    <div className="card_imagebox">
                        <img src={uy1} alt="" className="card_img" />

                    </div>
                    <div className="card_titlebox">
                        <h2 className="card_title">
                            Interyer dizayn
                        </h2>
                        <img src={strelka} alt="" className="strelka" />
                    </div>
                </Link>
                <Link to={`/project/id`} className='card_link'>
                    <div className="card_imagebox">
                        <img src={uy1} alt="" className="card_img" />

                    </div>
                    <div className="card_titlebox">
                        <h2 className="card_title">
                            Interyer dizayn
                        </h2>
                        <img src={strelka} alt="" className="strelka" />
                    </div>
                </Link>
                <Link to={`/project/id`} className='card_link'>
                    <div className="card_imagebox">
                        <img src={uy1} alt="" className="card_img" />

                    </div>
                    <div className="card_titlebox">
                        <h2 className="card_title">
                            Interyer dizayn
                        </h2>
                        <img src={strelka} alt="" className="strelka" />
                    </div>
                </Link>
                <Link to={`/project/id`} className='card_link'>
                    <div className="card_imagebox">
                        <img src={uy1} alt="" className="card_img" />

                    </div>
                    <div className="card_titlebox">
                        <h2 className="card_title">
                            Interyer dizayn
                        </h2>
                        <img src={strelka} alt="" className="strelka" />
                    </div>
                </Link>
                
                
            </div>
        </div>
    </>
  )
}

export default index