import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Aboutbanner2 from "../src/components/About/Aboutbanner2";
const contacts = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Contact Us" />
        <section id="contacts-2" className="wide-100 contacts-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-12">
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Need Help? Get in Touch</h3>
                  {/* Text */}
                  {/* <p className="p-md">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta
                  </p> */}
                </div>
              </div>
            </div>
            <div>
            <Aboutbanner2 />
            </div>
            <div className="contacts-2-holder">
              <div className="row d-flex align-items-center">
                {/* CONTACT BOX #1 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/pin.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">Our Location</h5>
                    {/* Text */}
                    <p>Maharaja Ranjit Singh Punjab Technical University, Bathinda , Punjab</p>
                    {/* Button */}
                    <Link href="/contacts">
                      <a className="btn btn-tra-grey rose-hover">
                        Find Location On Map
                      </a>
                    </Link>
                  </div>
                </div>
                {/* CONTACT BOX #2 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/world-map.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">Contact For</h5>
                    {/* Text */}
                    <p>Partnership For Jobs, Incubation and Research Dashboard</p>
                    {/* Button */}
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        info@mrsptuonline.com
                      </a>
                    </Link>
                  </div>
                </div>
                {/* CONTACT BOX #3 */}
                <div className="col-lg-4">
                  <div className="contact-box">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/request.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">Need Help?</h5>
                    {/* Text */}
                    <p>
                      Have questions about teaching and career opportunities?
                    </p>
                    {/* Button */}
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        info@mrsptuonline.com
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End contacts-holder */}
          </div>
          {/* End container */}
        </section>
        {/* END CONTACTS-2 */}
        {/* GOOGLE MAP
				============================================= */}
        <div id="gmap" className="map-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="google-map">
                  {/* Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! */}
                  <iframe src="https://www.google.com/maps/embed/v1/place?q=mrsptu&key=AIzaSyB9Lo7KF8GpNmOt2g03rv5LMLKrZExKCn0"></iframe>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>
      </div>
    </Layout>
  );
};

export default contacts;
