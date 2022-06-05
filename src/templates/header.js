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
                    className: 'link fa fa-facebook',
                    txt: '',

                },
                {
                    id: utilService.makeId(16),
                    type: 'anchor',
                    url: 'https://www.instagram.com/?hl=en',
                    className: 'link fa fa-instagram',
                    txt: '',
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
            txt: 'Order food',
        }],
    }
    ],
}

export const wapHeader03 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-header',
    className: 'wap-header-03',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654409416/Capture_iypvpd.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654200853/templates/wap-5-logo_lcrifl.jpg',
            className: 'wap-05-header-img',
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            category: 'wap-header-container',
            className: 'wap-05-header-txt-container',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'txt',
                    className: 'txt',
                    txt: 'Home',
                },
                {
                    id: utilService.makeId(16),
                    type: 'txt',
                    className: 'txt',
                    txt: 'About',
                }
            ],
        },
    ],
    isPublic: true
}