import Cookies from "universal-cookie";

const cookies = new Cookies();
const getCookie = (name) => {
  return cookies.get(name);
};
const setCookie = (name, value, exp = 24) => {
  cookies.set(name, value, {
    path: "/",
    expires: new Date(Date.now() + exp * 60 * 60 * 1000),
  });
};

const deleteCookie = (name) => {
  cookies.remove(name, {
    path: "/",
  });
};

export { getCookie, setCookie, deleteCookie };
