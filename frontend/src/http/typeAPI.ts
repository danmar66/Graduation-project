import axios from 'axios';

const $host = axios.create({baseURL: 'http://localhost:5000/'})

export async function getType(id:any) {
    const {data} = await $host.get(`api/tag_type/${id}`)
    return data;
}