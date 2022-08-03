import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Demo1Courses3 = () => {
    const [courseArray, setCourseArray] = useState([])
    const get_courses = async () => {
        try {
            const results = await axios({
                url: "https://api.keewesolutions.com/wp/get",
                params: {
                    "category": "Data Science",
                },
                method: "GET"
            })
            console.log(results.data.data.Items)
            setCourseArray(results.data.data.Items)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        get_courses()
    }, [])
    return (
        <section
            id="courses-3"
            className="bg-lightgrey wide-60 courses-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="h3-sm">Most Popular Courses</h3>
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            {/* Text */}
                            {/* <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p> */}
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="brochureform">
                                    <a className="btn btn-rose tra-black-hover">
                                        Download Brochure
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* COURSES HOLDER */}
                <div className="row courses-grid">
                    {/* COURSE #1 */}
                    {
                        courseArray.map((item, index) => {


                            return (
                                <div className="col-md-6 col-lg-4 col-xl-3" key={item.courseId}>
                                    <div className="cbox-1">
                                        <Link href={
                                            {
                                                pathname: "/course-details",
                                                query: {
                                                    "courseId": item.courseId
                                                }
                                            }
                                        } >
                                            <a>
                                                {/* Image */}
                                                <img
                                                    className="img-fluid1"
                                                    src={"https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + item.courseId + ".png"}
                                                    alt="course-preview"
                                                    style={{ height: '230px' }}
                                                />
                                                {/* Text */}
                                                <div className="cbox-4-txt">
                                                    {/* Course Tags */}
                                                    <p className="course-tags">
                                                        <span>Languages</span>
                                                        <span>English</span>
                                                        <span>Hindi</span>
                                                    </p>
                                                    {/* Course Title */}
                                                    <h5 className="h5-xs">
                                                        {item.title}
                                                    </h5>
                                                    {/* Course Rating */}
                                                    <div className="course-rating clearfix">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <span>4.5 (26 Ratings)</span>
                                                    </div>
                                                    {/* Course Price */}
                                                    <span className="course-price">
                                                        {item.orginal != undefined ? (<span className="old-price">₹ {item.orginal}</span>) : null}
                                                        {item.price != undefined ? <>₹ {item.price}</> : "COMING SOON"}
                                                    </span>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>)
                        }
                        )
                    }
                    {/* END COURSE #1 */}
                    {/* COURSE #2 */}
                    <p />
                    {
                        // courseArray.map((item, index) => {


                        //     return item.price == undefined ? (
                        //     <div className="col-md-6 col-lg-4 col-xl-3" key={item.courseId}>
                        //         <div className="cbox-1">
                        //             <Link href={
                        //                 {
                        //                     pathname: "/course-details",
                        //                     query: {
                        //                         "courseId": item.courseId
                        //                     }
                        //                 }
                        //             } >
                        //                 <a>
                        //                     {/* Image */}
                        //                     <img
                        //                         className="img-fluid1"
                        //                         src={"https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + item.courseId + ".png"}
                        //                         alt="course-preview"
                        //                         style={{ height: '230px' }}
                        //                     />
                        //                     {/* Text */}
                        //                     <div className="cbox-4-txt">
                        //                         {/* Course Tags */}
                        //                         <p className="course-tags">
                        //                             <span>Languages</span>
                        //                             <span>English</span>
                        //                             <span>Hindi</span>
                        //                         </p>
                        //                         {/* Course Title */}
                        //                         <h5 className="h5-xs">
                        //                             {item.title}
                        //                         </h5>
                        //                         {/* Course Rating */}
                        //                         <div className="course-rating clearfix">
                        //                             <i className="fas fa-star" />
                        //                             <i className="fas fa-star" />
                        //                             <i className="fas fa-star" />
                        //                             <i className="fas fa-star" />
                        //                             <i className="fas fa-star-half-alt" />
                        //                             <span>4.5 (26 Ratings)</span>
                        //                         </div>
                        //                         {/* Course Price */}
                        //                         <span className="course-price">
                        //                             {/* <span className="old-price">
                        //                                 ₹ 10000
                        //                             </span> */}
                        //                             <b>COMING SOON</b>
                        //                         </span>
                        //                     </div>
                        //                 </a>
                        //             </Link>
                        //         </div>
                        //     </div>) : null}
                        // )
                    }
                </div>
                <div>
                </div>
                {/* END COURSES HOLDER */}
            </div>
            {/* Button */}
            {/* <div className="title-btn">
                <Link href={{
                    pathname: "courses-list", query: {
                        category: 'IT and Software Development'
                    }
                }}>
                    <a className="btn btn-tra-grey rose-hover">
                        View Courses
                    </a>
                </Link>
            </div> */}
            {/* End container */}
        </section>
    );
};

export default Demo1Courses3;
