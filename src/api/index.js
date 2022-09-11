import axios from "axios";

const mainApi=axios.create({
    baseURL:"http://localhost:8081/api/v1",
});
export {mainApi}