import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StoreHoursForm = (props) => {
const validationSchema = Yup.object().shape({
	day: Yup.string().required("Required"),
	open: Yup.string().required("Required"),
    close: Yup.string().required("Required")
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="day" type="text"
				className="form-control" />
			<ErrorMessage
			name="day"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="open" type="text"
				className="form-control" />
			<ErrorMessage
			name="open"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="close" type="text"
				className="form-control" />
			<ErrorMessage
			name="close"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StoreHoursForm;
