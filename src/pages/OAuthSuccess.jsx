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

    if (token) {
      hasProcessed.current = true;

      const fetchProfile = async () => {
        try {
          const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://csca.onrender.com';
          // Using /api/auth/me as the likely endpoint for profile info
          const res = await fetch(`${BASE_URL}/api/auth/me`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (res.ok) {
            const data = await res.json();
            const userData = data.user || data;
            login(userData, token);
            navigate("/", { replace: true });
          } else {
            console.warn("Profile fetch failed, using fallback decode");
            handleFallback(token);
          }
        } catch (error) {
          console.error("Profile fetch error:", error);
          handleFallback(token);
        }
      };

      const handleFallback = (token) => {
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
  }

  login(userData, token);
  navigate("/", { replace: true });
};


      fetchProfile();
    } else {
      navigate("/login", { replace: true });
    }
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
