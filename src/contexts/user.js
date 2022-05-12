import React, { useState } from "react";
import { useContext } from "react";

const initialState = { name: null,  toDoList: [
    {id: 1,  title: "some todo title",  description: "some desc"},
    {id: 2,  title: "some todo title",  description: "some desc"},
    {id: 3,  title: "some todo title",  description: "some desc"}
    ]};
    
const UserContext = React.createContext({
	...initialState,
	setName: () => {},
});

export function MyProvider({ children }) {
	const [state, updateState] = useState(initialState);

    const setName = (newValue) => {
        updateState({...state, name: newValue})
    }

    const setToDoList = (newValue) => {
        const array = [...state.toDoList];
        array.push(newValue);
        updateState({...state, toDoList: array})
    }
	return (
		<UserContext.Provider value={{ ...state , setName, setToDoList}}>{children}</UserContext.Provider>
	);
}

export const useUserContext = () => useContext(UserContext);

export default UserContext;


