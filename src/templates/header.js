import { utilService } from "../services/util.service"

export const wapHeader01 ={}

export const wapHeader02 = {
    id: '222222',
    type: 'container-draggable',
    category: 'wap-header',
    theme: 'classic',
    className: 'wap-header-02',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565595/templates/wap-header-02_yz1fq7.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt title',
        txt: 'Yantra',
    },
    {
        id: utilService.makeId(16),
        type: 'container',
        className: 'navbar',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt',
            txt: 'Home',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt',
            txt: 'Dine-in',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt',
            txt: 'Order food',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt',
            txt: 'Media & Awards',
        }],
    }
    ],
}