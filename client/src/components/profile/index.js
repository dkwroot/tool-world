import React, { useEffect } from "react";
import { getCookie } from "../../helper/cookie";

const Profile = props => {
  const getData = async () => {
    const userName = await getCookie("username");
    let response = await fetch(`/secure/profile?username=${userName}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      const resp = await response.json();
      document.getElementById("user_email").innerHTML = resp.message.email;
      document.getElementById("user_name").innerHTML = resp.message.username;
    } else {
      console.log("FAILED");
      //props.history.push("/login");
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <h3 className="text-center">PROFILE</h3>
      <div className="container" style={{ maxWidth: "400px" }}>
        <div className="row border">
          <div className="col-sm-3 col-12 bg-secondary text-white">
            username:
          </div>
          <div className="col-1" id="user_name">
            ""
          </div>
        </div>
        <div className="row border">
          <div className="col-sm-3 col-12 bg-secondary text-white">email:</div>
          <div className="col-1" id="user_email">
            ""
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
