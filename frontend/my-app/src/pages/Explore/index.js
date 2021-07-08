import React from "react";
import "./style.css";
import BannerImg from '../../assets/images/explore-banner-img.png';
import { deepLearningVideoData, suggestionVideoData } from "./mockData";

const Explore = () => {
  return (
    <main className="explore-section">
      <img src={BannerImg} width="100%" alt="" />
      <div className="suggestion-section">
        <h3>Sci-Fi Videos</h3>
        <div className="flex flex-wrap justify-between">
          {suggestionVideoData.map((vid) => (
            <div className="thumbnail" key={vid.id}>
              <img src={vid.src} width="220px" alt="" />
              <h5>{vid.title}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="suggestion-section">
        <h3>Deep Learning Videos</h3>
        <div className="flex flex-wrap justify-between">
          {deepLearningVideoData.map((vid) => (
            <div className="thumbnail" key={vid.id}>
              <img src={vid.src} width="220px" alt="" />
              <h5>{vid.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Explore;
