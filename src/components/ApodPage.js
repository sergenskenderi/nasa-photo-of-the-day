import React , {useState , useEffect} from "react";
import ApodSection from "./ApodSection";
import DatePicker from 'react-date-picker';
// import dummyData from "../dummyData";
import axios from "axios";
import Moment from "moment";
import dummyData from "../dummyData";

function ApodPage() {
    //State to save the data from nasa url
    // eslint-disable-next-line
    const [data , setData] = useState(dummyData);
    const [date , setDate] = useState(new Date());

    const onChange = (e) => {
      if(e.target.value !== null){
      setDate({date : e.target.value});
      }
    }

    // use Effect using axios 
    // useEffect( () => {
    //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date={Moment(date).format("YYYY-MM-DD").toString()}`)
    //   .then( (response) => {
    //     console.log(response);
    //     setData(response.data)
    //   })
    // },[date]);

    if (!data || data.length === 0) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <DatePicker
        onChange={onChange}
        value={date}
        format="yyyy-MM-dd"
      />
    <ApodSection data={data}/>
    </div>
  );
}

export default ApodPage;
