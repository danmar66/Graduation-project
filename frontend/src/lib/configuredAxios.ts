import { Axios } from "axios";

const configuredAxios = new Axios();

configuredAxios.defaults.headers.common.Authorization = "Bearer " + localStorage.getItem("token")