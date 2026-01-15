import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

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

    const fetchUser = async () => {
      try {
        // ✅ REAL USER DATA FROM BACKEND
        const res = await fetch(`${BASE_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Unauthorized");

        const user = await res.json();

        // ✅ Save user + token in AuthContext
        login(user, token);

        // ✅ Redirect to profile / home
        navigate("/", { replace: true });
      } catch (err) {
        console.error("OAuth login failed", err);
        navigate("/login", { replace: true });
      }
    };

    fetchUser();
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