import React, { useState } from "react";
import { Link } from "react-router-dom";
import telegram from "../../assets/telegram.png";
import logo from '../../assets/logo.svg'
import "./style.scss";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [active, setActive]=useState('#')
  

  return (
    <>
      <header className="header">
        <div className="nav_cont">
          <Link to='/' className="logobox">
            <img src={logo} alt="" className="logo_img" />
            <h2 className="logo_text">FullStroy</h2>
          </Link>
          <nav className={`${show ? "mobile-nav" : "navlist"}`}>
            <div className="navlink">
              <Link to="/"  onClick={()=>setActive('#')} className={active==='#'? "active":''}>Home</Link>
              <Link to="#about"  onClick={()=>setActive('#about')} className={active==='#about'? "active":''}>About</Link>
              <Link to="/work" onClick={()=>setActive('#work')} className={active==='#work'? "active":''}>Project</Link>
              <Link to="/community" onClick={()=>setActive('#community')} className={active==='#community'? "active":''}>Community</Link>
              <Link to="/contact" onClick={()=>setActive('#contact')} className={active==='#contact'? "active":''}>Contact</Link>
            </div>
            <div className="contact">
              <a
                href="https://www.facebook.com/FullStroy.unique"
                className="nav_contact_link facebok"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
                  alt=""
                  className="facebok imgr"
                />
              </a>
              <a
                href="https://t.me/full_stroy_uz"
                className="nav_contact_link imgr telegram"
              >
                <img src={telegram} alt="" className="telegram" />
              </a>
              <a
                href="https://www.instagram.com/fullstroy_uz/"
                className="nav_contact_link imgr instagrami"
              >
                <img
                  src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"
                  alt="rdjas"
                  className="instagram"
                />
              </a>
            </div>
          </nav>

          <div className="toggleBtn">
            <button onClick={() => setShow(!show)}>
              {show ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
