import {$autoHost, $host} from "./index";


export const createSliders = async (slider) => {
    const {data} = await $autoHost.post('api/slider', slider)
    return data
}
export const fetchSliders = async (page, limit) => {
    const {data} = await $host.get('api/slider/get', {params: {page, limit
        }})
    return data
}
export const deleteOneSliders = async (id, fileName) => {
    const {data} = await $autoHost.post('api/slider/' + id, {fileName})
    return data
}

export const fetchOneSliders = async (title, id) => {
    const {data} = await $autoHost.get('api/slider/one/' + id, id)
    return data
}
export const editOneSliders = async (id, dataEdit) => {
    const {data} = await $autoHost.post('api/slider/edit/' + id,{id, dataEdit})
    return data
}