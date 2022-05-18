import ListItem from "./ListItem";
import { useUserContext } from "../contexts/user";

const List = () => {
	const { name, toDoList, setToDoList, updateTodo } = useUserContext();

	const isFinished = (todo) => {
		todo.isDone = !todo.isDone;
		updateTodo(todo);
	};

	return (
		<div className="list">
			<ul>
				{toDoList.map((todo, index) => {
					return <ListItem todo={todo} id={index} handleCheck = {isFinished}/>;
				})}
			</ul>
		</div>
	);
};

export default List;
