import { types } from '../types/types';

const initialState = {
    items: []
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
    
        default:
            return state;
    }
}