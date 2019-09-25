import React, { useEffect } from "react";
import { getCookie } from "../../helper/cookie";

const Profile = props => {
	const getData = async () => {
		let response = await fetch("/secure", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({
				username: getCookie("username")
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		});
		if (response.ok) {
			let resp = await response.json();
			document.getElementById("ProfileReplace").innerHTML = resp.message;
		} else {
			//props.history.push("/login");
		}
	};

	useEffect(() => {
		getData();
	});

	return (
		<div>
			PROFILE
			<div id="ProfileReplace">""</div>
		</div>
	);
};

export default Profile;
