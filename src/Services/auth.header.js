export default function authHeader() {
    const jwtToken = JSON.parse(sessionStorage.getItem('jwtToken'));
  
    if (jwtToken) {
      return { Authorization: "Bearer " + jwtToken }; // for Spring Boot back-end
    } else {
      return {};
    }
  }
  