import Link from "next/link";
import { useContext } from "react";
import { VideoContext } from "../context/video";
const Video1 = () => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <section id="video-1" className="bg-lightgrey bg-map video-ection division">
      <div className="container">
        <div className="video-1-holder">
          <div className="row d-flex align-items-center">
            {/* VIDEO LINK */}
            <div className="col-md-6">
              <div className="video-link text-center">
                {/* Change the link HERE!!! */}
                <div className="play-btn play-btn-rose text-center">
                  <Link href="#">
                    <a
                      onClick={() => showVideo()}
                      className="video-popup3 video-play-button"
                      href="#"
                    >
                      <span />
                    </a>
                  </Link>
                  {/* Preview Image */}
                  <img
                    className="img-fluid"
                    src="images/thumbnail.jpg"
                    alt="video-preview"
                  />
                </div>
              </div>
            </div>
            {/* END VIDEO LINK */}
            {/* VIDEO TEXT */}
            <div className="col-md-6">
              <div className="video-txt">
                {/* Title */}
                <h4 className="h5-xl">
                 Inauguration of 75 online certificate courses in emerging technologies.  
                  {/* <span>MRSPTU</span> */}
                </h4>
                {/* Text */}
                <p className="p-md">
                 MRSPTU,Bathinda to take a lead in creating a digital  eco-system for its online learners.
                </p>
                {/* Button */}
                {/* <Link href="/courses-list">
                  <a className="btn btn-rose tra-black-hover">Find Out More</a>
                </Link> */}
              </div>
            </div>
            {/* END VIDEO TEXT */}
          </div>
          {/* End row */}
        </div>
        {/* End video-1-holder */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Video1;
