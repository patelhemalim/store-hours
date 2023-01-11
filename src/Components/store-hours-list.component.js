import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StoreHoursTableRow from "./StoreHoursTableRow";

const StoreHoursList = () => {
const [storeHours, setStoreHours] = useState([]);

useEffect(() => {
	axios
	.get("https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/list-store-hours")
	.then(({ data }) => {
        console.log(JSON.parse(data.body).Items)
		setStoreHours(JSON.parse(data.body).Items);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return storeHours.map((res, i) => {
	return <StoreHoursTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Day</th>
			<th>Start</th>
			<th>End</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default StoreHoursList;
