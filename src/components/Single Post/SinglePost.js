import Link from "next/link";
import React from "react";

const SinglePost = () => {
  return (
    <section id="single-post" className="wide-80 single-post-section division">
      <div className="container">
        {/* SINGLE POST CONTENT */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="single-post-wrapper">
              {/* SINGLE POST TITLE */}
              <div className="single-post-title mb-35 text-center">
                {/* Post Title */}
                <h3 className="h3-md">
                  Enroll Yourself for Online Courses In MRSPTU
                </h3>
                {/* Post Data */}
                <div className="single-post-data">
                  <p>
                    Posted by Rajesh Gupta on May 18, 2022
                    {/* <Link href="#">
                      <a>Ideas &amp; Opinions</a>
                    </Link> */}
                  </p>
                </div>
              </div>
              {/* END SINGLE POST TITLE */}
              {/* BLOG POST TEXT */}
              <div className="single-post-txt">
                {/* Text */}
                <p style={{ textAlign: 'justify' }}>
                  Education plays a crucial part in the advancement of civilization. Education
                  contributes to social stability as well as long-term economic growth. Poverty
                  might result from a lack of education. Education is important in many areas of life,
                  particularly in terms of personal and social development. It is significant because
                  it opens doors to new possibilities. In today&#39;s competitive world, a solid education
                  is essential because it is our weapon for conquering the globe.
                  <br></br>
                  <br></br>
                  Higher education is critical because it requires learning. A technical course can
                  help you improve your CV, broaden your knowledge and abilities, and set yourself
                  apart in a competitive job market. A master&#39;s degree demonstrates passion,
                  dedication, and dedication to your field. As the world came to a halt following the
                  corona phase, online classes took center stage.
                </p>
              </div>
              {/* BLOG MAIN POST IMAGE */}
              <div className="post-inner-img">
                <img
                  className="img-fluid"
                  src="images/blog/blog1.jpg"
                  alt="blog-post-image"
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className="single-post-txt">
                {/* Text */}
                <p style={{ textAlign: 'justify' }}>
                  Maharaja Ranjit Singh Punjab Technical Institution, Bathinda is a well-known
                  university in Punjab that is affiliated with the AICTE ( All India Council of Technical
                  Education). Our purpose is to contribute to the progress of the state, nation, and
                  world by delivering quality human resources with high professional and ethical
                  standards to meet the needs of business and society. We provide online lessons
                  for certain courses that can assist you in improving your skills and advancing in
                  your career.
                </p>
                {/* Text */}
                <ul style={{ textAlign: 'justify' }}>
                  <li>
                    ● Our objective is to create an environment that promotes technological and
                    research advancement by encouraging freedom, empowerment,
                    commitment, creativity, and innovation.
                  </li>
                  <li>
                    ● Our courses help students to become qualified and highly skilled experts
                    and entrepreneurs, to suit the industry&#39;s and society&#39;s needs for knowledge
                    discovery and distribution.
                  </li>
                  <li>
                    ● To instill in students with high moral, ethical, and professional ideas and
                    standards.
                  </li>
                  <li>
                    ● In conjunction with national and international institutions, enterprises, and
                    agencies, support research and development in many disciplines of
                    technical education, as well as the formation of Centers of Excellence.
                  </li>
                  <br></br>
                  MRSPTU offers online courses in cybercrime, business intelligence,
                  programming using Python , power BI, programming in C and many other
                  topics, all of which will be taught by specialists in their professions.
                </ul>

                {/* Small Title */}
                <h5 className="h5-lg">Cyber Crime</h5>
                {/* Text */}

                <p style={{ textAlign: 'justify' }}>
                  The goal of this course is to provide a broad overview of cybercrime
                  and cybercriminal issues, including a fundamental understanding of computer
                  technology, the history of computer crime, types of computer crime, legal aspects
                  of cybercrime, cybercrime defenses, investigatory techniques, digital forensics,
                  and potential future areas of concern.
                  Students will learn how to recognise cyber attacks, differentiate between
                  different sorts of attacks, and protect oneself from attack during this course.
                  They&#39;ll also discover how cybercrime evolved from the early use of phone systems
                  to personal computers and the internet, as well as how modern cybercrime is
                  evolving to encompass personal digital items like smartphones.
                </p>
                {/* QUOTE */}
                {/* <div className="quote">
                  <p>
                    {`"Lorem ipsum dolor sit amet, lectus
                                        laoreet impedit gestas. Aenean magna
                                        ligula eget dolor suscipit egestas
                                        viverra dolor iaculis luctus magna
                                        suscipit egestas "`}
                  </p>
                </div> */}
                <h5 className="h5-lg">Business Intelligence</h5>
                {/* Text */}
                <p style={{ textAlign: 'justify' }}>
                  Data mining, process analysis, performance benchmarking,
                  and descriptive analytics are all part of business intelligence. BI programmes all of
                  a company&#39;s data and displays it in easy-to-understand reports, metrics, and
                  trends that help managers make better decisions. BI tries to overcome this
                  problem by evaluating current data and presenting it on a dashboard with quick
                  analytics to help people make better decisions.
                </p>
                {/* INNER IMAGE */}
                {/* <div className="post-inner-img">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width={950}
                      height={450}
                      src="https://www.youtube.com/embed/7e90gBu4pas"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div> */}
                {/* Small Title */}
                <h5 className="h5-lg">Programming Using Python</h5>
                {/* Text */}
                <p style={{ textAlign: 'justify' }}>
                  Python is a very versatile programming language.
                  It&#39;s used in things like web development, data science, and software prototyping.
                  Python, fortunately, offers a straightforward, easy-to-understand syntax. Python
                  is an ideal language for novices to learn to programme with because of this.
                </p>
                <h5 className="h5-lg">Power BI</h5>
                {/* Text */}
                <p style={{ textAlign: 'justify' }}>
                  Microsoft Power BI is a business intelligence platform that provides
                  tools for aggregating, analyzing, displaying, and sharing data to nontechnical
                  business users. For users acquainted with Excel, Power BI&#39;s user interface is pretty
                  intuitive, and its strong connectivity with other Microsoft applications makes it an
                  extremely adaptable self-service tool with little upfront training. Power BI is
                  swiftly establishing itself as the most powerful self-service business intelligence
                  platform in the world, and an indispensable tool for data professionals.
                </p>
                <h5 className="h5-lg">Programming in C</h5>
                <p style={{ textAlign: 'justify' }}>
                  The most extensively used programming language is C. It
                  remains at the top of the popularity rankings, alongside the Java programming
                  language, which is also very popular and widely used among current software
                  programmers. Dennis Ritchie created the C programming language for
                  constructing system applications that interact directly with hardware components
                  such as drivers, kernels, and so on. C programming is known as the mother
                  language because it serves as a foundation for other programming languages.
                </p>
                <br></br>
                <p style={{ textAlign: 'justify' }}>
                  If you&#39;re looking for a technical education that will help you advance in your
                  career, MRSPTU is the place to go. Visit our website for more questions and
                  information. https://www.mrsptu.ac.in/index.php
                </p>
                {/* <h5 className="h5-lg">Meta Title</h5>
                <p>
                  Enroll Yourself for Online Courses In MRSPTU
                </p>
                <h5 className="h5-lg">Meta Description</h5>
                <p style={{ textAlign: 'justify' }}>
                  Looking for a technical education that will help you advance in
                  your career, enroll yourself in MRSPTU online courses.
                </p> */}
              </div>
              {/* END BLOG POST TEXT */}
              {/* SINGLE POST SHARE LINKS */}
              <div className="row post-share-links d-flex align-items-center">
                {/* POST TAGS */}
                <div className="col-md-9 col-xl-8 post-tags-list">
                  <span>
                    <Link href="#">
                      <a>MRSPTU News</a>
                    </Link>
                  </span>
                  <span>
                    <Link href="#">
                      <a>Ideas &amp; Opinions</a>
                    </Link>
                  </span>
                  <span>
                    <Link href="#">
                      <a>Education Process</a>
                    </Link>
                  </span>
                </div>
                {/* POST SHARE ICONS */}
                <div className="col-md-3 col-xl-4 post-share-list text-right">
                  <ul className="share-social-icons text-center clearfix">
                    <li>
                      <Link href="#">
                        <a className="share-ico ico-facebook">
                          <i className="fab fa-facebook-square" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="share-ico ico-twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="share-ico ico-like">
                          <i className="far fa-bookmark" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <br></br>
              {/* END SINGLE POST SHARE */}
              {/* ABOUT POST AUTHOR */}
              {/* <div className="author-senoff d-flex align-items-center">
                Avatar
                <img src="images/review-author-7.jpg" alt="author-avatar" />
                Text
                <div className="author-senoff-txt">
                  Title
                  <h5 className="h5-xs">Published by</h5>
                  <h5 className="h5-lg">Robert Coronado</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor
                    sapien dolore incidide undo labore dolore incididunt ut
                    labore turpis vitae raesent varius efficitur ipsum primis
                    cubilia laoreet augue egestas luctus donec diam efficitur
                    ipsum primis in cubilia laoreet augue egestas
                  </p>
                  Follow Button
                  <div className="author-follow-btn">
                    <Link href="#">
                      <a>Follow</a>
                    </Link>
                  </div>
                </div>
              </div> */}
              {/* END ABOUT POST AUTHOR */}
              {/* OTHER POSTS
									============================================= */}
              {/* <div className="other-posts">
                <div id="op-row" className="row d-flex align-items-center">
                  Previous Post
                  <div className="col-md-4">
                    <div className="prev-post mb-30 pe-45">
                      <h5 className="h5-xs">
                        <i className="fas fa-arrow-left" />
                        Previous Post
                      </h5>
                      <Link href="/single-post">
                        <a>Congue magna eTreeks purus pretium magnis</a>
                      </Link>
                    </div>
                  </div>
                  All Posts
                  <div className="col-md-4 text-center">
                    <div className="all-posts mb-30">
                      <Link href="/blog-listing">
                        <a>
                          <i className="fas fa-th-large" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  Next Post
                  <div className="col-md-4 text-right">
                    <div className="next-post mb-30 pl-45">
                      <h5 className="h5-xs">
                        Next Post
                        <i className="fas fa-arrow-right" />
                      </h5>
                      <Link href="/single-post">
                        <a>8 neque dolor primis a libero tempus blandit</a>
                      </Link>
                    </div>
                  </div>
                </div>
                End row
              </div> */}
              {/* END OTHER POSTS */}
              {/* POST COMMENTS */}
              {/* <div className="post-comments">
                Title
                <h4 className="h4-sm">4 Comments</h4>
                COMMENT #1
                <div className="d-flex mt-50">
                  Comment-1 Avatar
                  <img
                    className="mr-3"
                    src="images/post-author-1.jpg"
                    alt="comment-avatar"
                  />
                  <div className="flex-grow-1 ms-3">
                    Comment-1 Meta
                    <div className="comment-meta">
                      <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                        Robert C.
                      </h5>
                      <span className="comment-date">5 days ago -</span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    Comment-1 Text
                    <p>
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque id viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus efficitur ipsum primis in
                      cubilia laoreet augue egestas luctus donec diam neque
                    </p>
                    <hr />
                    COMMENT #2
                    <div className="d-flex mt-3">
                      Comment-2 Avatar
                      <Link href="#">
                        <a className="pe-3">
                          <img
                            src="images/post-author-2.jpg"
                            alt="comment-avatar"
                          />
                        </a>
                      </Link>
                      <div className="flex-grow-1 ms-3">
                        Comment-2 Meta
                        <div className="comment-meta">
                          <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                            David Smith
                          </h5>
                          <span className="comment-date">6 days ago -</span>
                          <span className="btn-reply">
                            <Link href="#">
                              <a
                                href="#leave-comment"
                                className="internal-link"
                              >
                                <i className="fas fa-reply" />
                                Reply
                              </a>
                            </Link>
                          </span>
                        </div>
                        Comment-2 Text
                        <p>
                          Etiam sapien sem magna at vitae pulvinar congue augue
                          egestas pretium neque id viverra suscipit porta
                          ratione, mollis risus lectus porta aliquet lorem and
                          purus mollis
                        </p>
                      </div>
                    </div>
                    END COMMENT #2
                  </div>
                </div>
                END COMMENT #1
                <hr />
                COMMENT #3
                <div className="d-flex mt-40">
                  Comment-4 Avatar
                  <img
                    className="mr-3"
                    src="images/post-author-3.jpg"
                    alt="comment-avatar"
                  />
                  <div className="flex-grow-1 ms-3">
                    Comment-4 Meta
                    <div className="comment-meta">
                      <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                        Becky Reed
                      </h5>
                      <span className="comment-date">13 days ago -</span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    Comment-4 Text
                    <p>
                      Porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus neque purus ipsum neque
                      dolor primis libero tempus, tempor posuere ligula varius
                      impedit enim tempor vitae and pulvinar congue augue
                      egestas. Praesent aliquet lorem purus, quis mollis laoreet
                      vitae tortor
                    </p>
                  </div>
                </div>
                END COMMENT #3
                <hr />
                COMMENT #4
                <div className="d-flex mt-40">
                  Comment-4 Avatar
                  <img
                    className="mr-3"
                    src="images/post-author-4.jpg"
                    alt="comment-avatar"
                  />
                  <div className="flex-grow-1 ms-3">
                    Comment-4 Meta
                    <div className="comment-meta">
                      <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                        Rady Smith
                      </h5>
                      <span className="comment-date">42 days ago -</span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    Comment-4 Text
                    <p>
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque id viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue auctor efficitur ipsum primis in
                      cubilia laoreet augue egestas luctus donec diam integer
                      congue
                    </p>
                  </div>
                </div>
                END COMMENT #4
                <hr />
              </div> */}
              {/*END POST COMMENTS */}
              {/* COMMENT FORM */}
              <div id="leave-comment">
                {/* Title */}
                <h4 className="h4-sm">Leave a Reply</h4>
                {/* Text */}
                <p className="grey-color">
                  {`Your email address will not be published.
                                    All comments go through moderation, so your
                                    comment won't display immediately.`}
                </p>
                <form
                  name="commentForm"
                  onSubmit={(e) => e.preventDefault()}
                  className="row comment-form"
                >
                  <div id="input-message" className="col-md-12 input-message">
                    <p>Add Comment *</p>
                    <textarea
                      className="form-control message"
                      autoComplete="off"
                      name="message"
                      rows={6}
                      placeholder="Enter Your Comment Here* ..."
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div id="input-name" className="col-md-12">
                    <p>Name*</p>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      className="form-control name"
                      placeholder="Enter Your Name*"
                      required
                    />
                  </div>
                  <div id="input-email" className="col-md-12">
                    <p>Email*</p>
                    <input
                      type="text"
                      name="email"
                      autoComplete="off"
                      className="form-control email"
                      placeholder="Enter Your Email*"
                      required
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-lg-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-rose tra-black-hover submit"
                    >
                      Post Your Comment
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-md-12 comment-form-msg text-center">
                    <div className="sending-msg">
                      <span className="loading" />
                    </div>
                  </div>
                </form>
              </div>
              {/* END COMMENT FORM */}
            </div>
          </div>
          {/* END SINGLE POST CONTENT */}
        </div>
      </div>
    </section >
  );
};

export default SinglePost;
