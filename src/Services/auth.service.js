import axios from "axios";

const API_URL = "http://localhost:8085/api/";

class AuthService {
  async login(userName, userPassword) {
    const response = await axios
          .post("http://localhost:8085/login", {
              userName,
              userPassword
          });
      if (response.data.JwtToken) {
          localStorage.setItem("User", JSON.stringify(response.data));
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem("User");
  }

  register(userName, userEmail, userPassword) {
    return axios.post(API_URL + "register", {
      userName,
      userEmail,
      userPassword
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
