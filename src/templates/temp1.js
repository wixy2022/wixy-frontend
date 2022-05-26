import { utilService } from "../services/util.service";

// const dramaticThemeHeader = {
//     id: utilService.makeId(),
//     type: 'container-draggable',
//     category: 'wap-header',
//     theme: 'dramatic',
//     className: 'wap-header-01',
//     imgUrl: 'https://i.ibb.co/m8N2Xzd/Vicky-first-wap-ever.png',
//     style: {},
//     cmps: [
//         {
//             id: utilService.makeId(),
//             type: 'txt',
//             className: 'title',
//             txt: 'PH-STUDIO',
//         },
//         {
//             id: utilService.makeId(),
//             type: 'container',
//             category: 'wap-header-container',
//             className: 'dramatic-header-links-container',
//             cmps: [
//                 {
//                     id: utilService.makeId(),
//                     type: 'anchor',
//                     url: 'https://www.facebook.com/',
//                     className: 'link',
//                     txt: 'facebook',

//                 },
//                 {
//                     id: utilService.makeId(),
//                     type: 'anchor',
//                     url: 'https://www.instagram.com/?hl=en',
//                     className: 'link',
//                     txt: 'instagram',
//                     style: {},
//                 }
//             ],
//         },



//     ],
//     isPublic: true
// }

// const dramaticThemeHero = {
//     id: utilService.makeId(),
//     type: 'container-draggable',
//     category: 'wap-hero',
//     theme: 'dramatic',
//     className: 'wap-hero-01',
//     imgUrl: 'https://wallpaperaccess.com/full/3156824.jpg',
//     cmps: [
//         {
//             id: 'hero-dramatic-txt-123',
//             type: 'txt',
//             className: 'txt title',
//             txt: 'PH-STUDIO - make your dreams come true',
//             style: {}
//         }
//     ],
//     isPublic: true
// }

// const dramaticThemeTitle = {
//     id: utilService.makeId(),
//     type: 'container-draggable',
//     category: 'wap-title',
//     theme: 'dramatic',
//     className: 'wap-title-01',
//     cmps: [{
//         id: utilService.makeId(),
//         type: 'txt',
//         theme: 'dramatic',
//         className: 'dramatic-title',
//         txt: 'Our Works',
//     }]
// }

// const dramaticThemeGallery = {
//     id: utilService.makeId(),
//     type: 'container-draggable',
//     category: 'wap-gallery',
//     theme: 'dramatic',
//     className: 'wap-gallery-01',
//     cmps: [
//         {
//             id: utilService.makeId(),
//             type: 'img',
//             url: 'https://i.ibb.co/R3d2KF9/gallery5.jpg',
//             className: 'dramatic-gallery-img',
//         },
//         {
//             id: utilService.makeId(),
//             type: 'img',
//             url: 'https://i.ibb.co/rZsWjvZ/gallery2.jpg',
//             className: 'dramatic-gallery-img',
//         },
//         {
//             id: utilService.makeId(),
//             type: 'img',
//             url: 'https://i.ibb.co/N9t7rNh/gallery3.jpg',
//             className: 'dramatic-gallery-img',
//         },
//         {
//             id: utilService.makeId(),
//             type: 'img',
//             url: 'https://i.ibb.co/qNLSrT8/gallery4.jpg',
//             className: 'dramatic-gallery-img',
//         }
//     ]
// }

// const dramaticThemeList = {
//     id: utilService.makeId(),
//     type: 'container-draggable',
//     category: 'wap-cards',
//     theme: 'dramatic',
//     className: 'wap-cards-01',
//     cmps: [
//         {
//             id: utilService.makeId(),
//             type: 'container',
//             theme: 'dramatic',
//             className: 'dramatic-team-title',
//             cmps: [
//                 {
//                     id: utilService.makeId(),
//                     type: 'txt',
//                     className: 'team-container',
//                     txt: 'Our Team',
//                 },
//             ],
//         },
//         {
//             id: utilService.makeId(),
//             type: 'container',
//             theme: 'dramatic',
//             className: 'dramatic-team-list',
//             cmps: [
//                 {
//                     id: utilService.makeId(),
//                     type: 'container',
//                     category: 'wap-card',
//                     theme: 'dramatic',
//                     className: 'dramatic-card',
//                     cmps: [
//                         {
//                             id: utilService.makeId(),
//                             type: 'img',
//                             url: 'https://i.ibb.co/p40Xhhs/team1.jpg',
//                             className: 'dramatic-team-img',
//                         },
//                         {
//                             id: utilService.makeId(),
//                             type: 'txt',
//                             className: 'txt',
//                             txt: 'Rey Rose',
//                         }
//                     ]
//                 },
//                 {
//                     id: utilService.makeId(),
//                     type: 'container',
//                     category: 'wap-card',
//                     theme: 'dramatic',
//                     className: 'dramatic-card',
//                     cmps: [
//                         {
//                             id: utilService.makeId(),
//                             type: 'img',
//                             url: 'https://i.ibb.co/3chftzb/team2.jpg',
//                             className: 'dramatic-team-img',
//                         },
//                         {
//                             id: utilService.makeId(),
//                             type: 'txt',
//                             className: 'txt',
//                             txt: 'Mishel Yang',
//                         }
//                     ]
//                 },
//                 {
//                     id: utilService.makeId(),
//                     type: 'container',
//                     category: 'wap-card',
//                     theme: 'dramatic',
//                     className: 'dramatic-card',
//                     cmps: [
//                         {
//                             id: utilService.makeId(),
//                             type: 'img',
//                             url: 'https://i.ibb.co/qnyK5XT/team3.jpg',
//                             className: 'dramatic-team-img',
//                         },
//                         {
//                             id: utilService.makeId(),
//                             type: 'txt',
//                             className: 'txt',
//                             txt: 'Kim Cohen',
//                         }
//                     ]
//                 }
//             ],
//         }
//     ],
//     isPublic: true
// }

// const dramaticThemeFooter = {
//     id: utilService.makeId(),
//     type: 'container-draggable',
//     category: 'wap-footer',
//     theme: 'dramatic',
//     className: 'wap-footer-01',
//     cmps: [
//         {
//             id: utilService.makeId(),
//             type: 'txt',
//             className: 'title',
//             txt: 'PH-STUDIO',
//         }
//     ],
//     isPublic: true
// }

// export const dramaticThemeWap = {
//     _id: 'mongoDBId',
//     name: 'template-dramatic-1',
//     imgUrl: '',
//     createdBy: 'miniUser',
//     className: 'wap-01',
//     cmps: [dramaticThemeHeader,
//         dramaticThemeHero,
//         dramaticThemeTitle,
//         dramaticThemeGallery,
//         dramaticThemeGallery,
//         dramaticThemeGallery,
//         dramaticThemeList,
//         dramaticThemeFooter]
// }