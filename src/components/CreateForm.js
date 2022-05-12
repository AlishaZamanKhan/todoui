import { Form } from "react-bootstrap";
import FormItem from "./FormItem";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";

const CreateForm = () => {
	return (
		<div className="createForm">
			<TopHeader />
			<div className="todoTitle">
				<Link to={`/dashboard`} activeClassName="back">
					<p>back</p>
				</Link>
				<p>create new todo</p>
			</div>
			<FormItem />
		</div>
	);
};

export default CreateForm;
