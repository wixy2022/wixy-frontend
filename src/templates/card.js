import { utilService } from "../services/util.service"

export const wapCards01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-cards',
    className: 'wap-cards-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653581168/templates/cards-t1_pcba2x.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'wap-01-team-title',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'txt',
                    className: 'team-container',
                    txt: 'Our Team',
                },
            ],
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'wap-01-team-list',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'container',
                    category: 'wap-card',
                    className: 'wap-01-card',
                    cmps: [
                        {
                            id: utilService.makeId(16),
                            type: 'img',
                            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team1_glsspk.jpg',
                            className: 'wap-01-team-img',
                        },
                        {
                            id: utilService.makeId(16),
                            type: 'txt',
                            className: 'txt',
                            txt: 'Rey Rose',
                        }
                    ]
                },
                {
                    id: utilService.makeId(16),
                    type: 'container',
                    category: 'wap-card',
                    className: 'wap-01-card',
                    cmps: [
                        {
                            id: utilService.makeId(16),
                            type: 'img',
                            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team2_whg4cx.jpg',
                            className: 'wap-01-team-img',
                        },
                        {
                            id: utilService.makeId(16),
                            type: 'txt',
                            className: 'txt',
                            txt: 'Mishel Yang',
                        }
                    ]
                },
                {
                    id: utilService.makeId(16),
                    type: 'container',
                    category: 'wap-card',

                    className: 'wap-01-card',
                    cmps: [
                        {
                            id: utilService.makeId(16),
                            type: 'img',
                            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team3_tzdckz.jpg',
                            className: 'wap-01-team-img',
                        },
                        {
                            id: utilService.makeId(16),
                            type: 'txt',
                            className: 'txt',
                            txt: 'Kim Cohen',
                        }
                    ]
                }
            ],
        }
    ],
    isPublic: true
}

export const wapCards02 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-cards-02',
    className: 'template2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565595/templates/wap-cards-02_t8nkzj.png',
    cmps: [
        _getCard02('Dine-in', 'call us for reservations', '163 Tanglin Rd, #01-28/33,\nSingapore 247933'),
        _getCard02('Home delivery', null, '12 pm to 3 pm\n6.30 pm to 10 pm\Pre-orders accepted', 'https://www.yantra.com.sg/order-here', 'Click here to order'),
        _getCard02('Reach us', null, '163 Tanglin Rd, #01-28/33\nSingapore 247933\n\nyantra@restobars.com.sg\n+65 6836 3088', 'https://form.jotform.com/200841028897056', 'Phone Orders'),
    ],
}

function _getCard02(title, subtitle, details, anchorUrl, anchorTxt, className = '') {
    const card = {
        id: utilService.makeId(16),
        type: 'container',
        className: `card ${className}`,
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'title',
            txt: title,
        }],
    }

    if (subtitle) card.cmps.push({

        id: utilService.makeId(16),
        type: 'txt',
        className: 'subtitle',
        txt: subtitle,

    })

    if (details) card.cmps.push({
        id: utilService.makeId(16),
        type: 'txt',
        className: 'details',
        txt: details,
    })

    if (anchorUrl) card.cmps.push({
        id: utilService.makeId(16),
        type: 'anchor',
        url: anchorUrl,
        txt: anchorTxt,
        className: 'link',
    })

    return card
}

export const wapCards03 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-cards',
    className: 'wap-cards-03',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653734951/templates/wap-cards-03_nawfbi.png',
    cmps: [
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team3_tzdckz.jpg', 'Ashley Jones', 'Art Director'),
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team1_glsspk.jpg', 'Robert Rose', 'Product Designer'),
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team2_whg4cx.jpg', 'Alexa Young', 'Product Manager'),
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653734835/templates/team4_itowlp.png', 'Don Fancis', 'Tech Lead'),
    ],
}

export const wapCards04 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-cards',
    className: 'wap-cards-04',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653773086/templates/wap-cards-04_ticnkc.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'card flex right-card',
            imgUrl: '',
            cmps: [{
                id: utilService.makeId(16),
                type: 'txt',
                className: 'title',
                txt: 'WHAT WE DO',
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'subtitle',
                txt: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            },
            {
                id: utilService.makeId(16),
                type: 'anchor',
                className: 'anchor',
                txt: 'READ MORE',
                imgUrl: '',
                style: {
                    borderRadius: '',
                    backgroundColor: '',
                    color: '',
                    fontFamily: ''
                }
            }],
            isPublic: false
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'card flex left-card',
            imgUrl: '',
            cmps: [{
                id: utilService.makeId(16),
                type: 'txt',
                className: 'title',
                txt: 'WHAT WE DO',
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'subtitle',
                txt: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
            },
            {
                id: utilService.makeId(16),
                type: 'anchor',
                className: 'anchor',
                txt: 'READ MORE',
                imgUrl: '',
                style: {
                    borderRadius: '',
                    backgroundColor: '',
                    color: '',
                    fontFamily: ''
                }
            }],
            isPublic: false
        },
    ],
}
export const wapCards05 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-cards',
    className: 'wap-cards-05',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654197538/templates/Capture_xdt847.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'container',
        className: 'txt-container',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'During this live webinar, you will learn:',
        }, {
            id: utilService.makeId(16),
            type: 'container',
            className: 'txt-container-second',
            cmps: [_getCard_03('How to Get Your First 1000 Followers and Beyond', 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190707/templates/unnamed_rr3kmw.png'),
            _getCard_03('How to Create an Instagram Content Plan', 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190711/templates/unnamed_xnnv02.png'),
            _getCard_03('How to Increase Engagement & Followers with Instagram Reels', 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190713/templates/unnamed_csvjay.png'),
            _getCard_03('How to Create Your Instagram Aesthetic', 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190715/templates/unnamed_ipzivz.png'),
            _getCard_03('How to Design Instagram Stories That Captivate Your Audience', 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190715/templates/unnamed_arcahh.png'),
            _getCard_03('How to Write Engaging Instagram Captions', 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190717/templates/unnamed_jiig8p.png')

            ]
        }]
    },]
}

function getCard(imgUrl, title) {
    const card = {
        id: utilService.makeId(16),
        type: 'container',
        className: 'card flex',
        imgUrl: '',
        cmps: [{
            id: utilService.makeId(16),
            type: 'img',
            url: imgUrl,
            className: 'img',
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'txt-container',
            cmps: [{
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt title',
                txt: title,
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt description',
                txt: 'Art Director'
            }],
        }],
    }

    return card
}
function _getCard_03(title, imgUrl) {
    return {
        id: utilService.makeId(16),
        type: 'container',
        className: 'card',
        imgUrl: '',
        cmps: [{
            id: utilService.makeId(16),
            type: 'img',
            url: imgUrl,
            className: 'img',
        },
        {

            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: title,


        }
        ]
    }

}