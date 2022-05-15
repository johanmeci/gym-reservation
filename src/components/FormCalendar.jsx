import React, { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import moment from "moment";

import "react-calendar/dist/Calendar.css";
import "../styles/calendarStyle.css";

const FormCalendar = () => {

  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar 
        locale="es" 
        onChange={onChange} 
        value={value} 
        prev2Label={null} 
        next2Label={null}  
      />
      <p>{moment(value).format('MM-D-Y')}</p>
    </>
  );
}

export default FormCalendar;