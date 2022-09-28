import axios from 'axios';
const mainApi=axios.create({
    baseURL:"http://localhost:8080/api/v1",
});
export {mainApi}