import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '/src/assets/icons/Atom.svg';


const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [registerWidth, setRegisterWidth] = useState(0);
  const [loginWidth, setLoginWidth] = useState(0);
  const [registerLeft, setRegisterLeft] = useState(0);
  const [loginLeft, setLoginLeft] = useState(0);

  const registerRef = useRef(null);
  const loginRef = useRef(null);

  const navigate = useNavigate();

  const mainNavigate = () => {
    navigate('/');
  };

  useEffect(() => {
    if (registerRef.current && loginRef.current) {
      setRegisterWidth(registerRef.current.offsetWidth);
      setRegisterLeft(registerRef.current.offsetLeft);
      setLoginWidth(loginRef.current.offsetWidth);
      setLoginLeft(loginRef.current.offsetLeft);
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-lightwhiteturquoise items-center">
      <div className="flex justify-center h-full items-center">
        <div className="w-[290px] max-w-md bg-white rounded-3xl shadow-lg p-6 text-dark">
          <div onClick={mainNavigate} className="flex justify-center mb-2 cursor-pointer">
            <img src={Logo} alt="Logo" className="" />
            <span className="text-xl text-black font-semibold whitespace-nowrap">RLArena</span>
          </div>
          {/* Навигация между формами */}
          <div className="flex justify-around mb-6 relative text-darkturquoise">
            <button
              className={`text-xl text-darkturquoise p-0 mb-2 bg-white border-none ${
                !isRegister ? "font-bold" : "font-thin"
              }`}
              onClick={() => setIsRegister(false)}
              ref={loginRef}
            >
              Вход
            </button>
            |
            <button
              className={`text-xl text-darkturquoise p-0 mb-2 bg-white border-none ${
                isRegister ? "font-bold" : "font-thin"
              }`}
              onClick={() => setIsRegister(true)}
              ref={registerRef}
            >
              Регистрация
            </button>
            {/* Подчеркивание */}
            <div
              className="absolute bottom-0 h-1 bg-darkturquoise transition-all duration-300"
              style={{
                width: isRegister ? registerWidth : loginWidth,
                left: isRegister ? registerLeft : loginLeft,
              }}
            />
          </div>

          {/* Форма */}
          {isRegister ? (
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Имя"
                  required
                  className="block w-full h-8 p-4 text-base placeholder-darkturquoise text-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Эл. почта"
                  required
                  className="block w-full h-8 p-4 text-base placeholder-darkturquoise text-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Пароль"
                  required
                  className="block w-full h-8 p-4 text-base placeholder-darkturquoise text-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-darkturquoise text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Зарегестрироваться
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  placeholder="Имя или Эл. почта"
                  required
                  className="block w-full h-8 p-4 text-base placeholder-darkturquoise text-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Пароль"
                  required
                  className="block w-full h-8 p-4 text-base placeholder-darkturquoise text-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-darkturquoise text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Войти
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
