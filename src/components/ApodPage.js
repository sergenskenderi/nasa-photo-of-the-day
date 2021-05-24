import React , {useState , useEffect} from "react";
import ApodSection from "./ApodSection";
// import dummyData from "../dummyData";
import axios from "axios";

function ApodPage() {
    //State to save the data from nasa url
    // eslint-disable-next-line
    const [data , setData] = useState([]);
    // use Effect using axios 
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    useEffect( () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then( (response) => {
        console.log(response);
        setData(response.data)
      })
    },[]);

    if (!data || data.length === 0) return <h3>Loading...</h3>;
  return (
    <div className="App">
    <ApodSection key={data.date} data={data}/>;
    </div>
  );
}

export default ApodPage;
