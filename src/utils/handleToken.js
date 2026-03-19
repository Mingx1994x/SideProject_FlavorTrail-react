import { formatTime } from "./formatTIme";

const oneWeek = 7 * 24 * 60 * 60
const defaultExpired = Math.floor(Date.now() / 1000) + oneWeek

// 寫入瀏覽器 cookie
export function keepToken(token, expired = defaultExpired) {
  document.cookie = `token=${token}; expires= ${formatTime(expired)}`
}

// 讀取 cookie
export function getToken() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1",);
}

// 刪除 cookie
export const removeToken = () => {
  return document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
