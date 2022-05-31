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
    signUp
}

function getLoggedInUser() {
    const user = JSON.parse(sessionStorage.getItem('loggedinUser'))
    return user
}

async function login(user, isRememberMode) {
    const loggedinUser = await httpService.post(`auth/login`, user)
    if (isRememberMode) sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    return loggedinUser
}

async function logout() {
    await httpService.post(`auth/logout`)
    sessionStorage.removeItem('loggedinUser')
}

async function signUp(user) {
    const loggedinUser = await httpService.post(`auth/signup`, user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    return Promise.resolve(loggedinUser)
}