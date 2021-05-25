import React from "react";
import DatePicker from 'react-date-picker';

function ApodDate({date , setDate}) {
  return (
      <DatePicker
        onChange={date => setDate(date)}
        value={date}
        format="yyyy-MM-dd"
      />
  );
}

export default ApodDate;
