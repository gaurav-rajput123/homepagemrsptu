import Link from "next/link";
import React from "react";
const About2 = () => {
    return (
        <section id="about-2" className="wide-60 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block pc-25 mb-40">
                            <img
                                className="img-fluid"
                                src="images/About.png"
                                alt="about-image"
                            />
                        </div>
                    </div>
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-5">
                        <div className="txt-block pc-25 mb-40">
                            <h1 className="h3-sm">
                                About
                            </h1>

                            <p style={{ textAlign: 'justify' }}>
                                Maharaja Ranjit Singh Punjab Technical University, Bathinda is taking a step ahead to deliver a futuristic learning experience to the students with an advanced online learning system “KEEWE”. Apart from offering students the opportunity to LEARN EARN and CREATE at the same time, this platform uses a new concept of learning methodology “Deltagogy” for developing appropriate skills, analytic reasoning and flexible mindsets amongst the learners.
                            </p>

                            {/* List */}

                            <p style={{ textAlign: 'justify' }}>
                                Every student can now have complete control of their learning procedure and enhance skills at their own pace.
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                We welcome all to participate in these comprehensive courses that are accessible at affordable prices.
                            </p>


                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default About2;
