import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreHoursForm from "./StoreHoursForm";
  
// EditStoreHours Component
const EditHours = (props) => {
  const [formValues, setFormValues] = useState({
    day: '', open: '', close: ''
  });
    
  //onSubmit handler
  const onSubmit = (hourObject) => {
    axios
      .put(
        "https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/update-store-hours/" +
          props.match.params.id,
        hourObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Hour successfully updated");
          props.history.push("/store-hours-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize hour form
  useEffect(() => {
    axios
      .get(
        "https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/get-store-hours-by-id/" 
        + props.match.params.id
      )
      .then((res) => {
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