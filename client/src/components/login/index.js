import React from "react";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serverURL } from "../../constants/constants";

const Login = props => {
	const handleSubmit = async e => {
		const spinner = document.getElementById("spinnerArea");
		spinner.style.visibility = "visible";
		e.preventDefault();
		console.log(serverURL + "/login");
		const response = await fetch(serverURL + "/login", {
			method: "POST",
			credentials: "include",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: document.getElementById("email").value,
				password: document.getElementById("password").value
			})
		});
		try {
			if (response.ok) {
				let resp = await response.json();
				document.cookie = `username=${resp.username}`;
				props.history.push("/");
			} else {
				throw new Error("Error");
			}
		} catch (error) {
			document.getElementById("loginMessage").innerHTML = error.message;
			document.getElementById("loginMessage").style.display = "block";
		}

		spinner.style.visibility = "hidden";
	};

	const handleRegister = e => {
		props.history.push("/register");
	};

	return (
		<div className="row mt-5">
			<div className="col-md-6 m-auto">
				<div className="card card-body">
					<h1 className="text-center mb-3">
						<FontAwesomeIcon icon="sign-in-alt" />
						Login
					</h1>
					<div style={{ visibility: "hidden" }} id="spinnerArea">
						<Spinner animation="border" />
					</div>
					<div
						className="btn btn-block btn-warning"
						id="loginMessage"
						style={{ display: "none" }}
					/>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-control"
								placeholder="Enter Email"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								id="password"
								name="password"
								className="form-control"
								placeholder="Enter password"
							/>
						</div>

						<input
							type="submit"
							name="Submit"
							className="btn btn-primary btn-block"
						/>
					</form>
					<button onClick={handleRegister} className="btn btn-danger">
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
