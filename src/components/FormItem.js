import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/user";


const FormItem = () => {

    const { setToDoList } = useUserContext();
    const navigate = useNavigate();

    const handleAdd = (e) => {
		e.preventDefault();
		// we need data from Form; for that we can use FormData API
		const formData = new FormData(e.target);
		console.log("---Form---", formData);
		setToDoList({
			title: formData.get("text"),
			description: formData.get("description"),
			createdOn: new Date().toUTCString(),
		});
		e.target.reset();
		navigate("/dashboard");
	};

	return (
		<div>
			<form onSubmit={handleAdd}>
				<div className="form-group">
					<label htmlFor="text" className="text-muted">
						Title
					</label>
					<input name="text" type="text" id="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="description" className="text-muted">
						Description:
					</label>
					<textarea
						name="description"
						id="description"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary">
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormItem;
