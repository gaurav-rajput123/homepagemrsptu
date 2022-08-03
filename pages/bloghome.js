import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const HomeBlog = () => {

    return (
        <Fragment>
            <section id="news-3" className="pt-100 news-section division" style={{ backgroundColor: 'whitesmoke', padding: '5% 2%' }}>
                <div className="container" style={{ textAlign: "center", marginTop: '-5%' }}>
                    <p style={{ fontSize: '2.65rem', fontWeight: '700' }}>Blogs</p>
                    <div className="row" style={{ backgroundColor: '#e9e9e9', padding: '2% 1%',justifyContent:'center',}}>
                        {/* BLOG POSTS HOLDER */}
                        <div className="col-lg-9" >
                            <div className="posts-holder pe-25">
                                {/* ARTICLE #1 */}
                                <div style={{ marginBottom: '3%' ,width:'120%'}}>
                                    <div className="row d-flex align-items-center" style={{width:'100%'}}>
                                        {/* Article Preview */}
                                        <div className="col-md-2">
                                            <img
                                                className="img-fluid"
                                                src="images/blog/blog2.jpg"
                                                alt="article-preview"
                                                style={{ width: '60%', borderRadius: '12px' }}
                                            />
                                        </div>
                                        {/* Article Text */}
                                        <div className="col-md-8">
                                            {/* Title */}
                                            <h4 className="h4-sm">
                                                <Link href="/single-post">
                                                    <a>Enroll Yourself for Online Courses In MRSPTU</a>
                                                </Link>
                                            </h4>
                                            {/* Post Author */}
                                            <span>May 18, 2022 - By Rajesh Gupta</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div> */}
                                <hr style={{ borderTop: "2px solid #999", width: '100%' }} />
                                {/* </div> */}
                                {/* END ARTICLE #1 */}
                                {/* ARTICLE #2 */}

                                <div className="row d-flex align-items-center" style={{width:'120%'}}>
                                    {/* Article Preview */}
                                    <div className="col-md-2">
                                        <img
                                            className="img-fluid"
                                            src="images/blog/chhotablog.jpg"
                                            alt="article-preview"
                                            style={{ width: '60%', borderRadius: '12px' }}
                                        />
                                    </div>
                                    {/* Article Text */}
                                    <div className="col-md-8">
                                        {/* Title */}
                                        <h4 className="h4-sm">
                                            <Link href="/single-post1">
                                                <a>Get Ready To Rock Your Professional Career with MRSPTU</a>
                                            </Link>
                                        </h4>
                                        {/* Post Author */}
                                        <span>May 23, 2022 - By Dr. Munish Jindal</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Link
                        href="blog-listing"
                    >
                        <a
                            className="btn btn-md btn-rose tra-black-hover"
                            style={{ marginTop: "1%" }}
                        >
                            View All
                        </a>
                    </Link>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* <Paggination active={active} setActive={setActive} state={state} /> */}
        </Fragment>
    );
};

export default HomeBlog;
