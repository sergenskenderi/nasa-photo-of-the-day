import React from "react";

function ApodImage({url}) {
  return (
    <img
      className="image"
      src={url}
      alt="Image of the day"
      />
  );
}

export default ApodImage;
