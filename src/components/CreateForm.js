import { Form } from "react-bootstrap";
import FormItem from "./FormItem";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
	const { name } = useUserContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!name) navigate('/');
	});

    const HandleGoBack = () => {
        navigate('/dashboard');
    }

	return (
		<div className="createForm">
			<TopHeader />
			<div className="todoTitle">
					<span onClick = {() => HandleGoBack() } id ="go_back">back</span>
				<span>create new todo</span>
			</div>
			<FormItem />
		</div>
	);
};

export default CreateForm;
