
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();

  const { handleSubmit, reset} = useForm();

  const onSubmit = (data) => {
    signin(data);
    reset();
  };
  return (
    <div className="log-container">

      <div className="log-content">
        <div className="form-content">
            <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="username">User Name: </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="type a username..."
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address: </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="type a email..."
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="type a password..."
                required
              />
            </div>
            <div className="btn-submit">
              <input type="submit" value="create account" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;