// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'wixyDB'

const BASE_PATH = 'wap'

export const wapService = {
    query,
    getById,
    save,
    remove,
    getEmptyWap
}

async function query(filterBy = {}) {
    return await httpService.get(BASE_PATH, filterBy)

    /* BACKEND - THE filterBy WILL BE IN THE BACKEND */
    // return storageService.query(STORAGE_KEY)
}

async function getById(wapId) {
    return await httpService.get(`${BASE_PATH}/${wapId}`)

    /* Next line should be in the BACKEND */
    // return storageService.get(STORAGE_KEY, wapId)
}

async function save(wap) {
    /* Next line should be in the BACKEND */
    // wap.createdAt = Date.now()

    if (wap._id) {
        return await httpService.put(BASE_PATH, wap)

        /* Next line should be in the BACKEND */
        // return storageService.put(STORAGE_KEY, wap)
    } else {
        return await httpService.post(BASE_PATH, wap)

        /* Next line should be in the BACKEND */
        // wap.owner = userService.getLoggedinUser()
        // return storageService.post(STORAGE_KEY, wap)
    }
}

async function remove(wapId) {
    return await httpService.delete(`${BASE_PATH}/${wapId}`)

    /* Next line should be in the BACKEND */
    // return storageService.remove(STORAGE_KEY, wapId)
}

function getEmptyWap() {
    return {
        _id: 'empty-wap',
        name: 'empty-wap',
        imgUrl: '',
        cmps: []
    }
}