import { utilService } from "../services/util.service"

const temp2Header = {
    id: '222222',
    type: 'container-draggable',
    category: 'wap-header',
    theme: ['classic'],
    className: ['template2', 'flex', 'space-between', 'align-center'],
    imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: ['txt', 'title'],
        txt: 'Yantra',
    },
    {
        id: utilService.makeId(16),
        type: 'container',
        className: ['navbar', 'flex', 'gap1', 'align-center'],
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt'],
            txt: 'Home',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt'],
            txt: 'Dine-in',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt'],
            txt: 'Order food',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt'],
            txt: 'Media & Awards',
        }],
    }
    ],
}

const temp2Main = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    theme: ['classic'],
    className: ['template2'],
    imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
    cmps: [{
        id: utilService.makeId(16),
        type: 'img',
        url: 'https://static.wixstatic.com/media/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg/v1/fill/w_1198,h_835,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg',
        className: ['img-container'],
    },
    {
        id: utilService.makeId(16),
        type: 'container',
        className: ['description-section', 'flex', 'flex-column', 'gap1'],
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt', 'title'],
            txt: 'The Taste of Yantra',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt', 'subtitle'],
            txt: 'Defining Indian Cuisine',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: ['txt', 'description'],
            txt: 'Yantra - where every dish is a history book on a plate. Some are complete chapters ­– perfect renditions of traditional Indian cuisine. Others are living chronicles of our times – inspired by tradition and contemporary influences.Yantra pays tribute to fine Indian cuisine with a balanced mix of classic and contemporary dishes. In loving, reverent and highly skilled hands, cherished dishes are recreated with a passion. You will find many dishes are presented in incarnations that simultaneously stir loving memories while exciting your palate.'
        }],
    }],
}

const temp2Cards = {
    id: utilService.makeId(16), //makeId
    type: 'container-draggable',
    category: 'wap-cards-section',
    className: ['template2'],
    cmps: [
        getCard('Dine-in', 'call us for reservations', '163 Tanglin Rd, #01-28/33,\nSingapore 247933'),
        getCard('Home delivery', null, '12 pm to 3 pm\n6.30 pm to 10 pm\Pre-orders accepted', 'https://www.yantra.com.sg/order-here', 'Click here to order'),
        getCard('Reach us', null, '163 Tanglin Rd, #01-28/33\nSingapore 247933\n\nyantra@restobars.com.sg\n+65 6836 3088', 'https://form.jotform.com/200841028897056', 'Phone Orders'),
    ],
}


function getCard(title, subtitle, details, anchorUrl, anchorTxt) {
    const card = {
        id: utilService.makeId(16),
        type: 'container',
        className: ['card'],
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: ['title'],
            txt: title,
        }],
    }

    if (subtitle) card.cmps.push({

        id: utilService.makeId(16),
        type: 'txt',
        className: ['subtitle'],
        txt: subtitle,

    })

    if (details) card.cmps.push({
        id: utilService.makeId(16),
        type: 'txt',
        className: ['details'],
        txt: details,
    })

    if (anchorUrl) card.cmps.push({
        id: null, //makeId
        type: 'anchor',
        url: anchorUrl,
        txt: anchorTxt,
        className: ['link'],
    })

    return card
}

const temp2Footer = {
    id: utilService.makeId(16), //makeId
    type: 'container-draggable',
    category: 'wap-footer',
    className: ['template2'],
    cmps: [{
        id: utilService.makeId(16),
        type: 'txt',
        className: ['txt', 'title'],
        txt: '+65 6836 3088',
    }, {
        id: utilService.makeId(16),
        type: 'txt',
        className: ['txt', 'subtitle'],
        txt: '© 2021 by Yantra',
    }]
}

export const temp2Wap = {
    _id: 'MongoDBId2',
    name: 'template 2',
    imgUrl: '', //url to screenshot of the site top
    cmps: [temp2Header, temp2Main, temp2Cards, temp2Footer]
}



const cmpCont = {
    id: utilService.makeId(16), //makeId
    type: 'container',
    className: ['flex', 'gap1'],
    cmps: [{}, {}],
}