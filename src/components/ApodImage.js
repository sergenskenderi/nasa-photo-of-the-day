import React from "react";

function ApodImage({url}) {
  return (
    // eslint-disable-next-line
    <img
      src={url}
      alt="Image of the day"
      style={{width : '80%'}}
      />
  );
}

export default ApodImage;
