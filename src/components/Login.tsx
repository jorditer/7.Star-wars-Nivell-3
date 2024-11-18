import { useState, FormEvent } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.user));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="form">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="form-text">Login Form</h1>
        <p className="form-p">Sign up using your mail and a password</p>
        <input
          className="login"
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          className="login"
          type="text"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>

        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
