import { Link } from "react-router-dom";
import List from "./List";
import TopHeader from "./TopHeader";

const DashBoard = () => {
	return (
		<div className="dashboard">
			<TopHeader />
			<div className="todos">
				<div className="top_bar">
					<span>My ToDos</span>
					<Link to={`/createform`} activeClassName="createNew">
					<span>Create New</span>
				</Link>
				</div>
				<List />
			</div>
		</div>
	);
};

export default DashBoard;
