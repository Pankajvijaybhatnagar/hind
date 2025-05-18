"use client";
import { useEduorContext } from "@/context/EduorContext";
import React from "react";

const VideoSection = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__video mt_100">
      <div className="tf__video_overlay pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto wow fadeInUp">
              <div className="tf__video_text text-center">
                <a
                  className="venobox play_btn"
                  role="button"
                  onClick={handleVideoShow}
                >
                  <i className="fas fa-play"></i>
                </a>
                <h4>Explore Our Educational Journey</h4>
                <p>
                  Discover how Hindustan Council of Secondary Education empowers students 
                  with quality education and transformative learning experiences.
                </p>
                <a className="common_btn" href="#">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
