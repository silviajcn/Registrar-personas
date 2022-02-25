export const guardarDatos = (state) => {
    localStorage.setItem('items', JSON.stringify(state))
}

export const obtenerDatos = () => {
    const registerStorage = localStorage.getItem('items');

    if (registerStorage === null) {
        return undefined
    }

    return JSON.parse(registerStorage)
}