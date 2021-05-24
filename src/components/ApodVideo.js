import React from "react";
import { ReactVideo } from "reactjs-media";

function ApodVideo({url}) {
  return (
    // eslint-disable-next-line
    <ReactVideo
    src={url}
    primaryColor="red"
    // other props
/>
  );
}

export default ApodVideo;
