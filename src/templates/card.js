import { utilService } from "../services/util.service"

export const wapCards01 = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-cards',
    theme: 'dramatic',
    className: 'wap-cards-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653581168/templates/cards-t1_pcba2x.png',
    cmps: [
        {
            id: utilService.makeId(),
            type: 'container',
            theme: 'dramatic',
            className: 'dramatic-team-title',
            cmps: [
                {
                    id: utilService.makeId(),
                    type: 'txt',
                    className: 'team-container',
                    txt: 'Our Team',
                },
            ],
        },
        {
            id: utilService.makeId(),
            type: 'container',
            theme: 'dramatic',
            className: 'dramatic-team-list',
            cmps: [
                {
                    id: utilService.makeId(),
                    type: 'container',
                    category: 'wap-card',
                    theme: 'dramatic',
                    className: 'dramatic-card',
                    cmps: [
                        {
                            id: utilService.makeId(),
                            type: 'img',
                            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team1_glsspk.jpg',
                            className: 'dramatic-team-img',
                        },
                        {
                            id: utilService.makeId(),
                            type: 'txt',
                            className: 'txt',
                            txt: 'Rey Rose',
                        }
                    ]
                },
                {
                    id: utilService.makeId(),
                    type: 'container',
                    category: 'wap-card',
                    theme: 'dramatic',
                    className: 'dramatic-card',
                    cmps: [
                        {
                            id: utilService.makeId(),
                            type: 'img',
                            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team2_whg4cx.jpg',
                            className: 'dramatic-team-img',
                        },
                        {
                            id: utilService.makeId(),
                            type: 'txt',
                            className: 'txt',
                            txt: 'Mishel Yang',
                        }
                    ]
                },
                {
                    id: utilService.makeId(),
                    type: 'container',
                    category: 'wap-card',
                    theme: 'dramatic',
                    className: 'dramatic-card',
                    cmps: [
                        {
                            id: utilService.makeId(),
                            type: 'img',
                            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team3_tzdckz.jpg',
                            className: 'dramatic-team-img',
                        },
                        {
                            id: utilService.makeId(),
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
    id: utilService.makeId(16), //makeId
    type: 'container-draggable',
    theme: 'classic',
    category: 'wap-cards-02',
    className: 'template2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565595/templates/wap-cards-02_t8nkzj.png',
    cmps: [
        _getCard02('Dine-in', 'call us for reservations', '163 Tanglin Rd, #01-28/33,\nSingapore 247933'),
        _getCard02('Home delivery', null, '12 pm to 3 pm\n6.30 pm to 10 pm\Pre-orders accepted', 'https://www.yantra.com.sg/order-here', 'Click here to order'),
        _getCard02('Reach us', null, '163 Tanglin Rd, #01-28/33\nSingapore 247933\n\nyantra@restobars.com.sg\n+65 6836 3088', 'https://form.jotform.com/200841028897056', 'Phone Orders'),
    ],
}

function _getCard02(title, subtitle, details, anchorUrl, anchorTxt) {
    const card = {
        id: utilService.makeId(16),
        type: 'container',
        className: 'card',
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
        id: null, //makeId
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
    theme: 'classic',
    className: 'wap-cards-03',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653734951/templates/wap-cards-03_nawfbi.png',
    cmps: [
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team3_tzdckz.jpg', 'Ashley Jones', 'Art Director'),
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team1_glsspk.jpg', 'Robert Rose', 'Product Designer'),
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580978/templates/team2_whg4cx.jpg', 'Alexa Young', 'Product Manager'),
        getCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1653734835/templates/team4_itowlp.png', 'Don Fancis', 'Tech Lead'),
    ],
}

function getCard(imgUrl, title, subtitle) {
    const card = {
        id: utilService.makeId(16),
        type: 'container',
        className: 'card flex',
        imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
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