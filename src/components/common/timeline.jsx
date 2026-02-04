import React from "react";
import "./styles/timeline.css"
import dataTimeline from "../../data/dataTimeline";
import { Chrono } from "react-chrono";

const Timeline = () => {

    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      }];

  return (
    <div className="homepage-timeline">
      <div style={{ width: "100%", height: "500px" }}>
        <Chrono 
            items={dataTimeline} 
            mode="HORIZONTAL" 
            theme={{
                primary: '#e1524d',
                secondary: '#e1524d',
               // #e1524d 
               // #F75A5A
               // #e0aa70
                cardBgColor: '#f4f4f5',
                titleColor: 'black',
                titleColorActive: 'black',
              }}
        />
      </div>
    </div>
  );
}

export default Timeline;
