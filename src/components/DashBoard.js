import { Link } from "react-router-dom";
import List from "./List";
import TopHeader from "./TopHeader";
import { useUserContext } from "../contexts/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DashBoard = () => {
    const {name} = useUserContext();
	const navigate = useNavigate();


    useEffect(() =>{
        if(!name){navigate('/')}
    },[])

    const toCreateForm= () => {
        navigate('/createform')
    }


       
	return (
		<div className="dashboard">
			<TopHeader />
			<div className="todos">
				<div className="top_bar">
					<span>My ToDos</span>
					<span id ="create_new" onClick={() => toCreateForm()}>Create New</span>
				</div>
				<List />
			</div>
		</div>
	);
};


export default DashBoard;
