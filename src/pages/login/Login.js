import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import { signin } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, errorF } = userSignin;
  console.log(errorF);
  const dispatch = useDispatch();

  let router = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo?.roles[0].roleCode === "Commerciel") {
      toast.success("Commerciel Success Login", {
        position: "bottom-left",
      });

      router("/commerciel/factures");
    }
    if (userInfo && userInfo?.roles[0].roleCode === "Directeur") {
      toast.success("Directeur Success Login", {
        position: "bottom-left",
      });

      router("/directeur");
    }
    if (userInfo && userInfo?.roles[0].roleCode === "Manager") {
      toast.success("Manager Success Login", {
        position: "bottom-left",
      });

      router("/manager/home");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(signin(email, password));
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2 className="login-t">Login</h2>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Email"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              defaultValue={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
