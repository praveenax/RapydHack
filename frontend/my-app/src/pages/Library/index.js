import React from "react";
import { historyVideoData, latestVideoData } from "./mockData";
import "./style.css";

const Library = () => {
  return (
    <main className="library-section">
      <h1>Library</h1>
      <div className="flex">
        <div className="latest-video-section">
          <h3>Latest</h3>
          <div className="flex flex-wrap">
            {latestVideoData.map((vid) => (
              <div className="thumbnail" key={vid.id}>
                <img src={vid.src} width="210px" alt="" />
                <h5>{vid.title}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="history-video-section">
          <h3>History</h3>
          {historyVideoData.map((vid) => (
            <div className="thumbnail" key={vid.id}>
              <img src={vid.src} width="210px" alt="" />
              <h5>{vid.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Library;
