import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer id="footer-2" className="footer division footdiv">
      <div className="container" style={{ paddingTop: '2%' }}>
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="fooooooter" style={{ display: 'contents' }}>
            <div className="col-md-5 col-lg-5 col-xl-4">
              <div className="footer-info mb-40">
                {/* Footer Logo */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
                <a href="https://www.mrsptu.ac.in/">
                  <img
                    src="images/logo.png"
                    width={90}
                    height={90}
                    alt="footer-logo"
                  />
                </a>
                {/* Text */}
                <p style={{ marginTop: '-1px', fontWeight: '600' }}>
                  MRSPTU, Bathinda Online Certification Courses In Emerging Technologies.
                </p>
              </div>
              <div className="footer-info mb-40" style={{ marginTop: '-10px', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                {/* Footer Logo */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
                <span>
                  <a href="https://www.crestbellsupport.com/">
                    <img
                      src="images/logocropped.png"
                      width={75}
                      height={75}
                      alt="footer-logo"
                    />
                  </a>
                </span>
                <span>
                  <p className="hoooover" style={{ marginTop: '-0.001px', fontWeight: '600' }}>
                    Crestbell Support Private Limited
                  </p>
                </span>
                {/* Text */}
                {/* <Link href="https://www.crestbellsupport.com"> */}
                {/* </Link> */}


              </div>
              <p style={{ textDecoration: 'underline', marginTop: '-8%' }}>Technology & Marketing Partner:-</p>
              <div className="footer-info mb-40">
                {/* Title */}
                <h5 className="h5-md" style={{ color: "black", marginTop: '30px' }}>Head Office</h5>
                {/* Footer Links */}
                <ul className="clearfix" style={{ marginTop: '-5%' }}>
                  <li>
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        style={{ color: "black" }}
                      >
                        #SCO 218-219, Sector-34 A 2nd Floor, Chandigarh
                      </a>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            {/* FOOTER PRODUCTS LINKS */}
            <div style={{ display: 'contents' }}>
              <div className="col-md-4 col-lg-4 col-xl-3 contactus">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h5 className="h5-md" style={{ color: "black", marginTop: '30px' }}>Zonal Offices</h5>
                  {/* Footer Links */}
                  <ul className="clearfix">
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          <b>Bathinda Zone</b> abpbathinda@crestbellsupport.com
                        </a>
                      </Link>
                    </li>
                    <li style={{ color: "black" }}><b>Patiala Zone</b> abppatiala@crestbellsupport.com</li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}

                          style={{ color: "black" }}>
                          <b>Ludhiana Zone</b> abpludhiana@crestbellsupport.com
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          <b>Jalandhar Zone</b> abpjalandhar@crestbellsupport.com
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          <b>Bihar Zone</b> abpbihar@crestbellsupport.com
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          <b>UP Zone</b><br/> abpup@crestbellsupport.com
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-2 quick">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h5 className="h5-md" style={{ marginTop: '30px' }}>Quick Links</h5>
                  {/* Footer Links */}
                  <ul className="foo-links clearfix">
                    <li>
                      <Link href="/about">
                        <a className="f1" style={{ color: "black", }}>About</a>
                      </Link>
                    </li>

                    {/* <li>
                  <Link href="/blog-listing">
                    <a>Blog</a>
                  </Link>
                </li> */}
                    <li>
                      <Link href="/contacts">
                        <a className="f2" style={{ color: "black" }}>Contact</a>
                      </Link>
                    </li>
                    {/* <li>
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </li> */}
                    <li>
                      <Link href="/terms">
                        <a className="f3" style={{ color: "black" }}>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy">
                        <a className="f4" style={{ color: "black" }}>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund">
                        <a className="f5" style={{ color: "black" }}>Refund Policy</a>
                      </Link>
                    </li>
                    {/* <li>
                  <Link href="/blog-listing">
                    <a>From the Blog</a>
                  </Link>
                </li> */}
                  </ul>
                </div>
              </div>
              {/* FOOTER COMPANY LINKS */}
              <div className="col-md-4 col-lg-4 col-xl-3 contactus">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h5 className="h5-md" style={{ color: "black", marginTop: '30px' }}>Contact Us</h5>
                  {/* Footer Links */}
                  <ul className="clearfix">
                    {/* <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      9463135222
                    </a>
                  </Link>
                </li> */}
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          info@mrsptuonline.com
                        </a>
                      </Link>
                    </li>
                    <li style={{ color: "black" }}>Phone: 87250-72493</li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}

                          style={{ color: "black" }}>
                          Maharaja Ranjit Singh
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          Punjab Technical University
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "black" }}
                        >
                          Dabwali Road Bathinda,
                          Punjab, India-
                          151001
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* FOOTER NEWSLETTER FORM */}
            </div>
          </div>

          <div className="row row1" style={{ textAlign: 'center', justifyContent: 'center' }}>
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <p>© Copyright MRSPTU Online 2022, Powered by KEEWE
                    {/* {new Date().getFullYear()} */}
                  </p>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-twitter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-google-plus"
                    >
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-tumblr"
                    >
                      <i className="fab fa-tumblr" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* END FOOTER NEWSLETTER FORM */}
        </div>
        {/* END FOOTER CONTENT */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
