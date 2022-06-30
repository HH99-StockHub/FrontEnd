const REDIRECT_URI = "http://localhost:3000/user/kakao/callback";
const REST_API_KEY = "12c4e96969c4b50ad263268577cdcb76";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
