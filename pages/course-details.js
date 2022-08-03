import React, { useState, useEffect } from "react";
import CourseDetails from "../src/components/Course Details/CourseDetails";
import CourseDetailsCourses5 from "../src/components/Course Details/CourseDetailsCourses5";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import { useRouter } from "next/router";
import axios from "axios";

const courseDetails = () => {
  
  const { query } = useRouter()
  const [currentCourseId, setCurrentCourseId] = useState('')
  const [teacher, setTeacher] = useState('')
  const [courseArray, setCourseArray] = useState(null)
  useEffect(()=>{
    console.log(teacher)
  }, [teacher])
  const get_teacher = async  (courseId) => {
    try {
      const teacherData = await axios({
        url: "https://lmsapi.keewesolutions.com/db/getTeacherData",
        method: "GET",
        params: {
          "courseId": courseId
        }
        
        
      })

      console.log(teacherData)
      setTeacher(teacherData.data.response.Items[0])
    } catch (e) {
      
    }
  }
  const get_course_details = async () => {
    try {   
      const courseDetails = await axios({
        url: "https://lmsapi.keewesolutions.com/db/fetchcoursedatawp",
        data: {
          'courseIds': [
            query.courseId
          ]
        },
        headers: {
          "Access-Control-Allow-Origin": '*'
        },
        method: "POST"
      })
      if (courseDetails.data != "error") {
        setCourseArray(courseDetails.data.data[0])
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    // get_course_details()
    // console.log("outside")
    if (query != null && query != undefined) {
      // console.log("insize")
      if (query.courseId != currentCourseId) {
        setCurrentCourseId(query)
      }
    }
  })
  // console.log(query)

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])

  useEffect(async ()=>{
    if(currentCourseId.length != 0){
     // console.log("here")
      get_course_details()
      get_teacher(currentCourseId.courseId)

    }
  },[currentCourseId])
  // useEffect(()=>{
  //   let body = document.getElementById("__next")
  //   console.log(body)
  //   body.scrollTop = 0
  // })

  useEffect(()=>{
    if(courseArray !== null)console.log(courseArray)
   
  }, [courseArray])
  return (
    <Layout>
      <div className="inner-page-wrapper">  
        <PageTitle motherTitle={courseArray != null ? courseArray.courseDetails.title : "pageTitle"}  />
        {courseArray != null ? (<CourseDetails courseArray={courseArray} teacher={teacher}/>): null}
        {/* <CourseDetailsCourses5 /> */}
      </div>
    </Layout>
  );
};

export default courseDetails;
