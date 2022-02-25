import { createStore, combineReducers } from "redux";
import { registerReducer } from "../reducers/registerReducer";
import { guardarDatos, obtenerDatos } from '../../localStorage/localStorage';

const reducers = combineReducers({
    items: registerReducer,
});

const storageState = obtenerDatos();

export const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    guardarDatos({
        items: store.getState().items
    })
})