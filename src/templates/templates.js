import { utilService } from "../services/util.service" /* FIX - delete after presentation */

import { wapHeader01, wapHeader02, wapHeader03 } from './header'
import { wapSection01, wapSection02, wapSection03, wapSection05, wapSection04, wapSection06, wapSection07, wapSection071 } from './section'
import { wapCards01, wapCards02, wapCards03, wapCards04, wapCards05, wapCards051 } from './card'
import { wapFooter01, wapFooter02, wapFooter03, wapFooter04, wapFooter05, wapFooter06, wapFooter07 } from './footer'
import { wapText01, wapText02, wapText03, wapText04, wapText05 } from './text'
import { wapVideo01 } from './video'
import { wapGallery01 } from './gallery'

export const allTemplates = {
    header: [wapHeader01, wapHeader02, wapHeader03],
    // section: [wapSection01, wapSection02, wapSection05, wapSection03, wapSection04, wapSection06, wapSection07, wapSection071],
    section: [wapSection06, wapSection05, wapSection071, wapSection03, wapSection04, wapSection01, wapSection02],
    text: [wapText01, wapText02, wapText03, wapText04, wapText05],
    cards: [wapSection07, wapCards05, wapCards051, wapCards04, wapCards02, wapCards03, wapCards01],
    gallery: [wapGallery01],
    form: [],
    map: [],
    chat: [],
    video: [wapVideo01],
    footer: [wapFooter01, wapFooter02, wapFooter03, wapFooter04, wapFooter05, wapFooter06, wapFooter07],
}
//   const names = ['header', 'section', 'text', 'cards', 'gallery', 'form', 'map', 'chat', 'video', 'footer',]

//
export const temp1Wap = {
    // _id: '62911fb25a660f6cae594bb4',
    name: 'template 1',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png',
    createdBy: 'miniUser',
    description: 'Photography Studio',
    cmps: [wapHeader01,
        wapSection01,
        wapText01,
        wapGallery01,
        wapGallery01,
        wapGallery01,
        wapText01,
        wapCards01,
        wapFooter01]
}

export const temp2Wap = {
    // _id: '629120385a660f6cae594bb5',
    name: 'template 2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png',
    description: 'Restaurant',
    cmps: [wapHeader02, wapSection02, wapCards02, wapCards03, wapFooter02]
}

export const temp3Wap = {
    // _id: '629294fbf04ad0403c9fe2ee',
    name: 'template 3',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653774405/templates/page-template-03_yiq4qw.png',
    description: 'Construction Company',
    cmps: [wapSection03, wapSection04, wapCards04]
}

export const temp4Wap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'template 4',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366370/templates/Capture_qrezqs.png',
    description: 'Social media',
    cmps: [wapSection05, wapCards051, wapSection071]
}

export const temp5Wap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'template 5',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366128/templates/Capture_k3mxtv.png',
    description: 'Animal & Veterinary Service',
    cmps: [wapHeader03, wapSection06, wapCards05, wapSection07, wapFooter03]
}

export const blankWap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'new-template',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654410524/icons/start_from_scratch5_abauon.jpg',
    description: 'Start from Scratch',
    cmps: []
}

// WAP FOR PRESENTATION
export const wapHeader99 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-header',
    className: 'wap-header-99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654409416/Capture_iypvpd.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654499851/presentation/fake_logo_h64zv6.jpg',
            className: 'wap-99-header-img',
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            category: 'wap-header-container',
            className: 'wap-99-header-txt-container',
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
}

export const wapSection99 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366798/templates/Capture_rvdokw.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'container',
        className: 'txt-container',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'Chocolate and flowers arrangements',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'The Animal & Veterinary Service (AVS) is the main touch-point on animal and veterinary matters in Singapore and the first responder for all animal-related feedback',
        }]
    }],
}

export const wapVideo99 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-video',
    className: 'wap-video-99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654458306/video-background_jmbohw.jpg',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'Watch our Veterinarian Answers your\'s Questions'
        },
        {
            id: utilService.makeId(16),
            type: 'video',
            url: 'https://www.youtube.com/embed/LD84DKa_Cpo',
            className: 'video-cmp-99',
        }
    ],
}

export const temp99Wap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'template 99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654505398/presentation/fake_wap2_rbxmq2.jpg',
    description: 'Chocolate and flowers arrangements',
    cmps: [wapSection99, wapHeader99, wapSection07, wapVideo99, wapFooter03]
}

// /////////////// DEV ONLY
export const allWaps = [temp99Wap, temp4Wap, temp3Wap, temp2Wap, temp1Wap, temp5Wap, blankWap]