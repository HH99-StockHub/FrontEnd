const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
