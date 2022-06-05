import { wapHeader01, wapHeader02, wapHeader03 } from './header'
import { wapSection01, wapSection02, wapSection03, wapSection05, wapSection04, wapSection06, wapSection07, wapSection071 } from './section'
import { wapCards01, wapCards02, wapCards03, wapCards04, wapCards05, wapCards051 } from './card'
import { wapFooter01, wapFooter02, wapFooter03, wapFooter04, wapFooter05, wapFooter06, wapFooter07 } from './footer'
import { wapText01, wapText02, wapText03, wapText04, wapText05 } from './text'
import { wapVideo01 } from './video'
import { wapGallery01 } from './gallery'

export const allTemplates = {
    header: [wapHeader01, wapHeader02, wapHeader03],
    section: [wapSection01, wapSection02, wapSection05, wapSection03, wapSection04, wapSection06, wapSection07, wapSection071],
    text: [wapText01, wapText02, wapText03, wapText04, wapText05],
    cards: [wapCards01, wapCards02, wapCards03, wapCards04, wapCards05, wapCards051],
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

// /////////////// DEV ONLY
export const allWaps = [temp5Wap, temp4Wap, temp3Wap, temp2Wap, temp1Wap, blankWap]
