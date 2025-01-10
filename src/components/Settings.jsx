import React, { useState } from 'react';
import Form from '../components/Form.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import Close from '../assets/icons/Close.svg';

// Моковые данные
import { user, logged } from '../mockdata/userData.js';

const SettingsMenu = ({ onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal') {
      onClose(); 
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('Основные');
  const categories = ['Основные', 'Аккаунт', 'Профиль']

  const settingsForms = {
    'Аккаунт': {type: "accountSettings", isFieldsRow: false, buttonText: "Сохранить"},
    'Профиль': {type: "profileSettings", isFieldsRow: false, buttonText: "Сохранить"},
  };

  return (
    <div
      id="modal"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="relative flex bg-white rounded-lg w-3/4 md:w-1/2 shadow-xl overflow-hidden text-dark min-h-[350px] max-w-[600px]">
        
        <button 
          onClick={onClose}
          className='absolute bg-transparent top-0 right-0 p-0 m-2 border-0'
        >
          <Close />
        </button>
        <div className="w-1/3 bg-whiteturquoise p-4">
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer py-2 px-4 rounded-lg hover:bg-lightwhiteturquoise ${
                  selectedCategory === category ? 'bg-white hover:bg-white' : ''
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          {selectedCategory in settingsForms ? (
            <Form
              user={user}
              type={settingsForms[selectedCategory].type}
              isFieldsRow={settingsForms[selectedCategory].isFieldsRow}
              buttonText={settingsForms[selectedCategory].buttonText}
            />
          ) : (
            <ThemeToggle/>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
