import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { home1CoursesProps } from "./sliderProps";
const CoursesSlider = ({ query }) => {
  // const { query } = useRouter()
  // const [category, setCategory] = useState(query.category)
  const [courseList, setCourseList] = useState([])
  console.log(query)
  useEffect(async () => {
    if(query != undefined){if (query.category != undefined) {
      console.log(query)
      get_courses(query.category)
    }}
  })
  const get_courses = async (category) => {
    try {
      const results = await axios({
        url: "https://api.keewesolutions.com/wp/get",
        params: {
          "category": category
        },
        method: "GET"
      })
      console.log(results.data.data.Items)

      if(JSON.stringify(results.data.data.Items) != JSON.stringify(courseList)){
        setCourseList(results.data.data.Items)
      }
    } catch (e) {
      console.log(e)
    }
  }

  // function remakeList(list: Array){
  //   let now =  []
  //   let soon = []
  //   list.map((item)=>{
  //     if(item.price != undefined){
  //       now.push(item)
  //     }else{
  //       soon.push(item)
  //     }
  //   })
  //   let newArray = Array(list.length).fill(0)
  //   for(let index in newArray){
  //     if(index % 2)
  //   }
  // }
  return (
    <div className="row courses-grid">
        {courseList.map((item, index) => {
          return (
            <div className="col-md-6 col-lg-4 col-xl-3" key={item.courseId}>
            <div className="cbox-1">
            <Link href={{pathname:"/course-details", query: {
              courseId: item.courseId
            } }}  key={item.couseId}>
              <a>
                {/* Image */}
                <img
                  className="img-fluid1"
                  src={"https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + item.courseId + ".png"}
                  alt="course-preview"
                />
                {/* Text */}
                <div className="cbox-1-txt">
                  {/* Course Tags */}
                  <p className="course-tags">
                    <span>Languages</span>
                    <span>English</span>
                    <span>Hindi</span>
                  </p>
                  {/* Course Title */}
                  <h5 className="h5-xs">{item.title}</h5>
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
                    {item.price != undefined ? <>₹ {item.price} </> : <b>COMING SOON</b>}
                  </span>
                </div>
              </a>
            </Link>
            </div>
            </div>
          )
        })}
        <p/>
       

      
    </div>
  );
};

export default CoursesSlider;

// {courseList.map((item, index) => {
//   return item.price == undefined ? (
//     <div className="col-md-6 col-lg-4 col-xl-3" key={item.courseId}>
//     <div className="cbox-1">
//     <Link href={{pathname:"/course-details", query: {
//       courseId: item.courseId
//     } }}  key={item.couseId}>
//       <a>
//         {/* Image */}
//         <img
//           className="img-fluid1"
//           src={"https://storage-mediaoutput.s3.ap-south-1.amazonaws.com//thumbnails/" + item.courseId + ".png"}
//           alt="course-preview"
//         />
//         {/* Text */}
//         <div className="cbox-1-txt">
//           {/* Course Tags */}
//           <p className="course-tags">
//             <span>Languages</span>
//             <span>English</span>
//             <span>Hindi</span>
//           </p>
//           {/* Course Title */}
//           <h5 className="h5-xs">{item.title}</h5>
//           {/* Course Rating */}
//           <div className="course-rating clearfix">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star-half-alt" />
//             <span>4.5 (26 Ratings)</span>
//           </div>
//           {/* Course Price */}
//           <span className="course-price">
//             {item.price != undefined ? (<span className="old-price">₹ 10000</span>) : null}
//             {item.price != undefined ? <>₹ {item.price} </> : <b>COMING SOON</b>}
//           </span>
//         </div>
//       </a>
//     </Link>
//     </div>
//     </div>
//   ) : null
// })}
