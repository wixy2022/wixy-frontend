const temp2Header = {
    id: '222222',
    type: 'container-draggable',
    category: 'wap-header',
    theme: ['classic'],
    className: ['flex', 'space-between'],
    imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
    cmps: [{
        id: '222223',
        type: 'txt',
        className: ['txt'],
        txt: 'Yantra',
    },
    {
        id: '222224',
        type: 'container',
        className: ['flex', 'gap1'],
        cmps: [{
            id: '222225',
            type: 'txt',
            className: ['txt'],
            txt: 'Home',
        }, {
            id: '222226',
            type: 'txt',
            className: ['txt'],
            txt: 'Dine-in',
        }, {
            id: '222227',
            type: 'txt',
            className: ['txt'],
            txt: 'Order food',
        }, {
            id: '222228',
            type: 'txt',
            className: ['txt'],
            txt: 'Media & Awards',
        }],
    }
    ],
}

const temp2Main = {
    id: '33sadas3333',
    type: 'container-draggable',
    category: 'wap-section',
    theme: ['classic'],
    className: ['flex'],
    imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
    cmps: [{
        id: '3333asda34',
        type: 'img',
        url: 'https://static.wixstatic.com/media/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg/v1/fill/w_1198,h_835,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg',
        className: ['img-container'],
    }, 
    {
        id: '3333asd35',
        type: 'container',
        className: ['description-section', 'flex', 'flex-column', 'gap1'],
        cmps: [{
            id: '33asd3336',
            type: 'txt',
            className: ['txt', 'title'],
            txt: 'The Taste of Yantra',
        }, {
            id: '333asd337',
            type: 'txt',
            className: ['txt', 'subtitle'],
            txt: 'Defining Indian Cuisine',
        }, {
            id: '333asd338',
            type: 'txt',
            className: ['txt', 'description'],
            txt: 'Yantra - where every dish is a history book on a plate. Some are complete chapters ­– perfect renditions of traditional Indian cuisine. Others are living chronicles of our times – inspired by tradition and contemporary influences.Yantra pays tribute to fine Indian cuisine with a balanced mix of classic and contemporary dishes. In loving, reverent and highly skilled hands, cherished dishes are recreated with a passion. You will find many dishes are presented in incarnations that simultaneously stir loving memories while exciting your palate.'
        }],
    }],
}

export const temp2Wap = {
    _id: '222220',
    name: 'template 2',
    imgUrl: '', //url to screenshot of the site top
    cmps: [temp2Header, temp2Main]
}

const cmpCont = {
    id: 222224, //makeId
    type: 'container',
    className: ['flex', 'gap1'],
    cmps: [{}, {}],
}