import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { v4 as uuidv4 } from "uuid";

// ----------------------------------------------------------------------

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) =>
		Promise.reject(
			(error.response && error.response.data) || "Something went wrong"
		)
);

const axiosMockAdapter = new AxiosMockAdapter(axiosInstance, {
	delayResponse: 2500,
});

let todos = [
	{
		id: 1,
		title: "some todo title",
		description: "some desc",
		isDone: false,
	},
	{
		id: 2,
		title: "some todo title",
		description: "some desc",
		isDone: false,
	},
	{
		id: 3,
		title: "some todo title",
		description: "some desc",
		isDone: false,
	},
];

// axiosMockAdapter.onGet('/api/chat/conversations').reply(200, { conversations });

//all the mock axios methods

axiosMockAdapter.onGet("/users").reply(200, {
	todos,
});

axiosMockAdapter.onPost("/todos/createtodo").reply((config) => {
	try {
		const data = JSON.parse(config.data);
		console.log(typeof data, data);
		const id = uuidv4();
		todos.push({
			id,
			...data,
		});
		return [200, { succuss: true }];
	} catch (error) {
		console.log("debug-----------", error);
		return [500, { succuss: false }];
	}
});

export default axiosInstance;
