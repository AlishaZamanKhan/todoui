import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditForm from "./EditForm";

const ListItem = ({ todo, id, handleCheck }) => {
	const [onEdit, setOnEdit] = useState(false);
	const [editValue, setEditValue] = useState(todo.title);
	const navigate = useNavigate();
	const handleOnEdit = () => {
		setOnEdit(true);
	};

	if (onEdit) {
		return <EditForm />;
	} else {
		return (
			<div>
				<li key={id}>
					<label
						htmlFor=""
						className={todo.isDone ? "active" : "deactive"}
						onClick={() => handleOnEdit()}
					>
						{console.log(todo.isDone)}
						{id + 1}. {todo.title}
					</label>
					<input type="checkbox" id="" onClick={() => handleCheck(todo)} />
				</li>
			</div>
		);
	}
};
export default ListItem;
