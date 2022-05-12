import { Form } from "react-bootstrap";
import FormItem from "./FormItem";
import TopHeader from "./TopHeader";

const CreateForm = () => {
	return (
		<div className="createForm">
			<TopHeader />
			<div className="todoTitle">
				<a href="/dashboard">back</a>
				<p>create new todo</p>
			</div>
			<FormItem />
		</div>
	);
};

export default CreateForm;
