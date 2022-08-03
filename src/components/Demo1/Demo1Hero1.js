import Link from "next/link";
import Router from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1HeroProps } from "../sliderProps";
// import '../../../public/css/Demo1Hero1.css';
// import Mobile from './Mobile.jpg';
// import Tablet from './Tablet.jpg';

const Demo1Hero1 = () => {
  return (
    <section id="hero-1" className="hero-section division">
      {/* SLIDER */}
      <Swiper {...home1HeroProps}>
        <ul className="swiper-wrapper slides">

          {/* <SwiperSlide>
            <div className="li">
              Background Image
              <img
                style={{ backgroundImage: 'url("images/slider/Front1.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              Image Caption
              <div className="caption d-flex align-items-center right-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <div className="caption-txt white-color">
                        Title
                        <h2 className="h2-sm" style={{color:"black"}}>
                          Launch of <br></br>MRSPTU Online Certification<br></br> Courses
                        </h2>
                        Hero Search Form
                        <form
                          className="hero-form"
                          onSubmit={(e) => {
                            e.preventDefault();
                            Router.push({
                              pathname: "/categories-list",
                            });
                          }}
                        >
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What do you want to learn?"
                              aria-label="Search"
                            />
                            <span className="input-group-btn">
                              <button type="submit" className="btn">
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                />
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  End row
                </div>
                End container
              </div>
              End Image Caption
            </div>
          </SwiperSlide> */}
          {/* END SLIDE #2 */}
          {/* SLIDE #3 */}
          <SwiperSlide>
            <div className="li">
              {/* Background Image */}
              <img
                className="yellowT"
                style={{ backgroundImage: 'url("images/slider/slide-3.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              <img
                className="mob"
                style={{ backgroundImage: 'url("images/slider/Mobile1.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              <img
                className="tab"
                style={{ backgroundImage: 'url("images/slider/Tablet1.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              {/* Image Caption */}
              <div className="caption d-flex align-items-center right-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <div className="caption-txt">
                        {/* Title */}
                        <h2 className="h2-sm">
                          Learn With <br></br>  NO BOUNDARIES!
                        </h2>
                        {/* Text */}
                        <p className="p-lg">
                          <b>Building a futuristic culture of learning with <br></br> our comprehensive courses.</b>
                        </p>
                        {/* Button */}
                        {/* <Link href={{
                        // pathname: "courses-list", query: {
                        //   category: 'IT and Software Development'
                        // }
                      }}> */}
                        <Link href={{
                          pathname: "register",
                          query: {
                            category: 'register'
                          }
                        }}>
                          <a

                            className="btn btn-md btn-rose tra-black-hover"
                            style={{ marginRight: '2%' }}
                          >
                            Quick Enquiry
                          </a>
                        </Link>

                        <Link href={{
                          pathname: "https://lms.mrsptuonline.com/register/",
                          query: {
                            category: 'register'
                          }
                        }}>
                          <a

                            className="btn btn-md btn-rose tra-black-hover"
                          >
                            Sign Up
                          </a>
                        </Link>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* End container */}
              </div>
              {/* End Image Caption */}
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="li"> */}
          {/* Background Image */}
          {/* <img
                className="yellowT"
                style={{ backgroundImage: 'url("images/slider/WebsiteBanner02.gif")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              <img
                className="mob"
                style={{ backgroundImage: 'url("images/slider/Mobile3.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              <img
                className="tab"
                style={{ backgroundImage: 'url("images/slider/Tablet2.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              /> */}

          {/* Image Caption */}
          {/* <div className="caption d-flex align-items-center right-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <div className="caption-txt"> */}
          {/* Title */}

          {/* Button */}

          {/* </div>
                    </div>
                  </div> */}
          {/* End row */}
          {/* </div> */}
          {/* End container */}
          {/* </div> */}
          {/* End Image Caption */}
          {/* </div> */}
          {/* </SwiperSlide> */}
          {/* END SLIDE #3 */}
        </ul>
        {/* <ul className="indicators"></ul> */}
      </Swiper>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo1Hero1;
