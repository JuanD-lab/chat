
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const Join = () => {
  const { loginData } = useAuth();

  const { handleSubmit, reset} = useForm();

  const onSubmit = (data) => {
    loginData(data);
    reset();
    console.log("goa");
  };

  return (
      <>
      <h1>Join</h1>

      <div className="form-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="type a email..."
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="type a password..."
                required
              />
            </div>

            <div className="btn-submit">
              <input type="submit" value="Login" />
            </div>
          </form>
          <Link to="/signin">
            <p>Create an account</p>
          </Link>
        </div>
    </>
  );
};

export default Join;