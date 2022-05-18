import { useState } from "react";

const ListItem = ({ todo, id, handleCheck }) => {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.title);

    const handleOnEdit = () => {
        setOnEdit(true);
    }

    if(onEdit){

    }else{
	return (
        
		<div>
			<li key={id}>
				<label htmlFor="" className={todo.isDone ? "active" : "deactive"}>
					{console.log(todo.isDone)}
					{id + 1}. {todo.title}
				</label>
				<input type="checkbox" id="" onClick={() => handleCheck(todo)} />
                {/* <button disabled={todo.isDone} onClick={handleOnEdit}>
						EDIT
					</button> */}
			</li>
		</div>
	);
};
}

export default ListItem;
