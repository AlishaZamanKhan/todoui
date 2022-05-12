import { useUserContext } from "../contexts/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const { name, setName } = useUserContext();
	const navigate = useNavigate();

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = () => {
		navigate("/dashboard");
		console.log(name);
	};
	const check = true;

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
					{check && <p>Name is required</p>}
				</div>
				<button type="submit" className="btn btn-primary">
					Next
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
