import React, { useState } from 'react';
import Form from '/src/components/Form.jsx';

const SettingsMenu = ({ onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal') {
      onClose(); 
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('Основные');
  const categories = ['Основные', 'Аккаунт', 'Профиль']

  const settingsForms = {
    'Основные': {type: "generalSettings", isFieldsRow: true, buttonText: "Сохранить"},
    'Аккаунт': {type: "accountSettings", isFieldsRow: false, buttonText: "Сохранить"},
    'Профиль': {type: "profileSettings", isFieldsRow: false, buttonText: "Сохранить"},
  };

  const user = {
    username: "NoooN",
    fullName: "Горский Иван Артёмович",
    organization: "УрФУ",
    registration_date: "5-01-2025",
    location: "Екатеринбург, Россия",
    saved: {
      competitions: [24],
      guides: [201, 205, 203],
      data: [101, 103, 104],
    },
    created: {
      competitions: [1],
      guides: [],
      data: [],
    }
  }

  return (
    <div
      id="modal"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="flex bg-white rounded-lg w-3/4 md:w-1/2 shadow-xl overflow-hidden text-dark min-h-[350px]">
        <div className="w-1/3 bg-whiteturquoise p-4">
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer py-2 px-4 rounded-lg ${
                  selectedCategory === category ? 'bg-blue-200' : ''
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          <Form 
            type={settingsForms[selectedCategory].type}
            isFieldsRow={settingsForms[selectedCategory].isFieldsRow}
            buttonText={settingsForms[selectedCategory].buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
