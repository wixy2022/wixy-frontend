import { utilService } from "../services/util.service"

export const wapSection01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-hero',
    className: 'wap-hero-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580957/templates/hero-t1_ldzw5u.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'PH-STUDIO',
            style: {}
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'make your dreams come true',
            style: {}
        }
    ],
    isPublic: true
}

export const wapSection02 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-02',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565595/templates/wap-section-02_jrcyn7.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'img',
        url: 'https://static.wixstatic.com/media/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg/v1/fill/w_1198,h_835,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg',
        className: 'img-container',
    },
    {
        id: utilService.makeId(16),
        type: 'container',
        className: 'txt-container',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'The Taste of Yantra',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'Defining Indian Cuisine',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt description',
            txt: 'Yantra - where every dish is a history book on a plate. Some are complete chapters ­– perfect renditions of traditional Indian cuisine. Others are living chronicles of our times – inspired by tradition and contemporary influences.Yantra pays tribute to fine Indian cuisine with a balanced mix of classic and contemporary dishes. In loving, reverent and highly skilled hands, cherished dishes are recreated with a passion. You will find many dishes are presented in incarnations that simultaneously stir loving memories while exciting your palate.'
        }],
    }],
}

export const wapSection03 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-03',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653755007/templates/section-wap-03_dli4ne.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'COMMUNITY & INSPIRATION',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'WHAT ARE MINIMALIST DESIGNS?',
        }

    ],
    isPublic: true
}

export const wapSection04 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-04',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653773084/templates/wap-section-04_pbeum7.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653755224/templates/wap-04_u3ivvw.jpg',
            className: 'wap-section-04-img',
            style: {
                borderRadius: '',
                border: '',
                boxShadow: ''
            }
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'THE FIRM CREATES SUSTAINABLE',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'BUILDINGS AND SPACES',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt description',
            txt: 'Our buildings are shaped by their unique context, the creativity imbued by our design teams and the vision of our clients. '
        }, {
            id: utilService.makeId(16),
            type: 'anchor',
            className: 'anchor',
            txt: 'learn more',
            imgUrl: '',
            style: {
                borderRadius: '',
                backgroundColor: '',
                color: '',
                fontFamily: ''
            },

        },
    ],
    isPublic: true
}