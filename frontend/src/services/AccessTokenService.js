import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('access_token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  
  const [token, setToken] = useState(getToken());
  
  const saveToken = userToken => {
    sessionStorage.setItem('access_token', JSON.stringify(userToken));
    setToken(userToken.accessToken);
  };
  
  return {
    setToken: saveToken,
    token
  }
}