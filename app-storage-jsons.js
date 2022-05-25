/* EDITOR CONTAINERS */
const wap = {
    _id: 'mongoDBId',
    name: '',
    imgUrl: '', //url to screenshot of the site top
    createdBy: miniUser,
    //usersData: {}, //contact to site - we will need a user profile page - BONUS
    cmps: [{}, {}]
}

const containerCmp = {
    id: null, //makeId,
    type: 'container',
    category: 'wap-header',
    theme: ['happy'], //ONLY MAIN CONTAINERS WILL USE THIS KEY
    className: ['happy-header'],
    imgUrl: '', //ONLY MAIN CONTAINERS WILL USE THIS KEY
    style: {
        //IF WE WILL ADD AN EDITOR
    },
    cmps: [{}, {}],
    isPublic: false
}

/*
[
    headers:[],
    footers:[]
]


*/

const txtCmp = {
    id: null, //makeId
    type: 'txt',
    className: [],
    txt: 'string of text',
    style: {
        //IF WE WILL ADD AN EDITOR
        fontFamily: 'Roboto',
        color: 'black',
        fontWeight: 400,
        fontStyle: 'italic', //normal
        textDecoration: 'underline', //normal, line-through, overline
        textAlign: 'center' //left, right
    },
}

const imgCmp = {
    id: null, //makeId,
    type:'img',
    url: 'https://m.media-amazon.com/images/I/81ZifMbP2dL._SY450_.jpg',
    className: [],
    style: {
        //IF WE WILL ADD AN EDITOR
        borderRadius: '0',
        border: '1px solid red',
        boxShadow: ''
    },
}

const anchorCmp = {
    id: null, //makeId
    type:'anchor',
    url: '',
    txt:'Contact us',
    className: [],
    style: {
        //IF WE WILL ADD AN EDITOR
        borderRadius: '0',
        backgroundColor: 'black',
        color: 'whitesmoke',
        fontFamily: 'Roboto'
    },
}

//Bonus components:
/*
    1. social
    2. gallery
    3. contact-us
    4. navbar
    5. map
    6. video
    7. signup
    8. chat
*/


/* USERS */
const user = {
    _id: 'mongoDBId',
    username: '',
    password: '',
    fullname: '',
    savedSites: [wap, wap]
}

const miniUser = {
    _id: '',
    fullname: ''
}
