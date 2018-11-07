const USER = 'user';
const ISAUTHENTICATED = 'isAuthenticated';
const ISAUTHORIZED = 'isAuthorized';
const ACCESSTOKEN = 'accessToken';

function currentUser() {
  return localStorage.getItem(USER)
}

function isAuthenticated() {
  return localStorage.getItem(ISAUTHENTICATED)
}

function isAuthorized() {
  return localStorage.getItem(ISAUTHORIZED)
}

function updateUser(userData) {
  let user = currentUser();
  localStorage.setItem(USER, userData.id)
}

function clearUser() {
  localStorage.removeItem(USER)
}

function getToken() {
  return localStorage.getItem(ACCESSTOKEN)
}

function setToken(token) {
  localStorage.setItem(ACCESSTOKEN, token)
}
