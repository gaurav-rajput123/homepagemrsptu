import Link from "next/link";
import React from "react";
const Demo1Banner3 = () => {
  return (
    <section
      id="banner-3"
      className="bg-lightdark bg-map banner-section division"
    >
      <div className="container">
        <div className="banner-3-holder bg-lightgrey">
          <div className="row d-flex align-items-center">
            {/* BANNER IMAGE */}
            <div className="col-lg-7">
              <div className="banner-3-img">
                <img
                  className="img-fluid"
                  src="images/lastimage.jpg"
                  alt="banner-image"
                />
              </div>
            </div>
            {/* END BANNER IMAGE */}
            {/* BANNER TEXT */}
            <div className="col-lg-5">
              <div className="banner-3-txt">
                {/* Title */}
                <h4 className="h4-xs">
                  Learn something new every day with 
                  <span style={{marginLeft:"5px"}} >MRSPTU Online</span>
                </h4>
                {/* Button */}
                <Link href={{
                  pathname: "register", 
                  query: {
                    category: 'Civil Engineering'
                  }
                }}>
                  <a className="btn btn-rose tra-black-hover">Quick Enquiry</a>
                </Link>
              </div>
            </div>
            {/* END BANNER TEXT */}
          </div>
          {/* End row */}
        </div>
        {/* End banner-3-holder */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1Banner3;
