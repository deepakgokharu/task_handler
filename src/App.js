import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="*" element={<Homepage />} />
					<Route path="*" element={<h1>Wrong page</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
