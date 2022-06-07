import { utilService } from "../services/util.service" /* FIX - delete after presentation */

import { wapHeader01, wapHeader02, wapHeader03 } from './header'
import { wapSection01, wapSection02, wapSection03, wapSection05, wapSection04, wapSection06, wapSection07, wapSection071 } from './section'
import { wapCards01, wapCards02, wapCards03, wapCards04, wapCards05, wapCards051 } from './card'
import { wapFooter01, wapFooter02, wapFooter03, wapFooter04, wapFooter05, wapFooter06, wapFooter07 } from './footer'
import { wapText01, wapText02, wapText03, wapText04, wapText05 } from './text'
import { wapVideo01 } from './video'
import { wapGallery01 } from './gallery'
import {wapForm01} from './form'
export const allTemplates = {
    header: [wapHeader01, wapHeader02, wapHeader03],
    // section: [wapSection01, wapSection02, wapSection05, wapSection03, wapSection04, wapSection06, wapSection07, wapSection071],
    section: [wapSection06, wapSection05, wapSection071, wapSection03, wapSection04, wapSection01, wapSection02],
    text: [wapText01, wapText02, wapText03, wapText04, wapText05],
    cards: [wapSection07, wapCards05, wapCards051, wapCards04, wapCards02, wapCards03, wapCards01],
    gallery: [wapGallery01],
    form: [wapForm01],
    map: [],
    chat: [],
    video: [wapVideo01],
    footer: [wapFooter01, wapFooter02, wapFooter03, wapFooter04, wapFooter05, wapFooter06, wapFooter07],
}
//   const names = ['header', 'section', 'text', 'cards', 'gallery', 'form', 'map', 'chat', 'video', 'footer',]

//
export const temp1Wap = {
    // _id: '62911fb25a660f6cae594bb4',
    name: 'template 1',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png',
    createdBy: 'miniUser',
    description: 'Photography Studio',
    cmps: [wapHeader01,
        wapSection01,
        wapText01,
        wapGallery01,
        wapGallery01,
        wapGallery01,
        wapText01,
        wapCards01,
        wapFooter01]
}

export const temp2Wap = {
    // _id: '629120385a660f6cae594bb5',
    name: 'template 2',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png',
    description: 'Restaurant',
    cmps: [wapHeader02, wapSection02, wapCards02, wapCards03, wapFooter02]
}

export const temp3Wap = {
    // _id: '629294fbf04ad0403c9fe2ee',
    name: 'template 3',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653774405/templates/page-template-03_yiq4qw.png',
    description: 'Construction Company',
    cmps: [wapSection03, wapSection04, wapCards04]
}

export const temp4Wap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'template 4',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366370/templates/Capture_qrezqs.png',
    description: 'Social media',
    cmps: [wapSection05, wapCards051, wapSection071]
}

export const temp5Wap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'template 5',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366128/templates/Capture_k3mxtv.png',
    description: 'Animal & Veterinary Service',
    cmps: [wapHeader03, wapSection06, wapCards05, wapSection07, wapFooter03]
}

export const blankWap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'new-template',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654410524/icons/start_from_scratch5_abauon.jpg',
    description: 'Start from Scratch',
    cmps: []
}

// WAP FOR PRESENTATION
export const wapHeader99 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-header',
    className: 'wap-header-99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654409416/Capture_iypvpd.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654499851/presentation/fake_logo_h64zv6.jpg',
            className: 'wap-99-header-img',
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            category: 'wap-header-container',
            className: 'wap-99-header-txt-container',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'txt',
                    className: 'txt',
                    txt: 'Home',
                },
                {
                    id: utilService.makeId(16),
                    type: 'txt',
                    className: 'txt',
                    txt: 'About',
                }
            ],
        },
    ],
}

export const wapSection99 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366798/templates/Capture_rvdokw.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'container',
        className: 'txt-container',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'Chocolate and flowers arrangements',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'The Animal & Veterinary Service (AVS) is the main touch-point on animal and veterinary matters in Singapore and the first responder for all animal-related feedback',
        }]
    }],
}

export const wapVideo99 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-video',
    className: 'wap-video-99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654458306/video-background_jmbohw.jpg',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'Watch our Veterinarian Answers your Questions'
        },
        {
            id: utilService.makeId(16),
            type: 'video',
            url: 'https://www.youtube.com/embed/LD84DKa_Cpo',
            className: 'video-cmp-99',
        }
    ],
}

export const temp99Wap = {
    // _id: '629294fbf04ad0403c9fe2ff',
    name: 'template 99',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654505398/presentation/fake_wap2_rbxmq2.jpg',
    description: 'Chocolate and flowers arrangements',
    cmps: [wapSection99, wapHeader99, wapSection07, wapVideo99, wapForm01, wapFooter03]
}

// /////////////// DEV ONLY
export const allWaps = [temp99Wap, temp4Wap, temp3Wap, temp2Wap, temp1Wap, temp5Wap, blankWap]

export const testData ={
    "_id": "629f86fa55e7e583357d869a",
    "name": "template 3",
    "imgUrl": "http://res.cloudinary.com/drpqhjyvk/image/upload/v1654622072/t3ehuaxefvo8cih3t01i.jpg",
    "description": "Construction Company",
    "cmps": [
      {
        "id": "X7yeYIO5MzctwTCW",
        "type": "container-draggable",
        "category": "wap-form",
        "className": "wap-form-01 wap-form wap-form",
        "imgUrl": "https://res.cloudinary.com/drpqhjyvk/image/upload/v1654458306/video-background_jmbohw.jpg",
        "cmps": [
          {
            "id": "nE0ExeaUwExubFJd",
            "type": "container",
            "className": "container",
            "cmps": [
              {
                "id": "2cuLdjhHfANEp0Aj",
                "type": "container",
                "className": "container form-container",
                "cmps": [
                  {
                    "id": "ae87mCKJzivjfzLE",
                    "type": "txt",
                    "className": "txt title",
                    "txt": "Contact",
                    "ancestors": [
                      "X7yeYIO5MzctwTCW",
                      "nE0ExeaUwExubFJd",
                      "2cuLdjhHfANEp0Aj",
                      "ae87mCKJzivjfzLE"
                    ]
                  },
                  {
                    "id": "2g8xGt3mUn37nzPW",
                    "type": "form",
                    "className": "form",
                    "cmps": [
                      {
                        "id": "q0ZWyXUd5cuaGFQF",
                        "type": "container email",
                        "className": "email-container",
                        "cmps": [
                          {
                            "id": "1i5CI4nfuXDPPlaD",
                            "type": "label-cmp",
                            "className": "email-label",
                            "txt": "Email",
                            "ancestors": [
                              "X7yeYIO5MzctwTCW",
                              "nE0ExeaUwExubFJd",
                              "2cuLdjhHfANEp0Aj",
                              "2g8xGt3mUn37nzPW",
                              "q0ZWyXUd5cuaGFQF",
                              "1i5CI4nfuXDPPlaD"
                            ]
                          },
                          {
                            "id": "uSMhSDtJzS49sZg7",
                            "type": "input-cmp",
                            "className": "email-input",
                            "placeHolder": "Your email",
                            "inputType": "email",
                            "keyValue": "email",
                            "ancestors": [
                              "X7yeYIO5MzctwTCW",
                              "nE0ExeaUwExubFJd",
                              "2cuLdjhHfANEp0Aj",
                              "2g8xGt3mUn37nzPW",
                              "q0ZWyXUd5cuaGFQF",
                              "uSMhSDtJzS49sZg7"
                            ]
                          }
                        ],
                        "ancestors": [
                          "X7yeYIO5MzctwTCW",
                          "nE0ExeaUwExubFJd",
                          "2cuLdjhHfANEp0Aj",
                          "2g8xGt3mUn37nzPW",
                          "q0ZWyXUd5cuaGFQF"
                        ]
                      },
                      {
                        "id": "bGG21V2BfYPIA8Bh",
                        "type": "container fullname",
                        "className": "fullname",
                        "cmps": [
                          {
                            "id": "gw8UPASAofnBa1zy",
                            "type": "label",
                            "className": "fullname-label",
                            "txt": "Full Name",
                            "ancestors": [
                              "X7yeYIO5MzctwTCW",
                              "nE0ExeaUwExubFJd",
                              "2cuLdjhHfANEp0Aj",
                              "2g8xGt3mUn37nzPW",
                              "bGG21V2BfYPIA8Bh",
                              "gw8UPASAofnBa1zy"
                            ]
                          },
                          {
                            "id": "OLZYNeKUVyj5D2XH",
                            "type": "input",
                            "className": "Fullname-input",
                            "placeHolder": "Your full Name",
                            "inputType": "text",
                            "keyValue": "fullname",
                            "ancestors": [
                              "X7yeYIO5MzctwTCW",
                              "nE0ExeaUwExubFJd",
                              "2cuLdjhHfANEp0Aj",
                              "2g8xGt3mUn37nzPW",
                              "bGG21V2BfYPIA8Bh",
                              "OLZYNeKUVyj5D2XH"
                            ]
                          }
                        ],
                        "ancestors": [
                          "X7yeYIO5MzctwTCW",
                          "nE0ExeaUwExubFJd",
                          "2cuLdjhHfANEp0Aj",
                          "2g8xGt3mUn37nzPW",
                          "bGG21V2BfYPIA8Bh"
                        ]
                      },
                      {
                        "id": "7FjcsPBJAQ14c1fm",
                        "type": "container-3",
                        "className": "phone-number",
                        "cmps": [
                          {
                            "id": "HIYXE2P543yrVu5Y",
                            "type": "label",
                            "className": "phone-number-label",
                            "txt": "Phone Number",
                            "ancestors": [
                              "X7yeYIO5MzctwTCW",
                              "nE0ExeaUwExubFJd",
                              "2cuLdjhHfANEp0Aj",
                              "2g8xGt3mUn37nzPW",
                              "7FjcsPBJAQ14c1fm",
                              "HIYXE2P543yrVu5Y"
                            ]
                          },
                          {
                            "id": "VJdg1lDK6pqxLa91",
                            "type": "input",
                            "className": "phone-number-input",
                            "placeHolder": "Your phone number",
                            "inputType": "tel",
                            "keyValue": "phoneNumber",
                            "ancestors": [
                              "X7yeYIO5MzctwTCW",
                              "nE0ExeaUwExubFJd",
                              "2cuLdjhHfANEp0Aj",
                              "2g8xGt3mUn37nzPW",
                              "7FjcsPBJAQ14c1fm",
                              "VJdg1lDK6pqxLa91"
                            ]
                          }
                        ],
                        "ancestors": [
                          "X7yeYIO5MzctwTCW",
                          "nE0ExeaUwExubFJd",
                          "2cuLdjhHfANEp0Aj",
                          "2g8xGt3mUn37nzPW",
                          "7FjcsPBJAQ14c1fm"
                        ]
                      }
                    ],
                    "ancestors": [
                      "X7yeYIO5MzctwTCW",
                      "nE0ExeaUwExubFJd",
                      "2cuLdjhHfANEp0Aj",
                      "2g8xGt3mUn37nzPW"
                    ]
                  }
                ],
                "ancestors": [
                  "X7yeYIO5MzctwTCW",
                  "nE0ExeaUwExubFJd",
                  "2cuLdjhHfANEp0Aj"
                ]
              }
            ],
            "ancestors": [
              "X7yeYIO5MzctwTCW",
              "nE0ExeaUwExubFJd"
            ]
          }
        ],
        "ancestors": [
          "X7yeYIO5MzctwTCW"
        ]
      },
      {
        "id": "KXku17o1wZbeO0fm",
        "type": "container-draggable",
        "category": "wap-section",
        "className": "wap-section-03 wap-section wap-section wap-section wap-section wap-section wap-section wap-section wap-section",
        "imgUrl": "https://res.cloudinary.com/drpqhjyvk/image/upload/v1653755007/templates/section-wap-03_dli4ne.png",
        "cmps": [
          {
            "id": "S7AS4RiiWAtV1y3r",
            "type": "txt",
            "className": "txt title",
            "txt": "COMMUNITY & INSPIRATION",
            "ancestors": [
              "KXku17o1wZbeO0fm",
              "S7AS4RiiWAtV1y3r"
            ]
          },
          {
            "id": "9MfHocoQugq8pWPh",
            "type": "txt",
            "className": "txt subtitle",
            "txt": "WHAT ARE MINIMALIST DESIGNS?",
            "ancestors": [
              "KXku17o1wZbeO0fm",
              "9MfHocoQugq8pWPh"
            ]
          }
        ],
        "isPublic": true,
        "ancestors": [
          "KXku17o1wZbeO0fm"
        ]
      },
      {
        "id": "U900d4nPXKmqEvw1",
        "type": "container-draggable",
        "category": "wap-section",
        "className": "wap-section-04 wap-section wap-section wap-section wap-section wap-section wap-section wap-section",
        "imgUrl": "https://res.cloudinary.com/drpqhjyvk/image/upload/v1653773084/templates/wap-section-04_pbeum7.png",
        "cmps": [
          {
            "id": "DEbpyTa3DwTpuTzw",
            "type": "img",
            "url": "https://res.cloudinary.com/drpqhjyvk/image/upload/v1653755224/templates/wap-04_u3ivvw.jpg",
            "className": "wap-section-04-img",
            "style": {
              "borderRadius": "",
              "border": "",
              "boxShadow": ""
            },
            "ancestors": [
              "U900d4nPXKmqEvw1",
              "DEbpyTa3DwTpuTzw"
            ]
          },
          {
            "id": "eoqhreOk67a9ACZS",
            "type": "txt",
            "className": "txt title",
            "txt": "THE FIRM CREATES SUSTAINABLE",
            "ancestors": [
              "U900d4nPXKmqEvw1",
              "eoqhreOk67a9ACZS"
            ]
          },
          {
            "id": "zl0WUDL5bQwOzdgR",
            "type": "txt",
            "className": "txt subtitle",
            "txt": "BUILDINGS AND SPACES",
            "ancestors": [
              "U900d4nPXKmqEvw1",
              "zl0WUDL5bQwOzdgR"
            ]
          },
          {
            "id": "d5OZWYYKZMRsZpYT",
            "type": "txt",
            "className": "txt description",
            "txt": "Our buildings are shaped by their unique context, the creativity imbued by our design teams and the vision of our clients. ",
            "ancestors": [
              "U900d4nPXKmqEvw1",
              "d5OZWYYKZMRsZpYT"
            ]
          },
          {
            "id": "g59iLytEAUHApsM5",
            "type": "anchor",
            "className": "anchor",
            "txt": "learn more",
            "imgUrl": "",
            "style": {
              "borderRadius": "",
              "backgroundColor": "",
              "color": "",
              "fontFamily": ""
            },
            "ancestors": [
              "U900d4nPXKmqEvw1",
              "g59iLytEAUHApsM5"
            ]
          }
        ],
        "isPublic": true,
        "ancestors": [
          "U900d4nPXKmqEvw1"
        ]
      },
      {
        "id": "H1jy9poXhgx9PRA7",
        "type": "container-draggable",
        "category": "wap-cards",
        "className": "wap-cards-04 wap-cards wap-cards wap-cards wap-cards wap-cards wap-cards wap-cards",
        "imgUrl": "https://res.cloudinary.com/drpqhjyvk/image/upload/v1653773086/templates/wap-cards-04_ticnkc.png",
        "cmps": [
          {
            "id": "UVftGQACbYUVtRPr",
            "type": "container",
            "className": "card flex right-card",
            "imgUrl": "",
            "cmps": [
              {
                "id": "l3FxF7FuVaTVMGHS",
                "type": "txt",
                "className": "title",
                "txt": "WHAT WE DO",
                "ancestors": [
                  "H1jy9poXhgx9PRA7",
                  "UVftGQACbYUVtRPr",
                  "l3FxF7FuVaTVMGHS"
                ]
              },
              {
                "id": "StRTNKqgdZg1M4SN",
                "type": "txt",
                "className": "subtitle",
                "txt": "Sample text. Click to select the text box. Click again or double click to start editing the text.",
                "ancestors": [
                  "H1jy9poXhgx9PRA7",
                  "UVftGQACbYUVtRPr",
                  "StRTNKqgdZg1M4SN"
                ]
              },
              {
                "id": "wLpdlR6IUnhdAbuw",
                "type": "anchor",
                "className": "anchor",
                "txt": "READ MORE",
                "imgUrl": "",
                "style": {
                  "borderRadius": "",
                  "backgroundColor": "",
                  "color": "",
                  "fontFamily": ""
                },
                "ancestors": [
                  "H1jy9poXhgx9PRA7",
                  "UVftGQACbYUVtRPr",
                  "wLpdlR6IUnhdAbuw"
                ]
              }
            ],
            "isPublic": false,
            "ancestors": [
              "H1jy9poXhgx9PRA7",
              "UVftGQACbYUVtRPr"
            ]
          },
          {
            "id": "VhKTOyC0dj0XU5CE",
            "type": "container",
            "className": "card flex left-card",
            "imgUrl": "",
            "cmps": [
              {
                "id": "3oGLsVXbCzMrGakJ",
                "type": "txt",
                "className": "title",
                "txt": "WHAT WE DO",
                "ancestors": [
                  "H1jy9poXhgx9PRA7",
                  "VhKTOyC0dj0XU5CE",
                  "3oGLsVXbCzMrGakJ"
                ]
              },
              {
                "id": "OhXGdWmYvDNS8tUR",
                "type": "txt",
                "className": "subtitle",
                "txt": "Sample text. Click to select the text box. Click again or double click to start editing the text.",
                "ancestors": [
                  "H1jy9poXhgx9PRA7",
                  "VhKTOyC0dj0XU5CE",
                  "OhXGdWmYvDNS8tUR"
                ]
              },
              {
                "id": "QVcrmeY8k4JIbUlL",
                "type": "anchor",
                "className": "anchor",
                "txt": "READ MORE",
                "imgUrl": "",
                "style": {
                  "borderRadius": "",
                  "backgroundColor": "",
                  "color": "",
                  "fontFamily": ""
                },
                "ancestors": [
                  "H1jy9poXhgx9PRA7",
                  "VhKTOyC0dj0XU5CE",
                  "QVcrmeY8k4JIbUlL"
                ]
              }
            ],
            "isPublic": false,
            "ancestors": [
              "H1jy9poXhgx9PRA7",
              "VhKTOyC0dj0XU5CE"
            ]
          }
        ],
        "ancestors": [
          "H1jy9poXhgx9PRA7"
        ]
      }
    ],
    "creator": "629f86e755e7e583357d8699",
    "leads": [
      {
        "fullName": "Alexa Hanson",
        "phoneNumber": "058-611-8135",
        "email": "quisque.ornare@google.com",
        "createdAt": 1648154199835
      },
      {
        "fullName": "Yasir Blackburn",
        "phoneNumber": "046-838-1610",
        "email": "mauris.eu.elit@outlook.net",
        "createdAt": 1648783036559
      },
      {
        "fullName": "Zeph Dodson",
        "phoneNumber": "025-314-4838",
        "email": "nunc.ac@google.couk",
        "createdAt": 1645391370388
      },
      {
        "fullName": "Cathleen Campos",
        "phoneNumber": "053-637-0408",
        "email": "porttitor.eros@google.com",
        "createdAt": 1651673931139
      },
      {
        "fullName": "Emma Pittman",
        "phoneNumber": "060-018-7719",
        "email": "amet.metus@aol.net",
        "createdAt": 1646877146063
      },
      {
        "fullName": "Gemma Guerra",
        "phoneNumber": "096-335-6318",
        "email": "dignissim@hotmail.couk",
        "createdAt": 1648659920326
      },
      {
        "fullName": "Ginger Galloway",
        "phoneNumber": "056-351-6405",
        "email": "mauris.sagittis@aol.couk",
        "createdAt": 1653433321504
      },
      {
        "fullName": "Melyssa Griffin",
        "phoneNumber": "092-760-7122",
        "email": "id@outlook.net",
        "createdAt": 1645948796895
      },
      {
        "fullName": "Howard Howe",
        "phoneNumber": "010-031-4971",
        "email": "posuere.cubilia@outlook.couk",
        "createdAt": 1654357315138
      },
      {
        "fullName": "Eaton Robles",
        "phoneNumber": "022-521-8301",
        "email": "orci@outlook.edu",
        "createdAt": 1653900702474
      },
      {
        "fullName": "Ila Bolton",
        "phoneNumber": "057-383-3948",
        "email": "penatibus@protonmail.ca",
        "createdAt": 1644671684992
      },
      {
        "fullName": "Mason Walters",
        "phoneNumber": "078-580-4454",
        "email": "ipsum.sodales@icloud.couk",
        "createdAt": 1644322365785
      },
      {
        "fullName": "Ulric Christian",
        "phoneNumber": "020-111-6425",
        "email": "nunc.sit@protonmail.couk",
        "createdAt": 1650024226835
      },
      {
        "fullName": "Micah Odom",
        "phoneNumber": "061-452-4518",
        "email": "a.magna.lorem@aol.org",
        "createdAt": 1648556226886
      },
      {
        "fullName": "Florence Matthews",
        "phoneNumber": "082-286-3151",
        "email": "eu.dui@outlook.net",
        "createdAt": 1650145442160
      },
      {
        "fullName": "Xyla Ellis",
        "phoneNumber": "035-577-5505",
        "email": "ac@aol.com",
        "createdAt": 1651522562457
      },
      {
        "fullName": "Hilary Dodson",
        "phoneNumber": "048-618-6612",
        "email": "habitant.morbi@icloud.ca",
        "createdAt": 1652327307634
      },
      {
        "fullName": "Melodie Haley",
        "phoneNumber": "045-852-7651",
        "email": "in@google.couk",
        "createdAt": 1643895152142
      },
      {
        "fullName": "Glenna Lamb",
        "phoneNumber": "017-107-4412",
        "email": "faucibus.lectus.a@aol.net",
        "createdAt": 1650708147868
      },
      {
        "fullName": "Wanda Dotson",
        "phoneNumber": "060-285-2314",
        "email": "mauris.blandit.enim@protonmail.net",
        "createdAt": 1649690385641
      },
      {
        "fullName": "Craig Eaton",
        "phoneNumber": "003-848-3323",
        "email": "non.enim@yahoo.edu",
        "createdAt": 1648108542704
      },
      {
        "fullName": "Stuart Lara",
        "phoneNumber": "000-598-6059",
        "email": "adipiscing.ligula@outlook.org",
        "createdAt": 1651560853903
      },
      {
        "fullName": "Marah Barrera",
        "phoneNumber": "037-732-6777",
        "email": "fringilla.mi.lacinia@google.com",
        "createdAt": 1646457548826
      },
      {
        "fullName": "Abbot Daniel",
        "phoneNumber": "035-186-7755",
        "email": "nec.quam@icloud.net",
        "createdAt": 1652558511266
      },
      {
        "fullName": "Genevieve Irwin",
        "phoneNumber": "033-479-6322",
        "email": "vitae.risus@google.ca",
        "createdAt": 1646003079561
      }
    ],
    "visitors": 412
  }