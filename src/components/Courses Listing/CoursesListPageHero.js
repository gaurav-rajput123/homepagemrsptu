import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CoursesListPageHero = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        
            Object.keys(query).length != 0 ? (
            <section className="bg-05 page-hero-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-txt white-color">
                                {/* Title */}
                                <h3 className="h3-xs">{query.category}</h3>
                                {/* Share Icons */}
                                <div className="share-list">
                                        {/* <ul className="share-social-icons text-center clearfix">
                                            <li>
                                                <p>
                                                    <span>289 courses</span> found
                                                </p>
                                            </li>
                                            
                                        </ul> */}
                                </div>
                                {/* Text */}
                                {/* <p>
                                    <span>9,463 students</span> are learning English
                                    Language on eTreeks
                                </p> */}
                            </div>
                        </div>
                        {/* END PAGE HERO TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>) : null
        
    );
};

export default CoursesListPageHero;
