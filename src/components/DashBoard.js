import { Link } from "react-router-dom";
import List from "./List";
import TopHeader from "./TopHeader";
import { useUserContext } from "../contexts/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";
import Loader from "./Loader";

const DashBoard = () => {
	const { name, toDoList } = useUserContext();
	const [todos, setTodos] = useState([]);
	const navigate = useNavigate();
	console.log("my state-----------", toDoList);

	useEffect(() => {
        console.log("this is useEffect");
		const getData = async () => {
			const response = await toDoList;
			console.log("reseeeeeeeeee", response);
            setTodos(response.data.todos);
		};

		getData();

	}, []);

	useEffect(() => {
		if (!name) {
			navigate("/");
		}
	}, []);

	const toCreateForm = () => {
		navigate("/createform");
	};

	useEffect(() => {
		setTodos(toDoList);
	}, [toDoList]);

    console.log("Hahaaaaaaaa", todos);


	return (
		<>
			{todos.length ? (
				<div className="dashboard">
					<TopHeader />
					<div className="todos">
						<div className="top_bar">
							<span>My ToDos</span>
							<span id="create_new" onClick={() => toCreateForm()}>
								Create New
							</span>
						</div>
						<List todos={todos}/>
						{/* <DataTable /> */}
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default DashBoard;
