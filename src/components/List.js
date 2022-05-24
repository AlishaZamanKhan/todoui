import { useUserContext } from "../contexts/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditForm from "./EditForm";
import { confirm } from "react-confirm-box";

const List = ({todos}) => {
	const { name, toDoList, setToDoList, updateTodo, deleteTodo } =
		useUserContext();
	// const [onEdit, setOnEdit] = useState(false);  
	// const [editValue, setEditValue] = useState({});
	const navigate = useNavigate();

	const handleOnEdit = (todo) => {
		navigate(`/task/${todo.id}`);
	};

	const isFinished = (todo) => {
		todo.isDone = !todo.isDone;
		updateTodo(todo);
	};

	const options = {
		labels: {
			confirmable: "Confirm",
			cancellable: "Cancel",
		},
	};

	const handleDelete = async (todo) => {
		const result = await confirm("are you sure?");
		if (result) {
			deleteTodo(todo);
			return;
		}
		navigate("/dashboard");
	};

	return (
		<>
			{!todos.length ? (
				<div>
					<h2>Congratulations!! You finished all your tasks</h2>
				</div>
			) : (
				<div className="list">
					<ul>
						{todos.map((todo, index) => {
							return (
								<li key={index}>
									<label
										htmlFor=""
										className={todo.isDone ? "active" : "deactive"}
										onClick={(e) => handleOnEdit(todo)}
									>
										{index + 1}. {todo.title}
									</label>
									<div className="all-info">
										<div className="delete-checkbox">
											<div className="date">
												<span>{todo.createdOn}</span>
											</div>
											<input
												type="checkbox"
												id=""
												onClick={() => isFinished(todo)}
												checked={todo.isDone}
											/>
											<button type="delete" onClick={() => handleDelete(todo)}>
												Delete
											</button>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
};

export default List;
