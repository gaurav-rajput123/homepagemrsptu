import Link from "next/link";
import React from "react";

const SinglePost1 = () => {
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
                                    Get Ready To Rock Your Professional Career with MRSPTU
                                </h3>
                                {/* Post Data */}
                                <div className="single-post-data">
                                    <p>
                                        Posted by Dr. Munish Jindal on May 23, 2022
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
                                    A professional course is a learning experience that equips you with the abilities necessary to do tasks related to your profession. A professional course is a highly specialized and hands-on training programme designed for working professionals. A good course, carefully designed, can boost your performance and advance your career. It's adaptable, affordable, and designed just for busy professionals. Professional certificate courses are critical for those who want to advance their careers, change careers, or upskill. There are numerous options available, including both online and traditional classes.
                                    <br></br>
                                    <h5>Importance of a Professional Course</h5>
                                    In an ever-competitive world, you should always seek improvement in your field of expertise. Taking a professional course can help you improve your performance in your current job. Many people today engage in professional courses in order to improve their skills and knowledge. It also provides you with fundamental information and confidence. Professional courses offer a wide range of benefits, thus taking one is strongly recommended.
                                    <br />
                                    A professional training fulfills our need to continually enhance our skills. It enables candidates to evaluate their own strengths and weaknesses. These professional courses are routinely updated to meet industry needs, which benefits both new entrants and experienced experts.
                                </p>
                            </div>
                            {/* BLOG MAIN POST IMAGE */}
                            <div className="post-inner-img">
                                <img
                                    className="img-fluid"
                                    src="images/blog/badablog.jpg"
                                    alt="blog-post-image"
                                />
                            </div>
                            {/* BLOG POST TEXT */}
                            <div className="single-post-txt">
                                {/* Text */}
                                <p style={{ textAlign: 'justify' }}>
                                    To appreciate the value of a professional training, you must first comprehend its benefits: -
                                </p>
                                {/* Text */}
                                <ul style={{ textAlign: 'justify' }}>
                                    <li>
                                        ● Practical: Professional courses are incredibly useful and accessible, which is why they are best done while working in the field. These classes help you hone your talents and enhance your work habits. Professional certificate courses help you improve your performance because they are practical, and this could propel you in the correct path, making you suitable for a promotion. They not only assist you in learning about new market trends, but they also refresh information that you may have studied many years ago. In essence, you improve your talents and advance in the industry.
                                    </li>
                                    <li>
                                        ● Flexible Learning Opportunities: Many universities that provide professional courses recognise that students who enroll in these courses will not be able to devote entire days to learning. Online platforms allow you to learn at your own speed, in your own time, and in your own location. This allows you the freedom to acquire the skills you require while juggling a demanding career.
                                    </li>
                                    <li>
                                        ● Keeping up with Emerging Trends: Because the way businesses are constantly changing, you must constantly learn to keep up with these changes. Digital and social media marketing, for example, are hot right now. A professional online course on digital marketing tools, analytics, and social media marketing could help you brush up on your abilities and stay on top of the competition.
                                    </li>
                                    <li>
                                        ● Add Value to Your CV: Professional courses are provided by professional institutions, which are the standard-setters in the sector. Employers are often curious about professional courses you've taken to boost your skills. Professional certificate courses can help you improve your CV and strengthen your negotiating position for a higher income or job.
                                    </li>
                                    <li>
                                        ● Opportunity to Network: Joining professional certificate courses is one of the most effective ways to build solid networks in the field. They assist you in interacting with industry colleagues, and there are plenty of opportunities to make business contacts and connections.
                                    </li>
                                </ul>

                                {/* Small Title */}
                                <h5 className="h5-lg">Why choose MRSPTU?</h5>
                                {/* Text */}

                                <p style={{ textAlign: 'justify' }}>
                                    Maharaja Ranjit Singh Punjab Technical University (MRSPTU) is a research and educational institute. MRSPTU tracks the digital revolution at all sizes in order to push the boundaries and meet humanity's challenges. Our L-earning courses are a hands-on learning facility, where students learn through online medium.
                                    <br />
                                    MRSPTU is an open and independent foundation which is motivated by high values. MRSPTU is an AICTE approved university. We offer online professional courses that will improve your skills and prepare you for a professional career. Online courses like programming in C, machine learning in Python, power BI, cyber crime, business intelligence, and many others can assist you in sharpening your talents.
                                    <br />
                                    Learn more about our courses and enroll to start learning. Visit our website for further information and questions.
                                </p>

                                {/* <h5 className="h5-lg">Meta Title</h5>
                                <p>
                                Get Ready To Rock Your Professional Career with MRSPTU
                                </p>
                                <h5 className="h5-lg">Meta Description</h5>
                                <p style={{ textAlign: 'justify' }}>
                                If you're looking for a place to prepare for the professional world, MRSPTU is the place to go.
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

export default SinglePost1;
