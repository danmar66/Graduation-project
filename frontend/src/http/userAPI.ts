import {$authHost, $host} from "./index";

export const login = async (username: string, password: string) => {
    const response = await $host.post('/api/admin/login', {username, password})
    return response
}

export const check = async () => {
    const response = await $host.post('') // @todo написать функцию проверки авторизации
}

