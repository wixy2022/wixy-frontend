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

export const wapFooter04 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer-04',
    className: 'wap-footer-04',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654431384/footer-04_yuzr7d.jpg',
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt title',
        txt: '+65 6836 3088',
    }, {
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt subtitle',
        txt: '© 2021 by Studio-S',
    }]
}

export const wapFooter05 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer-05',
    className: 'wap-footer-05',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654431384/footer-05_ieirmw.jpg',
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt title',
        txt: '+65 6836 3088',
    }, {
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt subtitle',
        txt: '© 2021 by Studio-S',
    }]
}

export const wapFooter06 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer-06',
    className: 'wap-footer-06',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654431384/footer-06_s33j6f.jpg',
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt title',
        txt: '+65 6836 3088',
    }, {
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt subtitle',
        txt: '© 2021 by Studio-S',
    }]
}

export const wapFooter07 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-footer-07',
    className: 'wap-footer-07',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654431384/footer-07_o3sij5.jpg',
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt title',
        txt: '+65 6836 3088',
    }, {
        id: utilService.makeId(16),
        type: 'txt',
        className: 'txt subtitle',
        txt: '© 2021 by Studio-S',
    },
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
        url: 'https://www.instagram.com/',
        className: 'link fa fa-instagram',
        txt: '',

    },
    {
        id: utilService.makeId(16),
        type: 'anchor',
        url: 'https://www.twitter.com/',
        className: 'link fa fa-twitter',
        txt: '',

    }
    ]
}



