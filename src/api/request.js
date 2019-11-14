import axios from 'axios';
// import NProgress from 'nprogress';
// import { Message } from 'element-ui';
// import { getHost } from '@/utils/common';
// import store from '@/store';

const service = axios.create({
  // baseURL: getHost('CM_API'), // api的base_url
  withCredentials: true,
});

// request interceptor
// service.interceptors.request.use(config => {
//   // 线上环境需要过网关，所以需要带token
//   if (store.getters.token) {
//     config.headers.Authorization = store.getters.token;
//   }

//   return config;
// }, error => {
//   // Do something with request error
//   console.log(error); // for debug
//   Promise.reject(error);
// });

// respone interceptor
// service.interceptors.response.use(
//   (response) => {
//     debugger
//     const res = response.data;
//     if (res.code === '99999') {
//       localStorage.setItem('loginExpired', 'true');
//       window.location.href = `${window.location.href.split('#')[0]}#/login`;
//       return Promise.reject('error');
//     } else if (res.code === '000') {
//       NProgress.done();
//       if (res.message&&res.message !== '未打开登录用户名密码加密开关') {
//         Message({
//           message: res.message,
//           type: 'error',
//           duration: 2000,
//         });
//       }
//       return Promise.reject(res);
//     }
//     return response.data;
//   },
//   (error) => {
//     debugger
//     const response = error.response;
//     const { status } = response;
//     if (status === 401) {
//       // 没有token，需要先获取token，然后重发请求
//       return store.dispatch('GetToken').then(token => {
//         response.config.headers.Authorization = token;
//         return axios.request(response.config).then(prevRequestRes => {
//           const res = prevRequestRes.data;
//           if (res.code === '99999') {
//             localStorage.setItem('loginExpired', 'true');
//             window.location.href = `${window.location.href.split('#')[0]}#/login`;
//             return Promise.reject('error');
//           } else if (res.code === '000') {
//             NProgress.done();
//             if (res.message !== '未打开登录用户名密码加密开关') {
//               Message({
//                 message: res.message,
//                 type: 'error',
//                 duration: 2000,
//               });
//             }else  if(res){
//               return
//             }
//             return Promise.reject(res);
//           }
//           return prevRequestRes.data;
//         });
//       });
//     } else {
//       if(response.data.message){
//         Message({
//           message: response.data.message,
//           type: 'error',
//           duration: 2000,
//         });
//       }
//       return Promise.reject(response.data);
//     }
//   },
// );

export default service;
