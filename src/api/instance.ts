/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// import { useCookies } from 'react-cookie';
import axios from 'axios';
import { getCookie } from './cookie';
import { BASE_URL } from '../constant/config';

const access_token = getCookie('access_token');
// const refresh_token = getCookie('refresh_token');

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
    'Content-Type': 'application/json',
  },
});

// 로그인 request
authInstance.interceptors.request.use(
  (config: any) => {
    if (!access_token) {
      const modifiedConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${access_token}`,
          withCredentials: true,
        },
      };

      console.log('Request sent:', config);

      return modifiedConfig;
    }

    return config;
  },

  (error) => {
    console.log('Request error:', error);
    return Promise.reject(error);
  }
);

// 로그인 response
authInstance.interceptors.response.use(
  (config: any) => {
    if (config) {
      const modifiedConfig = {
        ...config,
        headers: {
          ...config.headers,
        },
      };

      console.log('Response sent:', config);

      if (
        config.status === 200 ||
        config.status === 201 ||
        config.status === 204
      ) {
        console.log('Login Success!: ', config.status.statusText);
      }

      return modifiedConfig;
    }

    return config;
  },

  (error) => {
    console.log('Response error:', error);

    return Promise.reject(error);
  }
);

//  회원가입 request
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

//  회원가입 response
instance.interceptors.response.use(
  (response: any) => {
    console.log('Got Response : ', response);
    if (response.status === 200) {
      console.log('Already Exist:', response.data.profile.url);
      return response;
    }

    if (response.status === 201) {
      console.log('Email check success:', typeof response.data.result);
      return response;
    }

    console.log(response.status);

    return response.data.profile.id;
  },

  (error) => {
    console.log('Error Response:', error.response);
    if (error.response) {
      const { status, data } = error.response;

      if (status === 404) {
        console.log('Does not exist.', data.errorMessage);
      } else if (status === 500) {
        console.log('Unexpected Error.', data.message);
      } else if (status === 400) {
        alert('이미 존재하는 계정입니다.');
        console.log('Already exist.', data.errorMessage);
      }
    }

    return error;
  }
);
