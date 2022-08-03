import Link from "next/link";
import React, { useState } from "react";
const Header = ({ headerBtn }) => {
  const [openSubMen, setOpenSubMen] = useState(null);
  const onClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("wsactive");
  };
  const activeFun = (name) => setOpenSubMen(name === openSubMen ? "" : name);
  // onClick()              

  const activeLi = (name) =>
    name === openSubMen ? "d-block" : "d-md-block d-sm-none";
  // onClick()

  const iconChange = (name) => (name === openSubMen ? "ws-activearrow" : "");

  return (
    <header id="header" className="header white-menu navbar-dark">
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <Link href="#">
            <a
              onClick={() => onClick()}
              id="wsnavtoggle"
              className="wsanimated-arrow"
            >
              <span />
            </a>
          </Link>
          <div className="smllogo smllogo-black" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems:'center'}}>
            <span>
              <img
                src="images/mrslogo.png"
                width={'100%'}
                height={50}
                alt="mobile-logo"
              />
            </span>
            {/* <span>
              <p style={{ color: '#fff', fontSize: '12px', marginTop: '2%' }}>ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੰਜਾਬ ਟੈਕਨੀਕਲ ਯੂਨੀਵਰਸਿਟੀ, ਬਠਿੰਡਾ</p>
              <p style={{ color: '#fff', marginTop: '-3%', fontSize: '12px' }}>Maharaja Ranjit Singh Punjab Technical University, BATHINDA</p>
            </span> */}
          </div>

        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix" id="wsmainfull">
          <div className="wsmainwp clearfix">
            {/* LOGO IMAGE */}
            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
            <div className="desktoplogo">
              <Link href="/home">
                <a href="#hero-3" className="logo-black" style={{ display: 'flex' }}>
                  <span>
                    <img
                      src="images/finalogo.png"
                      width={75}
                      height={75}
                      alt="header-logo"
                    />
                  </span>
                  <span>
                    <p style={{ color: '#fff', fontSize: '16px' }}>ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੰਜਾਬ ਟੈਕਨੀਕਲ ਯੂਨੀਵਰਸਿਟੀ, ਬਠਿੰਡਾ</p>
                    <p style={{ color: '#fff', marginTop: '-15%', fontSize: '14px' }}>Maharaja Ranjit Singh Punjab Technical University, BATHINDA</p>
                  </span>
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="#">
                <a href="d#hero-3" className="logo-white">
                  <span>
                    <img
                      src="images/finalogo.png"
                      width={112}
                      height={30}
                      alt="header-logo"
                    />
                  </span>
                  <span style={{ marginTop: '1%' }}>
                    <p style={{ color: '#fff', fontSize: '16px' }}>ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੰਜਾਬ ਟੈਕਨੀਕਲ ਯੂਨੀਵਰਸਿਟੀ, ਬਠਿੰਡਾ</p>
                    <p style={{ color: '#fff', marginTop: '-15%', fontSize: '14px' }}>Maharaja Ranjit Singh Punjab Technical University, BATHINDA</p>
                  </span>
                </a>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix" style={{ maxHeight: "700px", float: 'right' }}>
              <div className="overlapblackbg" onClick={() => onClick()} />
              <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" onClick={() => onClick()}>
                  <Link href="/about" >About</Link>
                </li>
                {/* DROPDOWN MENU */}

                {/* DROPDOWN MENU */}
                <li onClick={() => {
                  activeFun("Categories")

                }}>
                  <span className={`wsmenu-click ${iconChange("Categories")}`}>
                    <i className="wsmenu-arrow" />
                  </span>
                  <a href="#">
                    Categories <span className="wsarrow" />
                  </a>
                  <ul className={`sub-menu ${activeLi("Categories")}`}>

                    <li onClick={() => onClick()}>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Data Science'
                        }
                      }}>Data Science</Link>
                    </li>
                    <li >
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'IT and Software Development'
                        }
                      }}>IT &amp; Software</Link>
                    </li>
                    <li >
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Business'
                        }
                      }}>Business</Link>
                    </li>
                    <li>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Cyber Security'
                        }
                      }}>Cyber Security</Link>
                    </li>
                    <li onClick={() => onClick()}>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Programming Language'
                        }
                      }}>Programming Languages</Link>
                    </li>
                    <li>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Cloud Computing'
                        }
                      }}>Cloud Computing</Link>
                    </li>
                    <li>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Designing'
                        }
                      }}>Designing</Link>
                    </li>
                    <li>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Personality Development'
                        }
                      }}>Personality Development</Link>
                    </li>
                    <li onClick={() => onClick()}>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Patents and Intellectual Property Rights'
                        }
                      }}>Patents and IPR</Link>
                    </li>
                    <li>
                      <Link href={{
                        pathname: "courses-list", query: {
                          category: 'Test Preparation'
                        }
                      }}>Test Preparation</Link>
                    </li>
                  </ul>
                </li>{" "}
                {/* END DROPDOWN MENU */}

                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" onClick={() => onClick()}>
                  <Link href="blog-listing">Blog</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" onClick={() => onClick()}>
                  <Link href="contacts">Contact</Link>
                </li>
                {/* <li className="nl-simple" onClick={() => onClick()}>
                  <Link href="register">Enquiry</Link>
                </li> */}

                <li className="nl-simple" onClick={() => onClick()}>
                  <Link href="https://lms.mrsptuonline.com">Login/Sign Up</Link>
                </li>

                {/* HEADER BUTTON 
								    <li class="nl-simple" >
								    	<a href="#" class="btn btn-rose tra-black-hover last-link">Get Started</a>
								    </li> */}
              </ul>
            </nav>

            {/* END MAIN MENU */}
          </div>
        </div>
        {/* END NAVIGATION MENU */}
      </div>
      {/* End header-wrapper */}
    </header>
  );
};

export default Header;
