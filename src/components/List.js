import ListItem from "./ListItem";
import { useUserContext } from "../contexts/user";

const List = () => {
	const { name, toDoList } = useUserContext();
	return (
		<div className="list">
			<ul>
				{toDoList.map((toDo, index) => {
					return (
						<li key={index}>
							<label htmlFor="" className="active">
								{index + 1}. {toDo.title}
							</label>
							<input type="checkbox" id="" />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
