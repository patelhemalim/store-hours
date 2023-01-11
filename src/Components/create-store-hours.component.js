// CreateStudent Component for add new store hour

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StoreHoursForm from "./StoreHoursForm";

// CreateStudent Component
const CreateStoreHours = () => {
const [formValues, setFormValues] =
	useState({ day: '', open: '', close: '' })
// onSubmit handler
const onSubmit = storeHoursObject => {
	axios.put(
'https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/add-store-hours',
storeHoursObject)
	.then(res => {
		if (res.status === 200)
		alert('Store hours successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
return(
	<StoreHoursForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Store Hours
	</StoreHoursForm>
)
}

// Export CreateStoreHours Component
export default CreateStoreHours
