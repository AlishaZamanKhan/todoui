import { useUserContext } from "../contexts/user";
import { Link } from "react-router-dom";

const TopHeader = () => {
	const { name } = useUserContext();
	return (
		<div className="top_header">
			<span id="heading">Simple ToDo</span>
			<div className="right_header">
				<span>I am  {name}</span>
				<Link to={`/`} activeClassName="back">
					<span>Logout</span>
				</Link>
			</div>
		</div>
	);
};

export default TopHeader;
