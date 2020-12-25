import React from "react";
import { useStateValue } from "./StateProvider";

const Login = props => {
	const [state, dispatch] = useStateValue();

	const loginToApp = () => {
		//props.setUser("isabel");
		dispatch({
			type: "SET_USER",
			user: "isabel"
		});
	};
	return (
		<div>
			<h1>I am the login component</h1>
			<button onClick={loginToApp}>LOGIN</button>
		</div>
	);
};

export default Login;
