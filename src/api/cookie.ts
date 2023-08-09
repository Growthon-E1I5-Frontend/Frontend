import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/* key, value를 받아 cookie 생성 후 저장 */
export const setCookie = (id: string, value: string) => {
  return cookies.set(id, value, { maxAge: 60 * 60 * 3, path: '/' });
};

/* key, value를 반환 */
export const getCookie = (id: string) => {
  return cookies.get(id);
};

/* key를 받아 cookie 삭제 */
export const removeCookie = (id: string) => {
  return cookies.remove(id, { path: '/' });
};
