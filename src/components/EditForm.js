import FormItem from "./FormItem";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../contexts/user";
import { useEffect, useState } from "react";
import TopHeader from "./TopHeader";

function EditForm() {
	let { taskId } = useParams();
	const { getInfo, updateTodo } = useUserContext();
	const [loader, setLoader] = useState(true);
	const [task, setTask] = useState(taskId);
	const navigate = useNavigate();

	useEffect(() => {
		if (taskId) {
			setTask(getInfo(taskId));
		}
	}, [taskId]);

	const { title, description, id, isDone } = task;

	const handleChange = (e) => {
		setTask((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const handleSubmit = (task) => {
		updateTodo(task);
		navigate("/dashboard");
	};

    const HandleGoBack = () => {
        navigate('/dashboard');
    }

	return (
		<div className="createForm">
            <TopHeader />
			<div className="todoTitle">
				<span onClick={() => HandleGoBack()} id="go_back">
					back
				</span>
				<span>create new todo</span>
			</div>
			<div>
				<form onSubmit={() => handleSubmit(task)}>
					<div className="form-group">
						<label htmlFor="text" className="text-muted">
							Title
						</label>
						<input
							name="title"
							type="text"
							id="title"
							className="form-control"
							value={title}
							onChange={(e) => (!isDone ? handleChange(e) : "")}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description" className="text-muted">
							Description:
						</label>
						<textarea
							className="form-control"
							name="description"
							id="description"
							value={description}
							onChange={(e) => (!isDone ? handleChange(e) : "")}
						/>
					</div>
					<div className="form-group">
						{!isDone ? (
							<button type="submit" className="btn btn-primary">
								Update
							</button>
						) : (
							""
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditForm;
