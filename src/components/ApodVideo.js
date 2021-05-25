import React from "react";
import ReactPlayer from 'react-player'

function ApodVideo({url}) {
  return (
    // eslint-disable-next-line
    <ReactPlayer url={url} style={{margin : 'auto'}}/>
  );
}

export default ApodVideo;
