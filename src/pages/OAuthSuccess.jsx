import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      // ✅ Home (Hero) page redirect
      navigate("/home", { replace: true });
    } else {
      // ✅ Login page redirect
      navigate("/Login", { replace: true });
    }
  }, []);

  return <h2>Login Successful... Redirecting...</h2>;
};

export default OAuthSuccess;
