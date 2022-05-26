import { utilService } from "../services/util.service"

export const wapCards01 = {}

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