import axios from 'axios';
import  { BASE_URL, HOST_SERVICE_URL } from './utils/apiConstant';
const mainApi=axios.create({
   
    baseURL:BASE_URL,
});

export {mainApi}