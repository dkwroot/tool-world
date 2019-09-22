import React, { useState } from "react";

const Register = props => {
	const [errors, setErrors] = useState([]);

	const handleSubmit = async () => {
		setErrors([]);
		const response = await fetch("/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: document.getElementById("username").value,
				email: document.getElementById("email").value,
				password: document.getElementById("password").value
			})
		});

		if (response.ok) {
			//const resp = await response.json();
			props.history.push("/login");
		} else {
			// Handle Failure
			const resp = await response.json();
			const temp = resp.map((obj, id) => {
				return (
					<div className="btn btn-warning btn-block" key={`error_${id}`}>
						{obj.message}
					</div>
				);
			});
			setErrors(temp);
		}
	};

	return (
		<div className="row mt-5">
			<div className="col-md-6 m-auto">
				<div className="card card-body">
					<h1 className="text-center mb-3">REGISTER</h1>
					<div id="warnings">{errors}</div>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								name="username"
								placeholder="Enter username..."
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter email..."
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Enter password..."
								className="form-control"
							/>
						</div>

						<input
							type="submit"
							name="Submit"
							className="btn btn-primary btn-block"
						/>
					</form>

					<button onClick={handleSubmit}>CLICK</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
