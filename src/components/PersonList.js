import axios from "axios";
import { useEffect, useState } from "react";

function PersonList() {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.tyicode.com/users").then((res) => {
			console.log(res);
			setPersons(res.data);
		});
	}, []);
	return (
		<div>
			<ul>
				{persons.map((person) => {
					return <li>{person.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default PersonList;
