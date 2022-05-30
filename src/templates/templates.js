import { wapHeader01, wapHeader02 } from './header'
import { wapSection01, wapSection02, wapSection03, wapSection04 } from './section'
import { wapCards01, wapCards02, wapCards03, wapCards04 } from './card'
import { wapFooter01, wapFooter02 } from './footer'
import { wapText01 } from './text'
import { wapGallery01 } from './gallery'

export const allTemplates = {
    header: [wapHeader01, wapHeader02],
    section: [wapSection01, wapSection02, wapSection03, wapSection04],
    text: [wapText01],
    cards: [wapCards01, wapCards02, wapCards03, wapCards04],
    gallery: [wapGallery01],
    form: [],
    map: [],
    chat: [],
    video: [],
    footer: [wapFooter01, wapFooter02],
}
//   const names = ['header', 'section', 'text', 'cards', 'gallery', 'form', 'map', 'chat', 'video', 'footer',]

//
export const temp1Wap = {
    _id: '62911fb25a660f6cae594bb4',
    name: 'template-dramatic-1',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png',
    createdBy: 'miniUser',
    cmps: [wapHeader01,
        wapSection01,
        wapText01,
        wapGallery01,
        wapGallery01,
        wapGallery01,
        wapCards01,
        wapFooter01]
}

export const temp2Wap = {
    _id: '629120385a660f6cae594bb5',
    name: 'template 2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png',
    cmps: [wapHeader02, wapSection02, wapCards02, wapCards03, wapFooter02]
}

export const temp3Wap = {
    _id: '629294fbf04ad0403c9fe2ee',
    name: 'template 3',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653774405/templates/page-template-03_yiq4qw.png',
    cmps: [wapSection03, wapSection04, wapCards04]
}


// /////////////// DEV ONLY
export const allWaps = [temp1Wap, temp2Wap, temp3Wap]