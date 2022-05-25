import { utilService } from "../services/util.service";

const dramaticThemeHeader = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-header',
    theme: ['dramatic'],
    className: ['dramatic-header'],
    imgUrl: 'https://i.ibb.co/m8N2Xzd/Vicky-first-wap-ever.png',
    style: {},
    cmps: [
        {
            id: utilService.makeId(),
            type: 'txt',
            className: ['title'],
            txt: 'PH-STUDIO',
        },
        {
            id: utilService.makeId(),
            type: 'container',
            category: 'wap-header-container',
            className: ['dramatic-header-links-container'],
            cmps: [
                {
                    id: utilService.makeId(),
                    type: 'anchor',
                    url: 'https://www.facebook.com/',
                    className: ['link'],
                    txt: 'facebook',

                },
                {
                    id: utilService.makeId(),
                    type: 'anchor',
                    url: 'https://www.instagram.com/?hl=en',
                    className: ['link'],
                    txt: 'instagram',
                    style: {},
                }
            ],
        },



    ],
    isPublic: true
}

const dramaticThemeHero = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-hero',
    theme: ['dramatic'],
    className: ['dramatic-hero'],
    imgUrl: 'https: //images.unsplash.com/photo-1647776145661-d3526d7c2b7f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287',
    style: {},
    cmps: [
        {
            id: 'hero-dramatic-txt-123',
            type: 'txt',
            className: ['txt', 'title'],
            txt: 'PH-STUDIO - make your dreams come true',
            style: {}
        }
    ],
    isPublic: true
}

const dramaticThemeTitle = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-title',
    theme: ['dramatic'],
    className: ['dramatic-team-title-container'],
    cmps: [{
        id: utilService.makeId(),
        type: 'txt',
        theme: ['dramatic'],
        className: ['dramatic-team-title'],
        txt: 'Our Works',
    }]
}

const dramaticThemeGallery = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-gallery-list',
    theme: ['dramatic'],
    className: ['dramatic-gallery-container'],
    cmps: [
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://www.familyadventureproject.org/wp-content/uploads/2OnFire.jpg',
            className: ['dramatic-gallery-img'],
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://www.findingtheuniverse.com/wp-content/uploads/2018/08/Lightning-New-Mexico-by-Laurence-Norah.jpg',
            className: ['dramatic-gallery-img'],
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://s.alamy.com/assets/latest/resolutions/2560/enterprise/enterprise-hero-banner.jpg',
            className: ['dramatic-gallery-img'],
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://images.squarespace-cdn.com/content/v1/5368697fe4b07ba114021f78/1603072765884-N3RIXIJGDRE0P7NA2ZNV/Wellington-elopement-photos-1.jpg?format=1000w',
            className: ['dramatic-gallery-img'],
        }
    ]
}

const dramaticThemeList = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-list',
    theme: ['dramatic'],
    className: ['dramatic-team-container'],
    cmps: [
        {
            id: utilService.makeId(),
            type: 'container',
            theme: ['dramatic'],
            className: ['dramatic-team-title'],
            cmps: [
                {
                    id: utilService.makeId(),
                    type: 'txt',
                    className: ['team-container'],
                    txt: 'Our Team',
                },
            ],
        },

        {
            id: utilService.makeId(),
            type: 'container',
            theme: ['dramatic'],
            className: ['dramatic-team-list'],
            cmps: [
                {
                    id: utilService.makeId(),
                    type: 'container',
                    category: 'wap-card',
                    theme: ['dramatic'],
                    className: ['dramatic-card'],
                    cmps: [
                        {
                            id: utilService.makeId(),
                            type: 'img',
                            url: 'https://i.ibb.co/cQtNGtp/alex-yakovlev.jpg',
                            className: ['dramatic-team-img'],
                        },
                        {
                            id: utilService.makeId(),
                            type: 'txt',
                            className: ['txt'],
                            txt: 'Alex Yakovlev',
                        }
                    ]
                },
                {
                    id: utilService.makeId(),
                    type: 'container',
                    category: 'wap-card',
                    theme: ['dramatic'],
                    className: ['dramatic-card'],
                    cmps: [
                        {
                            id: utilService.makeId(),
                            type: 'img',
                            url: 'https://i.ibb.co/Hdk2gg0/ori-sason.jpg',
                            className: ['dramatic-team-img'],
                        },
                        {
                            id: utilService.makeId(),
                            type: 'txt',
                            className: ['txt'],
                            txt: 'Ori Sason',
                        }
                    ]
                },
                {
                    id: utilService.makeId(),
                    type: 'container',
                    category: 'wap-card',
                    theme: ['dramatic'],
                    className: ['dramatic-card'],
                    cmps: [
                        {
                            id: utilService.makeId(),
                            type: 'img',
                            url: 'https://i.ibb.co/SNzWPG1/vicky-polatov.jpg',
                            className: ['dramatic-team-img'],
                        },
                        {
                            id: utilService.makeId(),
                            type: 'txt',
                            className: ['txt'],
                            txt: 'Vicky Polatov',
                        }
                    ]
                }
            ],
        }
    ],
    isPublic: true
}

const dramaticThemeFooter = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-footer',
    theme: ['dramatic'],
    className: ['dramatic-footer'],
    cmps: [
        {
            id: utilService.makeId(),
            type: 'txt',
            className: ['title'],
            txt: 'PH-STUDIO',
        }
    ],
    isPublic: true
}

export const dramaticThemeWap = {
    _id: 'mongoDBId',
    name: 'template-dramatic-1',
    imgUrl: '',
    createdBy: 'miniUser',
    className: ['dramatic-container'],
    cmps: [dramaticThemeHeader,
        dramaticThemeHero,
        dramaticThemeTitle,
        dramaticThemeGallery,
        dramaticThemeGallery,
        dramaticThemeGallery,
        dramaticThemeList,
        dramaticThemeFooter]
}