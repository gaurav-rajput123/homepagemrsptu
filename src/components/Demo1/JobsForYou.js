import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AlertJob from "../../../pages/PopupComponent/AlertJob";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1CoursesProps } from "../sliderProps";

const JobsForYou = () => {
    const [jobsArray, setJobsArray] = useState([])
    const [show, setShow] = useState(false);
    // const [show1, setShow1] = useState(false);
    // setTimeout(() => {
    //   setShow(false)
    // }, 2000)
    const get_jobs = async () => {
        try {
            const results = await axios({
                url: "https://api.keewesolutions.com/wp/get",
                params: {
                    "category": "Data Science",
                },
                method: "GET"
            })
            console.log(results.data.data.Items)
            setJobsArray(results.data.data.Items)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        get_jobs()
    }, [])

    const companyArray = [
        {
            'imag': 'https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/ba79db80-166e-40a2-aa8e-f16dce6364c0.png',
            'coursename': 'Blockchain & Solidity',
            'lpa':'Bangalore-based company hiring at 3-6 LPA'

        },
        {
            'imag': 'https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/edc21353-0d59-41e4-9f47-aee9b0a5db53.png',
            'coursename': 'Machine Learning with Python',
            'lpa':'Pune-based company hiring at 3-6 LPA'
        },
        {
            'imag': 'https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/0d936f4c-748e-4ad1-85c4-d0c0df4c75eb.png',
            'coursename': 'Programming using Python',
            'lpa':'Hyderabad-based company hiring at 3-6 LPA'
        },
        {
            'imag': 'https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/16c17f7f-5a8b-4f08-b8e7-b6be99fc240b.png',
            'coursename': 'Cyber Crime',
            'lpa':'Noida-based company hiring at 3-6 LPA'
        },

    ]
    return (
        <section
            id="courses-3"
            className="bg-lightgrey wide-60 courses-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="h3-sm">Jobs For You</h3>
                        <h5>More than 1000 active jobs</h5>
                        <div className="section-title mb-60">
                            <div className="title-btn">
                                <a className="btn btn-rose tra-black-hover" onClick={()=>{setShow(true)}}>
                                Show All
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* COURSES HOLDER */}
                <div className="row courses-grid heightjob" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {/* COURSE #1 */}
                    {/* {
                        jobsArray.map((item, index) => {


                            return (
                                <div className="col-md-6 col-lg-4 col-xl-3" key={item.jobId}>
                                    <div className="cbox-11">
                                        <Link href={
                                            {
                                                pathname: "/course-details",
                                                query: {
                                                    "courseId": item.jobId
                                                }
                                            }
                                        } >
                                            <a>
                                                Company Image
                                                <img
                                                    className="img-fluid1"
                                                    src={"https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + item.courseId + ".png"}
                                                    src={'https://research-keewe.s3.ap-southeast-1.amazonaws.com/logo%28512x512%29-2.png'}
                                                    alt="course-preview"
                                                    style={{ height: '230px', borderRadius: '10px' }}
                                                />
                                                Text
                                                <div className="cbox-4-txt">
                                                   
                                                    Job Title
                                                    <h5 className="h5-xs">
                                                        {item.title}
                                                    </h5>
                                                    
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>)
                        }
                        )
                    } */}

                    {companyArray.map((item, index) => {
                        return (
                            <>
                                {/* <div className="col-md-6 col-lg-4 col-xl-3" key={item.jobId}>
                                    <div className="cbox-11">
                                        <div style={{}}> */}
                                {/* Company Image */}
                                {/* <img
                                                className="img-fluid1"
                                                src={item.imag}
                                                alt="course-preview"
                                                style={{ borderRadius: '10px' }}
                                            /> */}
                                {/* Text */}
                                {/* <hr />
                                            <div style={{ display: 'flex', marginTop: '-20px', height: '120px', justifyContent: 'space-around', alignItems: 'center' }}>

                                                <div className="cbox-3-txt"> */}

                                {/* Job Title */}
                                {/* <p className="course-tags">
                                                        <span>{item.employmentType}</span>
                                                    </p>
                                                    <h5 className="h5-xs">
                                                        {item.name}
                                                    </h5>

                                                </div>
                                                <div className="cbox-3-txt"> */}

                                {/* Job Title */}
                                {/* <p className="course-tags" style={{ boxSizing: 'border-box' }}>
                                                        <span>{item.number}</span>
                                                    </p>
                                                    <h5 className="h5-xs">
                                                        {item.title}
                                                    </h5>

                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}> */}
                                {/* <Link href={
                                                {
                                                    pathname: "/course-details",
                                                    query: {
                                                        "courseId": item.jobId
                                                    }
                                                }
                                            } > */}
                                {/* {show && <AlertJob setShow={setShow} />}
                                                <button className="apply" style={{ backgroundColor: '#ff1f59' }} onClick={() => { setShow(true) }} >Apply Now</button> */}


                                {/* </Link> */}
                                {/* </div>
                                        </div>
                                    </div>
                                </div> */}


                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="col-lg-12" style={{ marginBottom: '2%' }}>
                                        <Swiper {...home1CoursesProps}>
                                            {/* CATEGORIE BOX #1 */}
                                            <SwiperSlide className="bg-color bxshadow c3-box text-center icon-md white-color width1"
                                                style={{ height: '320px' }}
                                            >
                                                {/* <Link href={{
                                                    pathname: "courses-list", query: {
                                                        category: 'Designing'
                                                    }
                                                }}>
                                                    <a> */}
                                                {/* Icon */}
                                                <h5 className="h5-xs" style={{color: '#fff', marginTop: '-5%'}}>{item.coursename}</h5>
                                                <div>
                                                    <img
                                                        src={item.imag}
                                                        alt="category-icon"
                                                        style={{width: '100%', height: '8rem', borderRadius: '14px'}}
                                                    />
                                                </div>
                                                {/* Text */}
                                                <div className="cbox-3-txt1" style={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
                                                    <div style={{marginRight: '2%'}}>
                                                        {/* <p className="h5-xs">{item.employmentType}</p> */}
                                                        {/* <h6 className="h5-xs" style={{marginTop: '-10%'}}>{item.name}</h6> */}
                                                    {/* </div> */}
                                                    {/* <div> */}
                                                        {/* <p className="h5-xs">{item.number}</p> */}
                                                        <h6 className="h5-md" style={{marginTop: '5%'}}>{item.lpa}</h6>
                                                    </div>
                                                    {/* <p>36 Courses</p> */}
                                                </div>
                                                <div className="apply-btn" style={{ textAlign: 'center', marginBottom: '5%' }}>
                                                    <button className="apply" style={{ backgroundColor: '#ff1f59', marginTop: '-5%' }} onClick={() => { setShow(true) }} >Buy Now</button>
                                                </div>
                                                {/* </a>
                                                </Link> */}
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                {/* {show && <AlertJob setShow={setShow} />} */}
                                {/* {show1 && <AlertJob setShow={setShow1} />} */}
                            </>)
                    })}

                </div>
                <div>
                </div>
                {/* END COURSES HOLDER */}
            </div>

        </section >
    );
};

export default JobsForYou;
