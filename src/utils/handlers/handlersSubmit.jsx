import axios from "axios";

export const handleRegistrationSubmit = async (e, setError, setIsSubmitted) => {
  e.preventDefault();
  setError(null);
  const formData = new FormData(e.target);
  try {
    const response = await axios.post('http://localhost:8000/api/users', formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
      },
    });

    const { access_token } = response.data;

    if (access_token) {
        document.cookie = `access_token=${access_token}; path=/; samesite=None; Secure`;
    }
    setIsSubmitted(true);
  } catch (err) {
    setError("Ошибка отправки данных: " + (err.response?.data?.message || err.message));
  }
};


export const handleLoginSubmit = async (e, setError, setIsSubmitted) => {
  e.preventDefault();
  setError(null);
  const formData = new FormData(e.target);
  try {
    const response = await axios.post('http://localhost:8000/api/token', formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
      },
    });

    const { access_token } = response.data;

    if (access_token) {
        document.cookie = `access_token=${access_token}; path=/; samesite=None; Secure`;
    }
    setIsSubmitted(true);
  } catch (err) {
    setError("Ошибка отправки данных: " + (err.response?.data?.message || err.message));
  }
};