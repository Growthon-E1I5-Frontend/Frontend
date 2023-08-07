/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios from 'axios';
import { BASE_URL } from '../constant/config';

//  signup api
export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: `text/plain`,
    'Content-Type': 'application/json',
  },
});

//  login api
export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: `text/plain`,
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  (config: any) => {
    const accessToken = 'access_token';

    if (accessToken) {
      const modifiedConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      };

      console.log('Request sent:', config);

      return modifiedConfig;
    }

    return config;
  },

  (error) => {
    console.log('request error:', error);
    return Promise.reject(error);
  }
);

//  중복확인 request get/post 관리해야함
instance.interceptors.request.use(
  (config: any) => {
    const modifiedConfig = {
      ...config,
      headers: {
        ...config.headers,
      },
    };

    console.log('Request sent:', config);

    return modifiedConfig;
  },

  (error) => {
    console.log('request error:', error);
    return Promise.reject(error);
  }
);

//  중복확인 response
instance.interceptors.response.use(
  (response: any) => {
    if (response) {
      console.log('URL Got response:', response);
      if (response.status === 200) {
        if (response.status === 200) {
          console.log('Already Exist:', response.data.profile.url);
          return response;
          // eslint-disable-next-line no-else-return
        }
      } else if (response.status === 201) {
        console.log('Email check success:', typeof response.data.result);
        return response;
      }

      console.log(response.status);

      return response.data.profile.id;
    }
  },

  /* 상태 코드 에러 메세지 처리 */
  (error) => {
    console.log('Error Response:', error.response);
    if (error.response) {
      const { status, data } = error.response;

      if (status === 404) {
        console.log('NOT FOUND:', data.errorMessage);
      } else if (status === 500) {
        console.log('Does not exist.', data.message);
      } else if (status === 400) {
        console.log('Already exist.', data.errorMessage);
      }

      return error;
    }
  }
);
