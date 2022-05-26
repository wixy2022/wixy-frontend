import { wapHeader01, wapHeader02 } from './header'
import { wapSection01, wapSection02 } from './section'
import { wapCards01, wapCards02 } from './card'
import { wapFooter01, wapFooter02 } from './footer'
import { wapTitle01 } from './title'
import { wapGallery01 } from './gallery'

export const allTemplates = {
    header: [{
        id: '1234a1sa',
        type: "container-draggable",
        category: "wap-header",
        className: "wap-header-1",
        imgUrl: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642950099/mute1ysfnzjcsrlexz25.jpg",
        style: {
            padngBlock: 0,
            backgroundColor: "red"
        },
        cmps: [
            {
                id: '123sss42',
                type: "txt",
                txt: "Pacifico",
                style: {
                    color: "#000000",
                    fontFamily: "kalam",
                    fontSize: 40,
                    backgroundColor: 'lightblue',
                    display: 'flex',
                    justifyContent: 'center'
                },
            },
            {
                id: '123asdasd43',
                type: "container",
                style: {
                },
                cmps: [
                    {
                        id: '12332asdsa176',
                        type: "anchor",
                        url: "https://www.google.com",
                        txt: "More details",
                        className: "nav-link",
                        style: {
                            color: "black",
                            backgroundColor: "red"
                        },
                    },
                    {
                        id: '12asdasdasd344',
                        type: "anchor",
                        url: "https://www.google.com",
                        txt: "More details222",
                        className: "nav-link",
                        style: {
                            color: "blue",
                        },
                    },
                    {
                        id: '12asdsad345',
                        type: "img",
                        url: "https://m.media-amazon.com/images/I/81ZifMbP2dL._SY450_.jpg",
                        txt: "More details222",
                        className: "nav-link",
                        style: {
                            color: "black",
                            maxHeight: '150px'
                        },
                    },
                ]
            }
        ]
    }, {
        id: 'dramatic-header-123',
        type: 'container-draggable',
        category: 'wap-header',
        theme: ['dramatic'],
        className: ['dramatic-header'],
        imgUrl: 'https://i.ibb.co/m8N2Xzd/Vicky-first-wap-ever.png',
        style: {},
        cmps: [
            {
                id: 'header-dramatic-title-123',
                type: 'txt',
                className: ['title'],
                txt: 'PH-STUDIO',
                style: {},
            },
            {
                id: ' header-dramatic-container-123',
                type: 'container',
                category: 'wap-header-container',
                className: ['dramatic-header-links-container'],
                cmps: [
                    {
                        id: 'header-dramatic-anc-1',
                        type: 'anchor',
                        url: 'https://www.facebook.com/',
                        className: ['link'],
                        txt: 'visit us on facebook',
                        style: {},
                    },
                    {
                        id: 'header-dramatic-anc-2',
                        type: 'anchor',
                        url: 'https://www.instagram.com/?hl=en',
                        className: ['link'],
                        txt: 'visit us on instagram',
                        style: {},
                    }
                ],
            },


        ],
        isPublic: true
    }, wapHeader02],
    section: [wapSection02],
    text: [],
    cards: [wapCards02],
    gallery: [],
    form: [],
    map: [],
    chat: [],
    video: [],
    footer: [wapFooter02],
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
        wapGallery01,
        wapGallery01,
        wapGallery01,
        wapCards01,
        wapFooter01]
}

export const temp2Wap = {
    _id: 'MongoDBId2',
    name: 'template 2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565945/templates/page-template-02_glfv7t.png',
    cmps: [wapHeader02, wapSection02, wapCards02, wapFooter02]
}