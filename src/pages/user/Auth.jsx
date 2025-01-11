import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/Atom.svg';
import Form from '../../components/Form.jsx';


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
    <div className="h-screen w-screen bg-lightwhiteturquoise dark:bg-blackturquoise items-center">
      <div className="flex justify-center h-full items-center">
        <div className="w-[290px] max-w-md bg-white dark:bg-dark rounded-3xl shadow-lg p-6 text-dark">
          <div onClick={mainNavigate} className="flex justify-center mb-2 cursor-pointer gap-2">
            <Logo alt="Logo" className="" />
            <span className="text-xl text-dark dark:text-lightwhiteturquoise font-semibold whitespace-nowrap">RLArena</span>
          </div>
          {/* Навигация между формами */}
          <div className="flex justify-around mb-6 relative dark:text-lightwhiteturquoise">
            <button
              className={`text-xl p-0 mb-2 bg-transparent border-none ${!isRegister ? "font-bold" : "font-thin"
                }`}
              onClick={() => setIsRegister(false)}
              ref={loginRef}
            >
              Вход
            </button>
            |
            <button
              className={`text-xl p-0 mb-2 bg-transparent border-none ${isRegister ? "font-bold" : "font-thin"
                }`}
              onClick={() => setIsRegister(true)}
              ref={registerRef}
            >
              Регистрация
            </button>
            {/* Подчеркивание */}
            <div
              className="absolute bottom-0 h-1 bg-darkturquoise dark:bg-lightwhiteturquoise transition-all duration-300"
              style={{
                width: isRegister ? registerWidth : loginWidth,
                left: isRegister ? registerLeft : loginLeft,
              }}
            />
          </div>

          {/* Форма */}
          {isRegister ? (
            <Form type='signup' isFieldsRow={false} isCretionForm={false} buttonText="Регистрация" />
          ) : (
            <Form type='login' isFieldsRow={false} isCretionForm={false} buttonText="Вход" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
