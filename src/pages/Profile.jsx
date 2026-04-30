import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import userIcon from "../assets/svg/profile.svg";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import SuccessModal from "../components/SuccessModal";

const Profile = () => {
  const { t } = useTranslation();
  const { user, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState({
    ...user,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [togglePassword, setTogglePassword] = useState({
    old: false,
    new: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updateConfirm, setUpdateConfirm] = useState(false);

  useEffect(() => {
    setProfileData({
      ...user,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }, [user]);

  const setInfo = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleBlur = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: profileData[event.target.name].trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (profileData.oldPassword) {
      if (!profileData.newPassword || !profileData.confirmPassword) {
        setError(t("profile.error.password.empty"));
        setLoading(false);
        return;
      } else if (profileData.newPassword !== profileData.confirmPassword) {
        setError(t("profile.error.password.match"));
        setLoading(false);
        return;
      } else if (profileData.newPassword.length < 6) {
        setError(t("profile.error.password.short"));
        setLoading(false);
        return;
      }
    }
    if (!profileData.username) {
      setError(t("profile.error.username"));
      setLoading(false);
      return;
    }

    try {
      let newUsername;
      if (user.username !== profileData.username) {
        const { data, error: dberror } = await supabase
          .from("profiles")
          .update({ username: profileData.username })
          .eq("id", user.id)
          .single();

          console.log(data);

        newUsername = data.username;
        if (dberror) {
          throw dberror;
        }
      }
      if (profileData.oldPassword) {
        const { error: dberror } = await supabase.auth.updateUser({
          password: profileData.confirmPassword,
          currentPassword: profileData.oldPassword,
        });
        if (dberror) {
          throw dberror;
        }
      }
      setProfileData({
        ...user,
        username: newUsername,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setUpdateConfirm(true);
    } catch (err) {
      if (
        err.message === "Auth Session Missing" ||
        err.message === "Password update requires reauthentication"
      ) {
        setError(t("profile.error.session"));
      } else if (err.message === "Weak Password") {
        setError(t("profile.error.password.short"));
      } else if (
        err.message ===
        "New password should be different from the old password."
      ) {
        setError(t("profile.error.password.same"));
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setUpdateConfirm(false);
  };

  const headerInfo = {
    image: userIcon,
    label: t("profile.header.label"),
    title: t("profile.header.title"),
    message: t("profile.header.message"),
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-xl mt-12 bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl"
        >
          <div className="flex flex-col gap-2 px-1">
            <label className="text-accgray/60 text-sm font-medium ml-1">
              {t("profile.form.labels.email")}
            </label>
            <div className="w-full bg-white/30 border border-accgray/5 rounded-2xl p-4 text-accgray/50 cursor-not-allowed">
              {profileData.email}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              value={profileData.username}
              placeholder={t("profile.form.placeholders.username")}
              onChange={setInfo}
              onBlur={handleBlur}
              required
              className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
            />

            <div className="relative">
              <input
                type={togglePassword.old ? "text" : "password"}
                name="oldPassword"
                value={profileData.oldPassword}
                placeholder={t("profile.form.placeholders.old_password")}
                onChange={setInfo}
                onBlur={handleBlur}
                required={
                  profileData.newPassword || profileData.confirmPassword
                }
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <button
                type="button"
                onClick={() =>
                  setTogglePassword({
                    ...togglePassword,
                    old: !togglePassword.old,
                  })
                }
                className="absolute top-3.25 right-6 text-accgreendark hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300"
              >
                {togglePassword.old ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="relative">
              <input
                type={togglePassword.new ? "text" : "password"}
                name="newPassword"
                value={profileData.newPassword}
                placeholder={t("profile.form.placeholders.new_password")}
                onChange={setInfo}
                onBlur={handleBlur}
                required={
                  profileData.oldPassword || profileData.confirmPassword
                }
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <button
                type="button"
                onClick={() =>
                  setTogglePassword({
                    ...togglePassword,
                    new: !togglePassword.new,
                  })
                }
                className="absolute top-3.25 right-6 text-accgreendark hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300"
              >
                {togglePassword.new ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={profileData.confirmPassword}
                placeholder={t("profile.form.placeholders.confirm_password")}
                onChange={setInfo}
                onBlur={handleBlur}
                required={profileData.newPassword || profileData.oldPassword}
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center italic">{error}</p>}

          <button
            type="submit"
            disabled={loading || authLoading}
            className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
          >
            {loading || authLoading ? (
              <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
            ) : (
              t("profile.form.submit")
            )}
          </button>
        </form>
      </div>
      {updateConfirm && (
        <SuccessModal
          close={closeModal}
          title={t("profile.success.title")}
          caption={t("profile.success.caption")}
        />
      )}
    </div>
  );
};

export default Profile;
