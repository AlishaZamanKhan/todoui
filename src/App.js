import { Routes, Route } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { MyProvider } from "./contexts/user";
import EditForm from "./components/EditForm";
import DataTable from "./components/DataTable";


function App() {
	return (
		<div className="App">
			<MyProvider>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/createform" element={<CreateForm />} />
					<Route path={`/task/:taskId`} element={<EditForm />} />
				</Routes>
			</MyProvider>
        
			<Footer />
		</div>
	);
}

export default App;
