
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
                            backgroundColor:"red"
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
    }],
    section: [],
    footers: [],
    form: [],
    text: [],
    gallery: [],
    map: [],
    chat: [],
    video: [],
}