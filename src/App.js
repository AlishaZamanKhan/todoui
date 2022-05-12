import { Routes, Route } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { MyProvider } from "./contexts/user";


function App() {
	return (
		<div className="App">
			<MyProvider>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/createform" element={<CreateForm />} />
				</Routes>
			</MyProvider>
			<Footer />
		</div>
	);
}

export default App;
