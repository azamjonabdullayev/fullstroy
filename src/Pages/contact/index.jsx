import React from 'react'
import './style.scss'

function index() {
  return (
    <>
       <div className="contact_cont container">
        <div className="office_top">
            <h2 className="contact_title">
              Bog'lanish
            </h2>
        </div>
        <div className="contact_box">
          <div className="contact_card left">
            <ul className="contact_left_list">
              <li className="conatct_left_item">
                <h2 className="left_title">
                  Manzilimiz 
                </h2>
                  <p className="left_subtitle">
                  Beruniy metro archa <br /> ko’cha 12-a uy.
                  </p>
              </li>
              <li className="conatct_left_item">
                <h2 className="left_title">
                  Telefon
                </h2>
                <p className="left_subtitle">
                  <a href="tel:+998935376768 " className="telefon_link">+998 93 537 67 68 </a>
                  <a href="tel:+998943039006 " className="telefon_link">+998 94 303 90 06</a>
                  <a href="tel:+998946720600  " className="telefon_link">+998 94 672 06 00 </a>
                  <a href="tel:+998950337474 " className="telefon_link">+998 95 033 74 74</a>
                </p>
              </li>
              <li className="conatct_left_item">
                <h2 className="left__title">
                    Bog'lanish
                </h2>
                <p className="left__subtitle">
                  9:00dan 18:00 gacha
                </p>
              </li>
            </ul>
          </div>
          <div className="contact_card right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.6195253429435!2d69.21293050775415!3d41.34461778533018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d92347c6b23%3A0x8272e80c8b9e8330!2sFull%20Stroy!5e0!3m2!1sru!2s!4v1678304268952!5m2!1sru!2s" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> 
        </div>
       </div>
    </>
  )
}

export default index