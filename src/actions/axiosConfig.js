import axios from "axios";
//Used for onine JSON-store database

const axiosConfig = axios.create({
    baseURL: "http://studyspace-backend.herokuapp.com/",
});

export default axiosConfig;
