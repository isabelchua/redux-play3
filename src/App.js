import "./App.css";
import Login from "./Login";
import Feed from "./Feed";
import Header from "./Header";
import { useState } from "react";

function App() {
	const [user, setUser] = useState(null);
	return (
		<div className="App">
			<h1>app</h1>
			<Login />
			<Header />
			<Feed />
		</div>
	);
}

export default App;
