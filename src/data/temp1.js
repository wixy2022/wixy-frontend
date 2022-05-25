


export const temp1 ={
    _id: 'mongoDBId',
    name: 'template-dramatic-1',
    imgUrl: '',
    createdBy: 'miniUser',
    className: ['dramatic-container'],
    cmps: [{
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
    },
    {
        id: 'hero-dramatic-container-123',
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
    },
    {
        id: 'dramatic-gallery-container',
        type: 'container-draggable',
        category: 'wap-gallery-list',
        theme: ['dramatic'],
        className: ['dramatic-gallery-container'],
        cmps: [
            {
                id: 'dramatic-gallery-title',
                type: 'container',
                theme: ['dramatic'],
                className: ['dramatic-gallery-title'],
                cmps: [
                    {
                        id: 'gallery-container',
                        type: 'txt',
                        className: ['gallery-container'],
                        txt: 'Our Works',
                    },
                ],
            },
            {
                id: 'dramatic-gallery',
                type: 'container',
                category: 'wap-gallery-list',
                theme: ['dramatic'],
                className: ['dramatic-gallery'],
                cmps: [
                    {
                        id: 'img1',
                        type: 'img',
                        url: 'https://www.familyadventureproject.org/wp-content/uploads/2OnFire.jpg',
                        className: ['dramatic-gallery-img'],
                    },
                    {
                        id: 'img2',
                        type: 'img',
                        url: 'https://www.findingtheuniverse.com/wp-content/uploads/2018/08/Lightning-New-Mexico-by-Laurence-Norah.jpg',
                        className: ['dramatic-gallery-img'],
                    },
                    {
                        id: 'img3',
                        type: 'img',
                        url: 'https://s.alamy.com/assets/latest/resolutions/2560/enterprise/enterprise-hero-banner.jpg',
                        className: ['dramatic-gallery-img'],
                    },
                    {
                        id: 'img4',
                        type: 'img',
                        url: 'https://images.squarespace-cdn.com/content/v1/5368697fe4b07ba114021f78/1603072765884-N3RIXIJGDRE0P7NA2ZNV/Wellington-elopement-photos-1.jpg?format=1000w',
                        className: ['dramatic-gallery-img'],
                    }
                ]
            }
        ]
    },
    {
        id: 'dramatic-team-container',
        type: 'container-draggable',
        category: 'wap-list',
        theme: ['dramatic'],
        className: ['dramatic-team-container'],
        cmps: [
            {
                id: 'dramatic-team-title',
                type: 'container',
                theme: ['dramatic'],
                className: ['dramatic-team-title'],
                cmps: [
                    {
                        id: 'team-container',
                        type: 'txt',
                        className: ['team-container'],
                        txt: 'Our Team',
                    },
                ],
            },
            {
                id: 'dramatic-team-list',
                type: 'container',
                theme: ['dramatic'],
                className: ['dramatic-team-list'],
                cmps: [
                    {
                        id: 'dramatic-card1',
                        type: 'container',
                        category: 'wap-card',
                        theme: ['dramatic'],
                        className: ['dramatic-card'],
                        cmps: [
                            {
                                id: 'alex-img',
                                type: 'img',
                                url: 'https://i.ibb.co/cQtNGtp/alex-yakovlev.jpg',
                                className: ['dramatic-team-img'],
                            },
                            {
                                id: 'dramatic-txt-card1',
                                type: 'txt',
                                className: ['txt'],
                                txt: 'Alex Yakovlev',
                            }
                        ]
                    },
                    {
                        id: 'dramatic-card2',
                        type: 'container',
                        category: 'wap-card',
                        theme: ['dramatic'],
                        className: ['dramatic-card'],
                        cmps: [
                            {
                                id: 'ori-img',
                                type: 'img',
                                url: 'https://i.ibb.co/Hdk2gg0/ori-sason.jpg',
                                className: ['dramatic-team-img'],
                            },
                            {
                                id: 'dramatic-txt-card1',
                                type: 'txt',
                                className: ['txt'],
                                txt: 'Ori Sason',
                            }
                        ]
                    },
                    {
                        id: 'dramatic-card3',
                        type: 'container',
                        category: 'wap-card',
                        theme: ['dramatic'],
                        className: ['dramatic-card'],
                        cmps: [
                            {
                                id: 'vicky-img',
                                type: 'img',
                                url: 'https://i.ibb.co/SNzWPG1/vicky-polatov.jpg',
                                className: ['dramatic-team-img'],
                            },
                            {
                                id: 'dramatic-txt-card1',
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
    ]
}