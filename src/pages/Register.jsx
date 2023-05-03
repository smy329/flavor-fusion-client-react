import React, { useContext, useState } from 'react';
import loginBg from '../assets/bg/loginPage.jpeg';
import { AuthContext } from '../providers/AuthProviders';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { user, setUser, createUserWithEmail, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regError, setRegError] = useState('');

  const handleName = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
    console.log(nameInput);
  };

  const handleProfileUrl = (e) => {
    const profileUrlInput = e.target.value;
    setProfileUrl(profileUrlInput);
    console.log(profileUrlInput);
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    console.log(email);
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmail(email, password)
      .then((result) => {
        const registeredUser = result.user;
        updateUserProfile(name, profileUrl)
          .then(() => console.log(registeredUser))
          .catch((error) => {
            setRegError(error.message);
            setRegSuccess(false);
          });
        setUser(registeredUser);
        setRegError('');
        navigate('/');
        console.log(registeredUser);
      })
      .catch((error) => {
        setRegError(error.message);
        console.log(error.message);
      });
  };
  return (
    <div className="bg-login">
      <section className="bg-black bg-opacity-30">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegister}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleName}
                    className="theme-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="profileUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your profile image url
                  </label>
                  <input
                    type="text"
                    name="profileUrl"
                    id="profileUrl"
                    value={profileUrl}
                    onChange={handleProfileUrl}
                    className="theme-input"
                    placeholder="Enter your profile image url"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    className="theme-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="••••••••"
                    className="theme-input"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="w-full theme-btn">
                  Register
                </button>
                <div>
                  {regError && (
                    <span className="block text-center text-sm font-medium text-rose-700 animate-pulse">
                      {regError}
                    </span>
                  )}
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  Already have an account yet? &nbsp;
                  <a
                    href="/login"
                    className="font-medium text-gray-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
