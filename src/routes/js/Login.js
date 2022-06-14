import React, { useState } from "react";
import LoginForm from "../../components/js/LoginForm";
import "../../components/css/Login.css";

function App() {
  const adminUSer = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" }); 
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    console.log("*");
    if (
      details.email == adminUSer.email &&
      details.password == adminUSer.password
    ) {
      console.log("Logged in");
      setUser({
        //name: details.name,
        email: details.email,
      });
    } else {
      alert("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ email: "" }); 
  };

  return (
    <div className="AppPS">
      <div>
        {" "}
        {user.email != "" ? (
          <div className="welcomePS">
            <h2> Welcome!</h2>
            <div>
              {" "}
              <button onClick={Logout} className="logoutcssPS">
                Logout{" "}
              </button>{" "}
            </div>{" "}
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}{" "}
      </div>{" "}
    </div>
  );
}
export default App;
