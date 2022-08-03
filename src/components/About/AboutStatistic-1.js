import Link from "next/link";
import React from "react";
import Counter from "../Counter";
const AboutStatistic1 = () => {
  return (
    <div id="statistic-1" className="bg-yellow statistic-section division">
      <div className="container">
        <div className="row">
          {/* STATISTIC BLOCK #1 */}
          <div className="col-md-4">
            <div className="statistic-block">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end={75} />
              </h5>

              <div className="statistic-block-txt">
                <h5 className="h5-lg">Online Courses</h5>
               
              </div>
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-md-4">
            <div className="statistic-block">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end={4000} />
                
              </h5>

              <div className="statistic-block-txt">
                <h5 className="h5-lg">Enrolled Students</h5>
               
              </div>
            </div>
          </div>
          {/* STATISTIC BLOCK #3 */}
          <div className="col-md-4">
            <div className="statistic-block">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end={50} />
              </h5>

              <div className="statistic-block-txt">
                <h5 className="h5-lg">Instructors</h5>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default AboutStatistic1;
