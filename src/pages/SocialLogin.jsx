import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    // ✅ Save token
    localStorage.setItem("token", token);

    // ✅ Redirect to dashboard
    navigate("/Home", { replace: true });
  }, [navigate]);

  return <p style={{ color: "white", textAlign: "center" }}>Logging you in...</p>;
};

export default SocialLogin;