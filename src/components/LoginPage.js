import { useUserContext } from "../contexts/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const { name, setName, setInitialTodo } = useUserContext();
	const navigate = useNavigate();
	const [check, setCheck] = useState(true);
	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = () => {
		setInitialTodo();
		navigate("/dashboard");
	};

	return (
		<div className="page_one">
			<h3>Simple TODO List</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						<input
							type="name"
							onChange={handleChange}
							className="form-control"
							id="username"
							placeholder="Enter name"
							pattern="[A-Za-z0-9]{1,20}"
							required
						/>
					</label>
				 {/* <p className={check}>Name is required</p> */}
				</div>
				<button type="submit" className="btn btn-primary">
					Next
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
