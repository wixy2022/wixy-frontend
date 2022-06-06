// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
import { async } from '@firebase/util'
import { httpService } from './http.service.js'
import { socketService } from './socket.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'wixyDB'

const BASE_PATH = 'wap'

export const wapService = {
    query,
    getById,
    save,
    remove,
    getEmptyWap,
    updateWap,
    createAncestors,
    getThemeList,
    addLeads
    
}

async function query(filterBy = {}) {
    console.log(filterBy)
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
    if (wap?._id) {
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

async function addLeads(leadData){
return await httpService.post(BASE_PATH, leadData)
}

function getEmptyWap() {
    return {
        name: 'empty-wap', /* FIX - ASK THE USE TO GIVE IT A NAME */
        imgUrl: '',
        cmps: []
    }
}





/* RECURSIONS */

function createAncestors(cmp, ancestors = []) {
    cmp.ancestors = [...ancestors, cmp.id]

    if (cmp.cmps) {
        cmp.cmps.forEach(currCmp => createAncestors(currCmp, cmp.ancestors))
    }

    return cmp
}

function updateWap(wap, activeCmp, key, value) {
    if (!activeCmp) return wap
    const ancestorsIds = [...activeCmp.ancestors]
    
    // let newWap = JSON.parse(JSON.stringify(wap)) /* FIX - Try not using JSON.parse */
    // const updatedWap = _updateWapProperties(newWap, ancestorsIds, activeCmp, key, value)
    
    const updatedWap = _updateWapProperties(wap, ancestorsIds, activeCmp, key, value)
    
    const nonEmptyCmps = updatedWap.cmps.filter(currCmp => currCmp.cmps.length > 0)
    updatedWap.cmps = nonEmptyCmps
    
    socketService.emit('edit wap', updatedWap)
    return updatedWap
}

function _updateWapProperties(cmp, ancestorsIds, activeCmp, key, value) {

    if (key === 'clone' && activeCmp.type === 'container-draggable') {
        const activeCmpIdx = cmp.cmps.findIndex(currCmp => currCmp.id === activeCmp.id)
        let cloneCmp = JSON.parse(JSON.stringify(activeCmp))
        cloneCmp.id = utilService.makeId(16)
        cloneCmp = createAncestors(cloneCmp)

        const cloneCmps = [...cmp.cmps]
        cloneCmps.splice(activeCmpIdx, 0, cloneCmp)

        return { ...cmp, cmps: cloneCmps }
    }

    if (key === 'delete') {
        const updatedCmps = cmp.cmps.filter(currCmp => currCmp.id !== activeCmp.id)
        //if we filtered one out (remove), we return
        if (updatedCmps.length < cmp.cmps.length) return { ...cmp, cmps: updatedCmps }
    }

    //the current cmp won't have more ancestors (his parent removed his id in the last round)
    //if we send an updated active cmp, we can send it back
    if (!ancestorsIds.length && !value) return activeCmp

    const updatedCmp = { ...cmp }
    //if we want to change a specific value in the current cmp
    if (!ancestorsIds.length) {
        if (key === 'className') return { ...activeCmp, style: {}, [key]: value }
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

/* EDITOR MODAL */

function getThemeList(type) {
    //this function returns an array of objects that looks like:
    //{ title: 'classic', themes: ['classic-1', 'classic-2', 'classic-3'], isActive: false },

    const getThemeByType = (type) => {
        switch (type) {
            case 'txt': return { classic: 6, dark: 5, dramatic: 3, festive: 4, light: 4 }
            case 'anchor': return { classic: 5, dark: 5, dramatic: 5, festive: 5, light: 4 }
            case 'img': return { classic: 5, dark: 6, dramatic: 4, festive: 7, light: 6 }
            case 'container-draggable':
            case 'container': return { classic: 5, dark: 5, dramatic: 5, festive: 6, light: 6 }
            default: return { classic: 0, dark: 0, dramatic: 0, festive: 0, light: 0 }
        }
    }

    const themeMap = getThemeByType(type)
    const themeList = []

    for (const [key, value] of Object.entries(themeMap)) {
        if (!value) continue
        const themes = []
        for (let i = 0; i < value; i++) themes.push(`theme-${key}-${i + 1}`)
        themeList.push({ title: key, themes, isActive: false })
    }

    return themeList
}