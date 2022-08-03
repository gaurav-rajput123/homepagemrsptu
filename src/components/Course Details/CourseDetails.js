// import item from "isotope-layout/js/item";
import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { VideoContext } from "../../context/video";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const CourseDetails = ({ courseArray, teacher }) => {
  const videoContext = useContext(VideoContext);
  console.log(teacher);
  const { showVideo } = videoContext;
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#courseD", sort, active);
    let list = document.querySelectorAll("#courseD");
    setstate(getPagination(list.length, sort));
  }, [active]);
  console.log(courseArray);
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  return courseArray != null ? (
    <Fragment>
      <section id="course-details" className="wide-40 course-section division">
        <div className="container">
          <div className="row" id="topId">
          {/* COURSE DATA */}
          <div className="col-lg-4" id="topTwo">
              <div className="course-data">
                {/* Image */}
                <img
                className="img-fluid"
                src={
                  "https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + courseArray.id + ".png"
                }
                alt="course-preview"
                style={{width: '100%'}}
                />
                {/* <video src="https://opencase.s3.ap-south-1.amazonaws.com/introVideo/What+is+Data+Science_.mp4" controls >
          <track default
           kind="captions"
           srclang="en"
           src={""} />
    Sorry, your browser doesn't support embedded videos.
    </video> */}
                {/* Course Price */}
                <div className="course-data-price text-center">
                  ₹{" "}
                  {courseArray.courseDetails.price != undefined ? (
                    courseArray.courseDetails.price
                  ) : (
                    <b>COMING SOON</b>
                  )}
                  <span className="old-price">{courseArray.courseDetails.orginal != undefined ? (
                    courseArray.courseDetails.orginal
                  ) : (
                    <b></b>
                  )}</span>
                  {/* <p className="p-sm">16 days left at this price!</p> */}
                </div>
                {/* Links */}
                <div className="course-data-links">
                
                  {/* <Link
                    href={
                      "https://lms.mrsptuonline.com?courseId=" + courseArray.id
                    }
                  >
                    <a className="btn btn-md btn-rose tra-grey-hover">
                      Buy Course Now
                    </a>
                  </Link> */}

                  {courseArray.courseDetails.price != undefined ? (
                                      <Link
                                      href={
                                        "https://lms.mrsptuonline.com?courseId=" + courseArray.id
                                      }
                                    >
                                      <a className="btn btn-md btn-rose tra-grey-hover">
                                        Buy Course Now
                                      </a>
                                    </Link>
                                    ) : (
                                      <b></b>
                                    )}

                  {/* <Link href="#">
                      <a className="btn btn-md btn-tra-grey rose-hover">
                        Add To List
                      </a>
                    </Link> */}

                </div>
                {/* List */}
                <div className="course-data-list">
                  <span>This course includes:</span>
                  {/* <p>
                        <i className="fas fa-graduation-cap" />
                        Hinglish
                      </p> */}
                  <p>
                    <i className="far fa-play-circle" />{" "}
                    {courseArray.courseDetails.duration.split(" ")[0]} hours
                    on-demand video
                  </p>

                  <p>
                    <i className="far fa-id-card" />
                    Certificate of Completion
                  </p>
                  <p>
                    <i className="far fa-file" />
                    Progressive Assessments
                  </p>
                  <p>
                    <i className="fas fa-file" />
                    Final Assessment
                  </p>
                  <p>
                    <i className="fas fa-bell" />
                    Jobs mapped with course skills
                  </p>
                  <p>
                    <i className="fas fa-comments" />
                    Mentor and peer to peer discussion window
                  </p>
                </div>
                <h6>Bangalore-based company hiring at 3-6  LPA</h6>
              </div>
            </div>
            {/* COURSE DESCRIPTION */}
            <div className="col-lg-8">
              <div className="course-txt pe-30" id="topThree">
                {/* Course Title */}
                <h3 className="h3-sm">{courseArray.courseDetails.title}</h3>
                {/* Course Shot Description */}
                <p className="p-md" style={{ textAlign: "justify" }}>
                  {courseArray.courseDetails.description}
                </p>
                {/* Course Short Data */}
                {teacher != undefined
                 ? 
                <p className="course-short-data">
                  Created by: {teacher.Firstname}
                </p>
                : 
                null  
              }

                {/* Course Rating */}
                <div className="course-rating clearfix">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {/* <span>4.84 (468 Ratings) • 14,425 Students Enrolled</span> */}
                </div>
                {/* WHAT YOU LEARN */}
                <div className="what-you-learn">
                  {/* Title */}
                  <h5 className="h5-xl">{`What you'll learn`}</h5>
                  {/* What You Learn */}
                  <div className="row">
                    {/* List */}
                    <div className="col-lg-12">
                      <ul className="txt-list">
                        {courseArray.courseDetails.skills.map((item, index) => {
                          return <li style={{width: 'auto'}}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END WHAT YOU LEARN */}
                {/* COURSE REQUIREMENTS */}
                <div className="cs-requirements cd-block">
                  {/* Small Title */}
                  <h5 className="h5-xl">Requirements</h5>
                  {/* Text */}
                  <p>{courseArray.courseDetails.requirement}</p>
                  {/* List */}
                </div>

                {/* About the AUTHOR */}
                <div className="what-you-learn" style={{ display: "flex" }}>
                  {/* Title */}
                  {teacher != undefined ? 
                  <div>
                    <h5 className="h5-xl">{"ABOUT THE AUTHOR"}</h5>
                    {/* What You Learn */}
                    <div className="row">
                      {/* List */}

                      <div
                        className="col-lg-8 col-sm-12"
                        style={{ textAlign: "justify" }}
                      >
                        {teacher.Description}
                      </div>
                      <div
                        className="col-lg-2 col-sm-12"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src={teacher.Image}
                          style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                : null  
                }
                </div>
                {/* END COURSE REQUIREMENTS */}
                {/* COURSE DESCRIPTION */}
                {/* <div className="cs-description cd-block"> */}
                {/* Small Title */}
                {/* <h5 className="h5-xl">Course description</h5> */}
                {/* Text */}
                {/* <p>
                      Business Intelligence has become an important technology for data professionals today. Learning and using a data visualization tool is a crucial part for Business Intelligence and Data Analytics.
                    </p> */}
                {/* </div> */}
                {/* END COURSE DESCRIPTION */}
                {/* COURSE TARGET */}
                {/* <div className="cs-target cd-block"> */}
                {/* Small Title */}
                {/* <h5 className="h5-xl">Who this course is for:</h5> */}
                {/* List */}
                {/* <ul className="txt-list">
                      <li>
                        Quisque vel laoreet turpis urna augue, viverra a augue
                        eget, dictum
                      </li>
                      <li>
                        Sagittis congue augue egestas volutpat magna suscipit
                        egestas magna ipsum egestas vitae purus efficitur ipsum
                        primis in cubilia laoreet augue luctus donec diam
                      </li>
                      <li>
                        Nullam non scelerisque lectus. In at mauris vel nisl
                        convallis porta
                      </li>
                    </ul>
                  </div> */}
                {/* END COURSE TARGET */}
                {/* COURSE CONTENT */}
                <div className="cs-content cd-block">
                  {/* Small Title */}
                  <h5 className="h5-xl">Course content</h5>
                  {/* Text */}
                  {/* <p className="p-md">
                        Level Beginner • 1 Lectures • 5 Total Hours
                      </p> */}
                  {/* ACCORDION */}
                  <Accordion
                    defaultActiveKey="collapseOne"
                    id="accordion"
                    role="tablist"
                  >
                    {courseArray.data.data.map((item, index) => {
                      return (
                        <div className="card" key={item.id}>
                          {/* Card Header */}
                          <div
                            className="card-header"
                            role="tab"
                            id="headingOne"
                          >
                            {/* Header Title */}
                            <h5 className="h5-xs">
                              <Accordion.Toggle
                                data-toggle="collapse"
                                as="a"
                                href="#collapseOne"
                                eventKey="collapseOne"
                              >
                                <b>{item.name}</b>
                              </Accordion.Toggle>
                            </h5>
                            {/* Header Data */}
                            <div className="hdr-data">
                              {/* <p>{item.topics.length} topic</p> */}
                            </div>
                          </div>
                          {/* Card Body */}
                          <Accordion.Collapse eventKey="collapseOne">
                            <div className="card-body">
                              {/* List */}
                              {item.topics.map((topic, topicIndex) => {
                                return (
                                  <div key={topic.id}>
                                    <ul
                                      className="txt-list mb-10"
                                      style={{ listStyleType: "square" }}
                                    >
                                      <li>
                                        <b>{topic.name}</b>
                                      </li>
                                    </ul>
                                    {/* <br/> */}
                                    {/* <br/> */}
                                    <ul
                                      className="txt-list mb-10 subtopic"
                                      style={{ listStyleType: "circle" }}
                                    >
                                      {topic.subTopics.map(
                                        (subTopic, subTopicIndex) => {
                                          return (
                                            <li key={subTopic.id}>
                                              {subTopic.name}
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </Accordion.Collapse>
                        </div>
                      );
                    })}
                  </Accordion>
                  {/* END ACCORDION */}
                </div>
                {/* END COURSE CONTENT */}
                {/* Course Certificate Condition */}
                <div className="cs-requirements cd-block">
                  {/* Small Title */}
                  <h5 className="h5-xl">Certification:</h5>
                  {/* Text */}
                  <p><b>At the End, Certificates will be issued to all the successful candidates who secure a minimum of 50% in the Final Online Assessment.</b></p>
                  {/* List */}
                </div>
                {/* COURSE RATING */}
                <div className="cs-rating cd-block">
                  {/* Small Title */}
                  <h5 className="h5-xl">Course Reviews</h5>
                  {/* Text */}
                  {/* <p>
                      Lorem ipsum dolor sit amet, lectus laoreet impedit gestas.
                      Aenean magna ligula eget dolor suscipit egestas viverra
                      dolor iaculis luctus magna suscipit egestas
                    </p> */}
                  {/* Rating */}
                  <div className="course-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="cr-rating">4.84 Based on 468 Reviews</span>
                  </div>
                  {/* Progress Bar Rating */}
                  <div className="row d-flex align-items-center">
                    <div className="col-md-9 col-xl-7">
                      <div className="cs-rating-data">
                        <ul>
                          {/* 5 Stars Rating */}
                          <li className="barWrapper clearfix">
                            {/* Stars */}
                            {/* <div className="ratingtext-right">
                                  <span className="tst-rating clearfix">
                                    <i className="fa fa-star checked" />
                                  </span>
                                </div> */}
                            <div className="review-3-author">
                              {/* Rating */}
                              <div className="tst-rating clearfix">
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                              </div>
                            </div>
                            {/* Rating Data */}
                            <div className="progress-wrapper">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "82%",
                                }}
                                aria-valuenow={82}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/* Percentage */}
                            <div className="ratingtext-left">
                              <p className="p-sm">82%</p>
                            </div>
                          </li>
                          {/* 4 Stars Rating */}
                          <li className="barWrapper clearfix">
                            {/* Stars */}
                            {/* <div className="ratingtext-right">
                                  <p className="p-sm">4 stars</p>
                                  <span className="tst-rating clearfix">
                                    <b>4</b><i className="fa fa-star checked" />
                                  </span>
                                </div> */}
                            <div className="review-3-author">
                              {/* Rating */}
                              <div className="tst-rating clearfix">
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                              </div>
                            </div>
                            {/* Rating Data */}
                            <div className="progress-wrapper">
                              <div
                                className="progress-bar1"
                                role="progressbar"
                                style={{
                                  width: "10%",
                                }}
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/* Percentage */}
                            <div className="ratingtext-left">
                              <p className="p-sm">10%</p>
                            </div>
                          </li>
                          {/* 3 Stars Rating */}
                          <li className="barWrapper clearfix">
                            {/* Stars */}
                            {/* <div className="ratingtext-right">
                                  <p className="p-sm">3 stars</p>
                                  <span className="tst-rating clearfix">
                                    <b>3</b><i className="fa fa-star checked" />
                                  </span>
                                </div> */}
                            <div className="review-3-author">
                              {/* Rating */}
                              <div className="tst-rating clearfix">
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                              </div>
                            </div>
                            {/* Rating Data */}
                            <div className="progress-wrapper">
                              <div
                                className="progress-bar2"
                                role="progressbar"
                                style={{
                                  width: "4%",
                                }}
                                aria-valuenow={4}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/* Percentage */}
                            <div className="ratingtext-left">
                              <p className="p-sm">4%</p>
                            </div>
                          </li>
                          {/* 2 Stars Rating */}
                          <li className="barWrapper clearfix">
                            {/* Stars */}
                            {/* <div className="ratingtext-right">
                                  <p className="p-sm">2 stars</p>
                                  <span className="tst-rating clearfix">
                                    <b>2</b><i className="fa fa-star checked" />
                                  </span>
                                </div> */}
                            <div className="review-3-author">
                              {/* Rating */}
                              <div className="tst-rating clearfix">
                                <i className="fa fa-star checked" />
                                <i className="fa fa-star checked" />
                              </div>
                            </div>
                            {/* Rating Data */}
                            <div className="progress-wrapper">
                              <div
                                className="progress-bar3"
                                role="progressbar"
                                style={{
                                  width: "2%",
                                  color: "#DA0037",
                                }}
                                aria-valuenow={2}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/* Percentage */}
                            <div className="ratingtext-left">
                              <p className="p-sm">2%</p>
                            </div>
                          </li>
                          {/* 1 Star Rating */}
                          <li className="barWrapper clearfix">
                            {/* Stars */}
                            {/* <div className="ratingtext-right">
                                  <p className="p-sm">1 star</p>
                                  <span className="tst-rating clearfix">
                                    <b>1</b><i className="fa fa-star checked" />
                                  </span>
                                </div> */}
                            <div className="review-3-author">
                              {/* Rating */}
                              <div className="tst-rating clearfix">
                                <i className="fa fa-star checked" />
                              </div>
                            </div>
                            {/* Rating Data */}
                            <div className="progress-wrapper">
                              <div
                                className="progress-bar4"
                                role="progressbar"
                                style={{
                                  width: "2%",
                                }}
                                aria-valuenow={2}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/* Percentage */}
                            <div className="ratingtext-left">
                              <p className="p-sm">2%</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Progress Bar Rating */}
                </div>
                {/* END COURSE RATING */}
                {/* TESTIMONIAL #1 */}
                <div className="review-4">
                  <div className="review-4-txt">
                    {/* Text */}
                    <p>
                    The course has been designed in a very self explanatory manner with emphasis on minute details.
                    </p>
                    {/* Author Data */}
                    <div className="review-4-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/gg.jpg"
                          alt="review-author-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        {/* Rating */}
                        <div className="tst-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5 className="h5-xs">Gaurav</h5>
                        <span>Software Engineer</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-4">
                  <div className="review-4-txt">
                    {/* Text */}
                    <p>
                      It has been a very knowledgable journey through the course, which has definately added another feather to my resume.
                    </p>
                    {/* Author Data */}
                    <div className="review-4-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/jas.jpg"
                          alt="review-author-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        {/* Rating */}
                        <div className="tst-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                        <h5 className="h5-xs">Jasmine</h5>
                        <span>Data Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-4">
                  <div className="review-4-txt">
                    {/* Text */}
                    <p>
                      I am very thankful to the developer of the course for providing a detailed information in a very easy language.
                    </p>
                    {/* Author Data */}
                    <div className="review-4-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/neh.jpg"
                          alt="review-author-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        {/* Rating */}
                        <div className="tst-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5 className="h5-xs">Neha</h5>
                        <span>Online Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-4">
                  <div className="review-4-txt">
                    {/* Text */}
                    <p>
                    Great way of presenting the indepth information in a very easy manner.
                    </p>
                    {/* Author Data */}
                    <div className="review-4-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/ballu.jpg"
                          alt="review-author-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        {/* Rating */}
                        <div className="tst-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5 className="h5-xs">Balkar</h5>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #4 */}
              </div>
            </div>
            {/* END COURSE DESCRIPTION */}
            
            {/* END COURSE DATA */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <Paggination active={active} setActive={setActive} state={state} /> */}
    </Fragment>
  ) : null;
};

export default CourseDetails;
