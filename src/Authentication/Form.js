import React, { Component } from "react";
// import logo from "./assets/logo.png";
// import "./Login.css";

export default function Login () {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  

  
    return (
      <div className="Aapp" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
      }}>
        {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">PassWord</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">LKAS</button>
        </form>
        <button className="secondary">
          Criar uma nova conta
        </button>
      </div>
    );
  
}

// export default App;
