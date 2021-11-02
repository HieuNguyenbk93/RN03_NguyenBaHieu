export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export const countUpAction = () => ({type: COUNT_UP})
export const countDownAction = () => ({type: COUNT_DOWN})
export const updateUsernameAction = (playload) => {
    return {
        type: UPDATE_USERNAME,
        playload
    }
}
