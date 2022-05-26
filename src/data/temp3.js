import { utilService } from '../services/util.service'

function getCard(imgUrl, title, subtitle) {
    const card = {
        id: utilService.makeId(16),
        type: 'container',
        className: ['card', 'flex'],
        imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
        cmps: [{
            id: utilService.makeId(16),
            type: 'img',
            url: imgUrl,
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
                txt: title,
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: ['txt', 'description'],
                txt: 'Art Director'
            }],
        }],
    }

    return card
}

const temp3CardContainer = {
    id: utilService.makeId(16), //makeId
    type: 'container-draggable',
    category: 'wap-section',
    theme: ['cards'], //ONLY MAIN CONTAINERS WILL USE THIS KEY
    className: ['happy-header', 'flex'],
    imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
    style: {
        //IF WE WILL ADD AN EDITOR
    },
    cmps: [
        getCard('https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg', 'Ashley Jones', 'Art Director'),
        getCard('https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_960_720.jpg', 'Don Fancis', 'Tech Lead'),
        getCard('https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg', 'Alexa Young', 'Product Manager'),
        getCard('https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_960_720.jpg', 'Robert Rose', 'Product Designer')
    ],
}

export const temp3Wap = {
    _id: '333330',
    name: 'template 3',
    imgUrl: '', //url to screenshot of the site top
    cmps: [temp3CardContainer]
}