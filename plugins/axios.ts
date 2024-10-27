import axios from 'axios';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const instance = axios.create({
        baseURL: 'https://www.abibliadigital.com.br/api',
    });

    return {
        provide: {
            axios: instance,
        },
    };
});
