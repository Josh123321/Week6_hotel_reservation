import axios from 'axios';

const token = "kqoMBhngq2U84mW7pean3h9X2PlPZTToRbVX3SyLcrKq7roKzq3ab6U1T6xJ";

export const GetResquest = ({url,params}) => {
    const instance = axios.create({
        baseURL:url,
        method:'get',
        headers: {"Authorization" : `Bearer ${token}`}
    })
    return instance.get();
}