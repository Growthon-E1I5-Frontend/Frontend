import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://15.164.221.88',
});

// 프로필 추가 시 탭에 대한 정보 저장 API 연결 - 수정 필요
// export const profiles = async (formData: any) => {
//   try {
//     await api.patch('/profiles/2', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//   } catch (error) {
//     console.error();
//   }
// };

// export const getProfile = async () => {
//   try {
//     const response = await api.get('/profiles/uuid');

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
