import { types } from '../types/types';

export const registerSync = (item) => {
    return {
        type: types.register,
        payload: item
    }
}

export const listSync = (items) =>{
    return{
        type: types.list,
        payload: items
    }
}

export const deleteSync = (id) => {
    return {
        type: types.delete,
        payload: id
    }
}

export const updateSync = (id, item) =>{
    return{
        type: types.update,
        payload:{
            id,
            ...item
        }
    }
}