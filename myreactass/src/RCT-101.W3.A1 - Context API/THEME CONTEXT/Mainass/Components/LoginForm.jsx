import React from "react";
import { useContext , useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const LoginForm = () => {
  const [form, setForm] = useState({});
  const {login}=useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  const handleChange = (e) => {
    const field = e.target;
    setForm({
      ...form,
      [field.name]: field.value,
    });
  };
  return (
    <div>
      LoginForm
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>username</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div>
            <label>password</label>
            <input type="text" name="password" onChange={handleChange} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;