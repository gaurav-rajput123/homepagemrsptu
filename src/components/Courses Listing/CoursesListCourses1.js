import { useRouter } from "next/router";
import React from "react";
import CoursesSlider from "../CoursesSlider";

const CoursesListCourses1 = () => {
  const {query} = useRouter()
  return (
    query!=undefined?(<section id="courses-1" className="wide-100 courses-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-40">
              {/* Title 	*/}
              <h4 className="h4-xl">Top <span style={{color: "green", fontSize: "1.25em"}}>{query.category}</span> Courses</h4>
              {/* Text */}
              
            </div>
          </div>
        </div>
        {/* COURSE BOXES CAROUSEL */}
        <div className="row">
          <div className="col-lg-12">
            <CoursesSlider query={query} />
          </div>
        </div>
        {/* END COURSES BOXES CAROUSEL */}
      </div>
      {/* End container */}
    </section>): null
  );
};

export default CoursesListCourses1;
