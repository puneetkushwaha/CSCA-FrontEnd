import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) return;

    const token = searchParams.get("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    hasProcessed.current = true;

    // ✅ Direct token decode (No API call)
    let userData = {};

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      userData = {
        id: payload.id || payload.sub,
        email: payload.email || "",
        firstName: payload.firstName || payload.email || "User",
        lastName: payload.lastName || "",
        role: payload.role || "student",
      };
    } catch (e) {
      console.error("Token decode failed", e);
      userData = {
        email: "",
        firstName: "User",
        lastName: "",
        role: "student",
      };
    }

    login(userData, token);
    navigate("/", { replace: true });
  }, [searchParams, login, navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <h2 className="text-white text-2xl font-black uppercase tracking-widest animate-pulse">
        Authenticating...
      </h2>
    </div>
  );
};

export default OAuthSuccess;
