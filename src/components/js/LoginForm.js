import React, { useState } from "react";


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="containerPS">
      <div className="formPS">
        {" "}
        <form onSubmit={submitHandler}>
          <div className="background-imgPS">
            <div className="boxPS">
              <span> </span> <span> </span> <span> </span> <span> </span>
              <div className="form-innerPS">
                <div className="contentPS">
                  <div className="headerPS">
                    <h1> Login </h1>{" "}
                  </div>
                  {error != "" ? <div className="errorPS"> {error} </div> : ""}
                  <div className="form-groupPS">
                    <label className="labelPS" htmlFor="email">
                      {" "}
                      Email :{" "}
                    </label>

                    <input
                      className="inputPS"
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      value={details.mail}
                    />
                  </div>{" "}
                  <div className="form-groupPS">
                    <label className="labelPS" htmlFor="passwordPS">
                      {" "}
                      Password:{" "}
                    </label>

                    <input
                      className="inputPS"
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    />
                  </div>{" "}
                  <div className="abcPS">
                    <button className="btn-change3PS"> {"LOGIN"} </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default LoginForm;
