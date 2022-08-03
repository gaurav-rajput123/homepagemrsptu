import Link from "next/link";
import { useEffect } from "react";
import React from "react";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";

const Terms = () => {

    useEffect(()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        
      })

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
                                    Terms and Conditions
                                </h3>
                            </div>
                            <div className="single-post-txt">
                            </div>
                            <div className="single-post-txt">
                                <ol style={{ textAlign: 'justify' }}>
                                    <li>
                                        Candidates shall abide by the Rules & Regulations in force as well as those that may be issued by the MRSPTU, Bathinda from time to time.
                                    </li>
                                    <li>
                                        Admission made to any certification is provisional till the time the MRSPTU Online finally approves it by mail.
                                    </li>
                                    <li>
                                        A false declaration or misrepresentation of qualification or eligibility by the candidate shall nullify his/her admission to the MRSPTU Online and attract appropriate penal action, including forfeiture of fees.
                                    </li>
                                    <li>
                                        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                                    </li>
                                    <li>
                                        The use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
                                    </li>
                                    <li>
                                        It is the  responsibility of the user to ensure that any products, services or information available through this website meet your specific requirements.
                                    </li>
                                    <li>
                                        MRSPTU Online contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.
                                    </li>
                                    <li>
                                        Copying is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                                    </li>
                                    <li>
                                        Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense.
                                    </li>
                                    <li>
                                        We do not signify that we endorse the third parties.
                                    </li>
                                    <li>
                                        We take no responsibility for the content of the linked to the website.
                                    </li>
                                    <li>
                                        You may not create a link of this website to other, without MRSPTU Online permission. Your use of this website or any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section >
    );
};

export default Terms;
