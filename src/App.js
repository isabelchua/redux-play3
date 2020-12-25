import "./App.css";
import Login from "./Login";
import Feed from "./Feed";
import Header from "./Header";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function App() {
	//const [user, setUser] = useState(null);
	const [state, dispatch] = useStateValue();

	return (
		<div className="App">
			<h1>app</h1>
			<h3>
				{state.user ? `Logged in as ${state.user}` : "No user is logged in"}
			</h3>
			{/* <Login setUser={setUser} /> */}
			<Login />
			<Header />
			<Feed />
		</div>
	);
}

export default App;
