import { useUserContext } from "../contexts/user";

const LogOutButton = () => {
	const { logout } = useUserContext();

	return <span onClick={logout}>Logout</span>;
};

export default LogOutButton;
