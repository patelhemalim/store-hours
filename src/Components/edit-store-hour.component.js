import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreHoursForm from "./StoreHoursForm";
import { Link, useParams } from 'react-router-dom';

// EditStoreHours Component
const EditHours = (props) => {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    day: '', open: '', close: ''
  });
    
  //onSubmit handler
  const onSubmit = (hourObject) => {
    axios
      .put(
        "https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/update-store-hours/" +
          id,
        hourObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Hour successfully updated");
          //props.history.push("/store-hours-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize hour form
  useEffect(() => {
    console.log(id)
    axios
      .get(
        "https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/get-hours-by-id/" 
        + id 
      )
      .then((res) => {
        console.log(res.data)
         const { day, open, close } = res.data;
         setFormValues({ day, open, close });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return Hour form
  return (
    <StoreHoursForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Hour
    </StoreHoursForm>
  );
};
  
// Export EditHours Component
export default EditHours;