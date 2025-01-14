import axios from 'axios';
import Cookies from 'js-cookie';

export const getUser = async () => {
    const token = Cookies.get('access_token');
    if (token) {
        try {
            const response = await axios.get('http://localhost:8000/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            return response.data; // Возвращаем данные пользователя
        } catch (error) {
            console.error('Error:', error);
            return null; // Возвращаем null в случае ошибки
        }
    } else {
        console.error('No token found in cookies');
        return null; // Если токен не найден
    }
};
