import Link from "next/link";
import React from "react";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";

const Refund = () => {
    return (
        <section id="single-post" className="wide-80 single-post-section division">
            <Header />
            <div className="container">
                {/* SINGLE POST CONTENT */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="single-post-wrapper">
                            {/* SINGLE POST TITLE */}
                            <div className="single-post-title mb-35 text-center">
                                {/* Post Title */}
                                <h3 className="h3-md">
                                    Refund Policy
                                </h3>
                            </div>
                            <div className="single-post-txt">
                            </div>
                            <div className="single-post-txt">
                                <p>
                                    Once the Course purchased on <Link href={'/home'}><a style={{textDecoration: 'underline', color: '#1a0dab'}}>www.mrsptuonline.com</a></Link>, fees is non-refundable in nature. We do not provide refund on courses purchased to our customers.
                                </p>
                                {/* <br></br> */}
                                <p>
                                    For queries contact us at <Link href={'#'}><a style={{textDecoration: 'underline', color: '#1a0dab'}}>info@mrsptuonline.com</a></Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section >
    );
};

export default Refund;
