import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const stored = localStorage.getItem("expiration");
  const expiration = new Date(stored);
  const now = new Date();
  return expiration.getTime() - now.getTime();
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function loader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}
