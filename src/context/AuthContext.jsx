import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProfileData = async (userId) => {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    setUser(profile);

    if (error) {
      console.error("Error fetching profile:", error.message);
      return null;
    }
    return profile;
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user?.email) {
        await getProfileData(session.user.id);
      } else if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async ({ email, password }, captchaToken) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        options: {
          captchaToken,
        },
      });
      if (error) throw error;

      const profile = await getProfileData(data.user.id);

      setUser(profile);
      return profile;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const anonSignIn = async (captchaToken) => {
    setLoading(true);
    try {
      const { data, error: loginError } = await supabase.auth.signInAnonymously(
        {
          options: {
            captchaToken,
          },
        },
      );

      if (loginError) {
        setError(loginError.message);
        throw loginError;
      }

      setUser(data.user);
      return { data: data, loginError: loginError };
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, login, anonSignIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
