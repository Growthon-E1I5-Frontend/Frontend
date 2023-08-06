import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://13.209.70.49',
});

export const profiles = async (formData: any) => {
  try {
    await api.patch('/profiles/2', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error();
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get('/profiles/uuid');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
