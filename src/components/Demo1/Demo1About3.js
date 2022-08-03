import Link from "next/link";
import React from "react";
const Demo1About3 = () => {
    return (
        <section id="about-3" className="pt-100 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block pc-25">
                            <h3>
                                My Open Case
                            </h3>
                            {/* Title */}
                            <h3 className="h3-sm">
                                A Digital Resume Just For You
                            </h3>
                            {/* Text */}
                            <p>
                                Digital Resume Reflecting the Verified Tasks of our Learners
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                    Now you can build your live  resume.
                                </li>
                                <li>
                                    Our Partner Companies keep track of live resumes to hire.
                                </li>
                                <li>
                                    Present your introductory video and grab attention from hiring companies.
                                </li>
                            </ul>
                            {/* Button */}
                            <div className="btn1">
                                <Link href={{
                                    pathname: "contacts",
                                    query: {
                                        category: 'contacts'
                                    }
                                }}>
                                    <a className="btn btn-md btn-rose tra-black-hover">
                                        Reach Us Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block">
                            <img
                                className="img-fluid"
                                src="images/image-02.png"
                                alt="about-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo1About3;
