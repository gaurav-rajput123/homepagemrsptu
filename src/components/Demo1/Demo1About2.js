import React from "react";
const Demo1About2 = () => {
    return (
        <section id="about-2" className="wide-60 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block pc-25 mb-40">
                            <img
                                className="img-fluid"
                                src="images/DrButta.jpg"
                                alt="about-image"
                            />
                        </div>
                    </div>
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block pc-25 mb-40">
                            {/* Title */}
                            <h3 className="h3-sm">
                                Vice-Chancellor's Message
                            </h3>
                            {/* Text */}
                            <p style={{textAlign: 'justify'}}>
                                MRSPTU Online Certification courses will give learners control of their own learning journey. Our learning platform will facilitate futuristic learning that involves a continuous progress to higher levels of critical and creative thinking in a collaborative environment of academic freedom.
                            </p>
                            {/* List */}
                            <p className="txt-list mb-15" style={{fontSize: '17px', color: '#dc3549', fontWeight: '600'}}>
                                Prof. (Dr.) Buta Singh Sidhu
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

export default Demo1About2;
