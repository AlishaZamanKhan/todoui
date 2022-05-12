import { useUserContext } from "../contexts/user";

const TopHeader = () => {
	const { name } = useUserContext();
	return (
		<div className="top_header">
			<span id="heading">Simple ToDo</span>
			<div className="right_header">
				<span>Ms {name}</span>
				<a href="/">LogOut</a>
			</div>
		</div>
	);
};

export default TopHeader;
