import axios from 'axios';
import { store } from '../redux/store'
import { setToken } from '../redux/token/actions';

export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
   });

export function setInterceptor(axiosInstance=instance, refresh){

    axiosInstance.interceptors.response.use(response => {
      return response;
   }, err => {
        return new Promise((resolve, reject) => {
            const originalRequest = err.config;
            if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
            {
                originalRequest._retry = true;
            
                let res = axiosInstance.post('http://127.0.0.1:8000/api/token/refresh/', { refresh })
                 .then(response => response.json())
                 .then(json => {
                     store.dispatch(setToken(json.access, json.refresh))
                    console.log(json);
                    return axios(originalRequest);
                })
              

              resolve(res);
          }


          return Promise.reject(err);
      })

   })
}