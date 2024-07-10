import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.escuelajs.co"
})

export default instance