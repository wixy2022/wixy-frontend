import { utilService } from "../services/util.service"

export const wapFooter01 = {}

export const wapFooter02 = {
    id: utilService.makeId(16), //makeId
    type: 'container-draggable',
    category: 'wap-footer-02',
    theme: 'classic',
    className: 'template2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565595/templates/wap-footer-02_tdbpni.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt title',
        txt: '+65 6836 3088',
    }, {
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt subtitle',
        txt: '© 2021 by Yantra',
    }]
}




