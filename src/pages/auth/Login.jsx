import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Commencer <span className="text-primary">session</span>
        </h1>
        <form className="mb-8">
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />
            Connectez-vous avec Google
          </button>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Courrier électronique"
            />
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Mot de passe"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Connexion
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/forgot-password"
            className="hover:text-primary transition-colors"
          >
            Vous avez oublié votre mot de passe?
          </Link>
          <span className="flex items-center gap-2">
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
