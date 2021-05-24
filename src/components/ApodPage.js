import React , {useState} from "react";
import ApodSection from "./ApodSection";
import dummyData from "../dummyData";

function ApodPage() {
    //State to save the data from nasa url
    const [data , setData] = useState([dummyData]);
    // use Effect using axios 
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

  return (
    <div className="App">
        {data.map( (d) => {
            return <ApodSection key={d.date} data={d}/>;
        })}
    </div>
  );
}

export default ApodPage;
