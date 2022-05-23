import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
	name: null,
	toDoList: [
		{
			id: 1,
			title: "some todo title",
			description: "some desc",
			isDone: false,
		},
		{
			id: 2,
			title: "some todo title",
			description: "some desc",
			isDone: false,
		},
		{
			id: 3,
			title: "some todo title",
			description: "some desc",
			isDone: false,
		},
	],
};

const UserContext = React.createContext({
	...initialState,
	setName: () => {},
});

export function MyProvider({ children }) {
	const [state, updateState] = useState(initialState);

	const setName = (newValue) => {
		updateState({ ...state, name: newValue });
	};

	const setToDoList = (newValue) => {
		const array = [...state.toDoList];
		array.push({id: state.toDoList.length + 1, ...newValue});
		updateState({ ...state, toDoList: array });
	};

	const updateTodo = (todo) => {
		const newList = state.toDoList;
		for (let i in newList) {
			if (newList[i].id === todo.id) {
				newList[i] = todo;
				break;
			}
		}
		updateState({ ...state, toDoList: newList });
	};
	const navigate = useNavigate();

	const logout = () => {
		const array = [];
		updateState({ ...state, toDoList: array });
		updateState({ ...state, name: "" });

		navigate("/");
	};

	const setInitialTodo = () => {
		updateState({ ...state, toDoList: initialState.toDoList });
	};

	const getInfo = (id) =>
		state.toDoList.find((todo) => todo.id.toString() === id.toString());

    const deleteTodo = (todo) => {
        const newList = [...state.toDoList].filter((item) => item.id !== todo.id);
        updateState({...state, toDoList: newList})
    }

	useEffect(() => {
		const todoStore = JSON.parse(localStorage.getItem("todoStore"));
		if (todoStore) updateState(todoStore);
	}, []);

	useEffect(() => {
		localStorage.setItem("todoStore", JSON.stringify(initialState));
	}, [initialState]);

	return (
		<UserContext.Provider
			value={{
				...state,
				setName,
				setToDoList,
				updateTodo,
				logout,
				setInitialTodo,
				getInfo,
                deleteTodo
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export const useUserContext = () => useContext(UserContext);

export default UserContext;
