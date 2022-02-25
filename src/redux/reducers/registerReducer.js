import { types } from '../types/types';

const initialState = {
    items: [],
    updateItem: {
        nombre: "",
        apellido: "",
        ciudad: "",
        fecha: "",
    }
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.register:
            return {
                items: [...state.items, action.payload]
            }
        
        case types.list:
            return {
                items: [...action.payload]
            }
        
        case types.delete:
            return {
                items: state.items.filter(item => item.id!== action.payload)
            }
        
        case types.update:
            return {
                ...state,
                updateItem: action.payload
            }
    
        default:
            return state;
    }
}