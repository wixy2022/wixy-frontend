import { httpService } from "./http.service"

// import Axios from 'axios'
// const axios = Axios.create({
//     withCredentials: true
// })

// const AUTH_URL = (process.env.NODE_ENV == 'production') ? '/api/auth' : '//localhost:3030/api/auth'

export const userService = {
    login,
    logout,
    getLoggedInUser,
    signUp,
    setLoggedInUser,
}

function getLoggedInUser() {
    const user = JSON.parse(localStorage.getItem('loggedinUser'))
    return user || null
}


async function login(user, isRememberMode) {
    const loggedinUser = await httpService.post(`auth/login`, user)
    if (isRememberMode) localStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    return loggedinUser
}

async function logout() {
    await httpService.post(`auth/logout`)
    localStorage.removeItem('loggedinUser')
}

async function signUp(user) {
    const loggedinUser = await httpService.post(`auth/signup`, user)
    localStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    return Promise.resolve(loggedinUser)
}

function setLoggedInUser(user) {
    localStorage.setItem('loggedinUser', JSON.stringify(user))
}