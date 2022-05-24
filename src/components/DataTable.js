import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const baseURL =
	"https://datausa.io/api/data?drilldowns=Nation&measures=Population";

function DataTable() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			console.log("------------------ ", response.data.data);
			setData(response.data.data);
		});
	}, []);

	const columns = [
		{
			label: "ID Nation",
			id: 1,
			path: "id_nation",
			content: (item, key) => <td>{item[key]}</td>,
		},

		{
			label: "Nation",
			id: 2,
			path: "nation",
			content: (item, key) => <td>{item[key]}</td>,
		},
		{
			label: "ID Year",
			id: 3,
			path: "id_year",
			content: (item, key) => <td>{item[key]}</td>,
		},
		{
			label: "Year",
			id: 4,
			path: "year",
			content: (item, key) => <td>{item[key]}</td>,
		},
        {
			label: "Population",
			id: 4,
			path: "year",
			content: (item, key) => <td>{item[key]}</td>,
		},
        {
			label: "Slug Nation",
			id: 4,
			path: "year",
			content: (item, key) => <td>{item[key]}</td>,
		},
	];

	return (
		<div>
			<table class="table table-striped">
				<thead>
                    {
                        columns.map((column) => {
                            {console.log("my column----------------",column)}
                            return( 
                            <th scope="col">{column.label}</th>
                           )
                        })
                    }
				</thead>
				<tbody>
			
					{data.map((row) => {
						return (
							<tr key={row["ID Nation"]}>
								{columns.map((column) => {
									return (
										<React.Fragment key={column.path}>
											{column.content(row, column.label)}
										</React.Fragment>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default DataTable;
