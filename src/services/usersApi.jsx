import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users"; // Base URL for user-related endpoints
const LOGIN_URL = "http://localhost:5000/api/login"; // Login endpoint

const usersApi = {
  signUp: (userData) => {
    return new Promise((resolve, reject) => {
      axios
        .post(BASE_URL, userData)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
  login: (email, password, role) => {
    return new Promise((resolve, reject) => {
      axios
        .post(LOGIN_URL, { email, password, role })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
  getUsers: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(BASE_URL)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
  updateUser: (id, userData) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${BASE_URL}/${id}`, userData)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
};

export default usersApi;
