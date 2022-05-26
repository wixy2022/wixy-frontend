import { utilService } from "../services/util.service"

export const wapTitle01 = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-title',
    theme: 'dramatic',
    className: 'wap-title-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580954/templates/title.t1_vlcch7.png',
    cmps: [{
        id: utilService.makeId(),
        type: 'txt',
        theme: 'dramatic',
        className: 'dramatic-title',
        txt: 'Our Works',
    }]
}