export function setMsg(msg) {
    console.log(msg)
    return dispatch => {
        dispatch({ type: 'SET_MSG', msg })
        return msg
    }
}