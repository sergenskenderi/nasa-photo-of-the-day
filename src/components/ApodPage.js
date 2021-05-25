import React , {useState , useEffect} from "react";
import ApodSection from "./ApodSection";
// import dummyData from "../dummyData";
import axios from "axios";
import dummyData from "../dummyData";

function ApodPage() {
    function formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
  }
    //State to save the data from nasa url
    // eslint-disable-next-line
    const [data , setData] = useState(dummyData);
    const [date , setDate] = useState(new Date());

    //use Effect using axios 
    useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${formatDate(date)}`)
      .then( (response) => {
        console.log(response);
        setData(response.data);
      })
    },[date]);

    if (!data || data.length === 0) return <h3>Loading...</h3>;
  return (
    <div className="App">
      {/* <DatePicker
        onChange={date => setDate(date)}
        value={date}
        format="yyyy-MM-dd"
      /> */}
    <ApodSection data={data} setDate={setDate} date={date}/>
    </div>
  );
}

export default ApodPage;
