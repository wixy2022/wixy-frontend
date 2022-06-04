import { utilService } from "../services/util.service"

export const wapFooter01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer',
    className: 'wap-footer-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580954/templates/footer-t1_cmf0nd.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'title',
            txt: 'PH-STUDIO',
        }
    ],
    isPublic: true
}

export const wapFooter02 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer-02',
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

export const wapFooter03 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer',
    className: 'wap-footer-03',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654367911/templates/Capture_soyrws.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'container',
            cmps: [{
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt title',
                txt: 'OTHER WEBSITES',
            },
            {
                id: utilService.makeId(16),
                type: 'container',
                className: 'container',
                cmps: [
                    {
                        id: utilService.makeId(16),
                        type: 'img',
                        url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654264209/templates/img2-footer-wap5_wzcg2z.png',
                        className: 'wap-05-footer-img',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'img',
                        url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654264209/templates/img1-footer-wap5_htfkje.png',
                        className: 'wap-05-footer-img',
                    },
                ]
            }]
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: '© 2019 Government of Singapore. Last updated 02 June 2022.',
        }
    ],
}




