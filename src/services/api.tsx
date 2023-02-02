import axios from "axios";

const apibiblia = axios.create({
    baseURL: "https://www.abibliadigital.com.br/api",
});

export default apibiblia;