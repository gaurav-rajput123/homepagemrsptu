import Link from "next/link";
import React from "react";
const Demo1Banner5 = () => {
    return (
        <section
            id="banner-5"
            className="bg-whitesmoke wide-60 banner-section division"
        >
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Why Choose Us</h1>
                <h5 style={{ textAlign: "center", paddingBottom: "30px" }}> L-Earning Opportunities</h5>
                <div className="row">
                    {/* BANNER TEXT */}
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/courses.png" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Learn</h4>
                                {/* Text */}
                                <p style={{textAlign: 'justify'}}>
                                    Skill - Reskill - Upskill yourself with our simple and easy to use platform and gain hands on practice in new age courses.
                                </p>
                                {/* Button */}
                                {/* <Link href="/become-a-teacher">
                                    <a className="btn btn-rose tra-black-hover">
                                       Find More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/Resreach.jpg" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Research</h4>
                                {/* Text */}
                                <p style={{textAlign: 'justify'}}>
                                    Enrolled learners of MRSPTU online courses will have access to funded research requirements of various partnered organizations of this platform.
                                </p>
                                {/* Button */}
                                {/* <Link href="/become-a-teacher">
                                    <a className="btn btn-rose tra-black-hover">
                                        Find More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/incubation444.png" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Virtual Incubation</h4>
                                {/* Text */}
                                <p style={{textAlign: 'justify'}}>
                                    If you are with a mind full of creative ideas and business-oriented skills, or on your way to creating an innovative product, go ahead and fulfill your dreams
                                </p>
                                {/* Button */}
                                {/* <Link href="/become-a-teacher">
                                    <a className="btn btn-rose tra-black-hover">
                                        Find More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/jobs.png" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Jobs For You</h4>
                                {/* Text */}
                                <p style={{textAlign: 'justify'}}>
                                    Learners will be provided with unique job portal where they will have access to more than 100+ Companies and can apply for jobs easily while continuing with their Skill- based courses.
                                </p>
                                {/* Button */}
                                {/* <Link href="/become-a-teacher">
                                    <a className="btn btn-rose tra-black-hover">
                                        Find More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/create.jpg" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Create and Earn</h4>
                                {/* Text */}
                                <p style={{textAlign: 'justify'}}>
                                    Inviting learners to share their knowledge and experiences by creating online courses and getting an opportunity to earn money.
                                </p>
                                {/* Button */}
                                {/* <Link href="/become-a-teacher">
                                    <a className="btn btn-rose tra-black-hover">
                                        Find More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                    {/* BANNER TEXT */}
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/Networking.png" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Keewe Networking Media</h4>
                                {/* Text */}
                                <p style={{textAlign: 'justify'}}>
                                    A unique networking platform and marketplace, where participants can display, exhibit, and sell their creative works.
                                </p>
                                {/* Button */}
                                {/* <Link href="/courses-list">
                                    <a className="btn btn-rose tra-black-hover">
                                        Find More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo1Banner5;
