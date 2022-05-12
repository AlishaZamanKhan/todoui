import List from "./List";
import TopHeader from "./TopHeader";

const DashBoard = () => {
	return (
		<div className="dashboard">
			<TopHeader />
			<div className="todos">
				<div className="top_bar">
					<span>My ToDos</span>
					<a href="/createform">Create New</a>
				</div>
				<List />
			</div>
		</div>
	);
};

export default DashBoard;
