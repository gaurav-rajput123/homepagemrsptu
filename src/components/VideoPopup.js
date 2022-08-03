import React, { Fragment, useContext, useEffect, useRef } from "react";
import { VideoContext } from "../context/video";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const VideoPopup = () => {
  const videoContext = useContext(VideoContext);
  const { video, hideVideo } = videoContext;

  let domNode = useClickOutside(() => {
    hideVideo();
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => hideVideo()}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => hideVideo()}
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src={
                  video.id
                    ? `https://www.youtube.com/embed/VIDEO_ID${video.id}?autoplay=1`
                    : "https://www.youtube.com/embed/UX2Z3uPs--c?autoplay=1"
                }
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoPopup;
