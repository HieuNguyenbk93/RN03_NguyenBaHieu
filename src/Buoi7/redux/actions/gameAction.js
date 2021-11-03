export const SELECT = "SELECT"
export const PLAY = "PLAY"

export const selectAction = (payload) => {
    return {
        type: SELECT,
        payload
    }
}
export const playAction = () => ({type: PLAY})