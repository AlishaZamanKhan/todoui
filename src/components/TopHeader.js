import { useUserContext } from "../contexts/user";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

const TopHeader = () => {
	const { name, logout } = useUserContext();
	return (
		<div className="top_header">
			<span id="heading">Simple ToDo</span>
			<div className="right_header">
				<span>I am  {name}</span>
				<Link to={`/`} activeClassName="back">
                    <LogOutButton />
				</Link>
			</div>
		</div>
	);
};

export default TopHeader;
