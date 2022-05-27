import { wapHeader01, wapHeader02 } from './header'
import { wapSection01, wapSection02 } from './section'
import { wapCards01, wapCards02 } from './card'
import { wapFooter01, wapFooter02 } from './footer'
import { wapTitle01 } from './title'
import { wapGallery01 , wapGallery0102} from './gallery'

export const allTemplates = {
    header: [wapHeader01, wapHeader02],
    section: [wapSection01,wapSection02],
    text: [wapTitle01],
    cards: [wapCards01,wapCards02],
    gallery: [wapGallery0102],
    form: [],
    map: [],
    chat: [],
    video: [],
    footer: [wapFooter01,wapFooter02],
}
//   const names = ['header', 'section', 'text', 'cards', 'gallery', 'form', 'map', 'chat', 'video', 'footer',]


export const temp1Wap = {
    _id: 'mongoDBId',
    name: 'template-dramatic-1',
    imgUrl: '',
    createdBy: 'miniUser',
    cmps: [wapHeader01,
        wapSection01,
        wapTitle01,
        ...wapGallery01,
        wapCards01,
        wapFooter01]
}

export const temp2Wap = {
    _id: 'MongoDBId2',
    name: 'template 2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565945/templates/page-template-02_glfv7t.png',
    cmps: [wapHeader02, wapSection02, wapCards02, wapFooter02]
}