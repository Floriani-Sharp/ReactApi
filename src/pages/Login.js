import { PropTypes } from 'prop-types';
import React from 'react';

const Login = ({ signIn }) => {
  const submitForm = (e) => {
    e.preventDefault();
    signIn();
  };
  return (
    <form
      className="space-y-5 rounded-xl bg-white p-10 drop-shadow-lg"
      action=""
      onSubmit={submitForm}
    >
      <h1 className="text-center text-3xl">Connexion</h1>
      <label className="flex flex-col space-y-2" htmlFor="email">
        <span className="text-sm font-light">Email</span>
        <input
          className="w-96 rounded-md border border-slate-400 px-3 py-2"
          type="email"
          placeholder="Your Email"
          name="email"
          id="email"
        />
      </label>
      <label className="flex flex-col space-y-2" htmlFor="password">
        <span className="text-sm font-light">Mot de passe</span>
        <input
          className="w-96 rounded-md border border-slate-400 px-3 py-2"
          type="password"
          placeholder="Your Password"
          name="password"
          id="password"
        />
      </label>

      <label htmlFor="remember" className="block space-x-2">
        <input type="checkbox" name="remember" id="remember" />
        <span className="text-sm font-light">Se souvenir de moi</span>
      </label>

      <button
        className="w-full rounded-md bg-blue-600 px-10 py-2 text-white
      duration-300 ease-in hover:bg-blue-500 hover:drop-shadow-md"
        type="submit"
        onClick={submitForm}
      >
        Se connecter
      </button>

      <p className="text-right">
        <a
          className="text-sm font-light text-blue-600 hover:underline"
          href="mailto:admin@admin.com"
        >
          Mot de passe oublié?
        </a>
      </p>
    </form>
  );
};
Login.propTypes = {
  signIn: PropTypes.func,
};
export default Login;
