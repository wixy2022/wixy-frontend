import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
})

const AUTH_URL = (process.env.NODE_ENV == 'production') ? '/api/auth' : '//localhost:3030/api/auth'

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

async function login(user) {
    const res = await axios.post(`${AUTH_URL}/login`, user)
    const loggedinUser = res.data
    sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    console.log('login', loggedinUser)
    return loggedinUser
}

async function logout() {
    await axios.post(`${AUTH_URL}/logout`)
    sessionStorage.removeItem('loggedinUser')
}

async function signUp(user) {
    const res = await axios.post(`${AUTH_URL}/signup`, user)
    const loggedinUser = res.data
    sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    console.log('signup', loggedinUser)
    return Promise.resolve(loggedinUser)
}