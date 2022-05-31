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
    getEmptyWap,
    updateWap,
    createAncestors
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
        _id: 'empty-wap', /* FIX - WE NEED TO REMOVE IT? */
        name: 'empty-wap', /* FIX - ASK THE USE TO GIVE IT A NAME */
        imgUrl: '',
        cmps: []
    }
}







function createAncestors(cmp, ancestors = []) {
    cmp.ancestors = [...ancestors, cmp.id]

    if (cmp.cmps) {
        cmp.cmps.forEach(currCmp => createAncestors(currCmp, cmp.ancestors))
    }
    
    return cmp
}

function updateWap(wap, activeCmp, key, value) {
    const ancestorsIds = [...activeCmp.ancestors]
    let newWap = JSON.parse(JSON.stringify(wap)) /* FIX - Try not using JSON.parse */
    return _updateWapProperties(newWap, ancestorsIds, activeCmp, key, value)
}

function _updateWapProperties(cmp, ancestorsIds, activeCmp, key, value) {
    // const currId = ancestorsIds.shift() // change 

    if (key === 'remove') {
        const updatedCmps = cmp.cmps.filter(currCmp => currCmp.id !== activeCmp.id)
        //if we filtered one out (remove), we return
        if (updatedCmps.length < cmp.cmps.length) return { ...cmp, cmps: updatedCmps }
    }

    const updatedCmp = { ...cmp }
    //the item itself wont have more ancestors (his parent removed his id in the last round)
    if (!ancestorsIds.length) {
        return { ...activeCmp, [key]: value }
    }
    const currId = ancestorsIds.shift()
    //if we need to update a child of the cmp
    updatedCmp.cmps = updatedCmp.cmps.map(currCmp => {
        if (currCmp.id !== currId) return currCmp
        return _updateWapProperties(currCmp, ancestorsIds, activeCmp, key, value)
    })

    return updatedCmp
}