import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import EditHours from "./edit-hour.component";

const StoreHoursTableRow = (props) => {
const { id, day, open, close } = props.obj;

const deleteStoreHour = async () => {
	axios
	.delete("https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/delete-store-hours/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Store Hour successfully deleted");
		 window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{day}</td>
	<td>{open}</td>
	<td>{close}</td>
	<td>
           
    <Link className="edit-link" 
          to={"/edit-store-hour/" + id}>
          Edit
        </Link>
		
		<Button onClick={deleteStoreHour}
		size="sm" variant="danger">
		Delete
		</Button>
     
	</td>
	</tr>
);
};

export default StoreHoursTableRow;
