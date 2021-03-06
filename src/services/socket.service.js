import io from 'socket.io-client'
import { userService } from './user.service'

/* FIX - remove/add comments */
export const SOCKET_EMIT_EDIT_WAP = 'edit wap'
// export const SOCKET_EMIT_USER_WATCH = 'user-watch';
// export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
// export const SOCKET_EVENT_REVIEW_ADDED = 'review-added';
// export const SOCKET_EVENT_REVIEW_ABOUT_YOU = 'review-about-you';

const SOCKET_EMIT_LOGIN = 'set-user-socket';
const SOCKET_EMIT_LOGOUT = 'unset-user-socket';


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()
// export const socketService = createDummySocketService()

// for debugging from console
// window.socketService = socketService

/* FIX - uncomment the next line when using sockets */
socketService.setup()

function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      socket = io(baseUrl)

      setTimeout(() => {
        const user = userService.getLoggedInUser()
        console.log(user)
        if (user) this.login(user._id)
      }, 500)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      socket.emit(eventName, data)
    },
    login(userId) {
      console.log(userId)
      socket.emit(SOCKET_EMIT_LOGIN, userId)
    },
    logout() {
      console.log('logouttttttt')
      socket.emit(SOCKET_EMIT_LOGOUT)
    },
    terminate() {
      socket = null
    },

  }
  return socketService
}

// eslint-disable-next-line
function createDummySocketService() {
  var listenersMap = {}
  const socketService = {
    listenersMap,
    setup() {
      listenersMap = {}
    },
    terminate() {
      this.setup()
    },
    login() {
    },
    logout() {
    },
    on(eventName, cb) {
      listenersMap[eventName] = [...(listenersMap[eventName]) || [], cb]
    },
    off(eventName, cb) {
      if (!listenersMap[eventName]) return
      if (!cb) delete listenersMap[eventName]
      else listenersMap[eventName] = listenersMap[eventName].filter(l => l !== cb)
    },
    emit(eventName, data) {
      if (!listenersMap[eventName]) return
      listenersMap[eventName].forEach(listener => {
        listener(data)
      })
    },
    /* FIX - remove if no chat */
    // debugMsg() {
    //   this.emit('chat addMsg', { from: 'Someone', txt: 'Aha it worked!' })
    // },
  }
  window.listenersMap = listenersMap;
  return socketService
}