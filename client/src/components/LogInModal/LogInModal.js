import React, { useState } from "react";
import "./LogInModal.css";
import "../../styles/global.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
import { CgClose } from "react-icons/cg";
import { login } from "../../networkCalls/userCalls";
import { pharmacyLogin } from "../../networkCalls/pharmacyCalls";
import { Loader } from "../Loader/Loader";
import background_first_page_1080p from "../../assets/background_first_page_1080p.jpg";
const LogInModal = ({
  heading,
  type,
  setUserButton,
  setShopOwnerButton,
  link_to,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const previousPath = "/";
  const {
    userDispatch,
    pharmacyDispatch,
    networkLoader,
    setNetworkLoader,
  } = useAuth();

  const handleClose = () => {
    setUserButton(false);
    setShopOwnerButton(false);
  };

  async function loginHandler() {
    let res;
    setNetworkLoader(true);
    if (type === "user") {
      let res = await login(email, password);
      setNetworkLoader(false);
      if (res.data.success) {
        userDispatch({ type: "CREATE_USER_SESSION", payload: res.data.user });
        navigate(previousPath, { replace: "true" });
      }
      setError(res.data.message);
    } else {
      let res = await pharmacyLogin(email, password);
      setNetworkLoader(false);
      if (res.data.success) {
        pharmacyDispatch({
          type: "CREATE_PHARMACY_SESSION",
          payload: res.data.pharmacy,
        });
        navigate(previousPath, { replace: "true" });
      }
      setError(res.data.message);
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div className="modal-background">
      {networkLoader && (
        <div className="network-loader">
          <Loader />
        </div>
      )}
      <img src={background_first_page_1080p} alt="background_image" />
      <div className="user-box">
        <div className="header-stuff">
          <h3>{heading}</h3>
          <span onClick={handleClose}>
            <CgClose />
          </span>
        </div>

        <form
          className="user-form"
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
          {error && <h5>{error}</h5>}
          <input type="submit" value="Log In" className="user-submit" />
        </form>
        <div className="create-an-account">
          <h5>
            Don't have an account? <Link to={link_to}>Create an account</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
