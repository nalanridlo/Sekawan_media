
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
   
    const validUsername = "sekawanmedia";
    const validPassword = "sekawanmedia";

    if (username === validUsername && password === validPassword) {
      navigate("/home");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    // <div>
    //   <h2>Login Page</h2>
    //   <div>
    //     <label>
    //       Username:
    //       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Password:
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </label>
    //   </div>
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <>
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"  />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="form-outline mb-4">
              <label className="form-label" for="form3Example3">Username</label>
            <input type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-outline mb-3">
              <label className="form-label" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
             onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Login;
