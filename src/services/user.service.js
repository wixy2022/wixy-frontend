// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service';
import { socketService } from './socket.service';

// const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

const BASE_PATH = 'auth/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
}

async function login(credentials) {
    const user = await httpService.post(BASE_PATH + 'login', credentials)
    if (user) {
        socketService.login(user._id)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    }
    return user

    /* Next lines are for FRONTEND ONLY */
    // return storageService.query(STORAGE_KEY).then(users => {
    //     const user = users.find(user => user.username === credentials.username &&
    //         user.password === credentials.password)

    //     if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))

    //     return user
    // })
}

async function signup(userInfo) {
    const user = await httpService.post(BASE_PATH + 'signup', userInfo)
    socketService.signup(user._id)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user

    /* Next lines are for FRONTEND ONLY */
    // const user = { ...userInfo }
    // return storageService.post(STORAGE_KEY, user)
    //     .then((user) => {
    //         sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    //         return user
    //     })
}

async function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    socketService.logout()
    return await httpService.post(BASE_PATH + 'logout')

    /* Next lines are for FRONTEND ONLY */
    // return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

/* FIX - TEST DATA */
// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja' })
// userService.login({username: 'muki', password: 'muki1'})