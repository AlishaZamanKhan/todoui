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
				{toDoList.map((toDo, index) => {
					return (
						<li key={index}>
							<label htmlFor="" className={toDo.isDone ? "active" : "deactive"}>
								{console.log(toDo.isDone)}
								{index + 1}. {toDo.title}
							</label>
							<input type="checkbox" id="" onClick={() => isFinished(toDo)} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
