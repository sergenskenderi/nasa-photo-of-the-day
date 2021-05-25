import React from "react";
import ApodDate from "./ApodDate";
import ApodDescription from "./ApodDescription";
import ApodImage from "./ApodImage";
import ApodVideo from "./ApodVideo";
import ApodTitle from "./ApodTitle";
import ApodCopyright from "./ApodCopyright";


function ApodSection(props) {
    var media_type ;
    if(props.data.media_type === "image"){
      media_type = <ApodImage url={props.data.url} />;
    }else{
      media_type = <ApodVideo url={props.data.url} />;
    }
  return (
    <div>
      <h2>
         Astronomy Picture of the Day
        </h2>
        <br></br>
        <ApodDate setDate={props.setDate} date={props.date}/>
        <br></br>
        <br></br>
        {media_type}
        <br></br>
      <ApodTitle title={props.data.title}/>
       <hr style={{width : '30%'}}></hr>
      <ApodDescription desc={props.data.explanation} />
      <ApodCopyright copyright={props.data.copyright} />
      
    </div>
  );
}

export default ApodSection;
