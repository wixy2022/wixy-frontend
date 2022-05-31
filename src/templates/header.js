import { utilService } from "../services/util.service"

export const wapHeader01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-header',
    className: 'wap-header-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580954/templates/header-t1_yosljg.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'title',
            txt: 'PH-STUDIO',
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            category: 'wap-header-container',
            className: 'wap-01-header-links-container',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'anchor',
                    url: 'https://www.facebook.com/',
                    className: 'link',
                    txt: 'facebook',

                },
                {
                    id: utilService.makeId(16),
                    type: 'anchor',
                    url: 'https://www.instagram.com/?hl=en',
                    className: 'link',
                    txt: 'instagram',
                    style: {},
                }
            ],
        },
    ],
    isPublic: true
}

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