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

      // Try to decode JWT for user data if possible
      let userData = { firstName: 'User' };
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        userData = {
          id: payload.id || payload.sub,
          email: payload.email,
          firstName: payload.firstName || 'User',
          lastName: payload.lastName || '',
          role: payload.role || 'student'
        };
      } catch (e) {
        console.error("Token decode failed", e);
      }

      // ✅ Update AuthContext State so Navbar reflects login immediately
      login(userData, token);

      // ✅ Redirect to "/" (which is inside MainLayout and has the Navbar)
      navigate("/", { replace: true });
    } else {
      // ✅ Login page redirect
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
