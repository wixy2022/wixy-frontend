import { wapHeader01, wapHeader02 } from './header'
import { wapSection01, wapSection02 , wapSection03} from './section'
import { wapCards01, wapCards02, wapCards03 } from './card'
import { wapFooter01, wapFooter02 } from './footer'
import { wapText01 } from './text'
import { wapGallery01, wapGallery0102 } from './gallery'

export const allTemplates = {
    header: [wapHeader01, wapHeader02],
    section: [wapSection01, wapSection02, wapSection03],
    text: [wapText01],
    cards: [wapCards01, wapCards02, wapCards03],
    gallery: [wapGallery0102],
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
        ...wapGallery01,
        wapCards01,
        wapFooter01]
}

export const temp2Wap = {
    _id: '629120385a660f6cae594bb5',
    name: 'template 2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png',
    cmps: [wapHeader02, wapSection02, wapCards02, wapCards03, wapFooter02]
}
// /////////////// DEV ONLY
export const allWaps = [temp2Wap, temp1Wap, temp2Wap, temp1Wap, temp2Wap, temp1Wap, temp2Wap, temp1Wap, temp2Wap]