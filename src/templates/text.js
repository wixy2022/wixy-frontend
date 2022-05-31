import { utilService } from "../services/util.service"

export const wapText01 = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-text',
    className: 'wap-txt-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580954/templates/title.t1_vlcch7.png',
    cmps: [{
        id: utilService.makeId(),
        type: 'txt',
        className: 'wap-01-txt',
        txt: 'Our Works',
    }]
}