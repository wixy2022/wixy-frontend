import { utilService } from "../services/util.service";




export const wapForm01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-form',
    className: 'wap-form-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654458306/video-background_jmbohw.jpg',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'form',
            className: 'form',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'container email',
                    className: 'email-container',
                    cmps: [
                        {
                            id: utilService.makeId(16),
                            type: 'label-cmp',
                            className: 'email-label',
                            txt: 'Email'
                        },
                        {
                            id: utilService.makeId(16),
                            type: 'input-cmp',
                            className: 'email-input',
                            placeHolder: 'Your email',
                            inputType: 'email',
                            keyValue :'email'
                        }
                    ]

                },
                {
                    id: utilService.makeId(16),
                    type: 'container fullname',
                    className: 'fullname',
                    cmps: [
                        {
                            id: utilService.makeId(16),
                            type: 'label',
                            className: 'fullname-label',
                            txt: 'Fullname'
                        },
                        {
                            id: utilService.makeId(16),
                            type: 'input',
                            className: 'Fullname-input',
                            placeHolder: 'Your fullname',
                            inputType: 'text',
                            keyValue :'fullname'

                        }
                    ]

                },
                {
                    id: utilService.makeId(16),
                    type: 'container-3',
                    className: 'phone-number',
                    cmps: [
                        {
                            id: utilService.makeId(16),
                            type: 'label',
                            className: 'phone-number-label',
                            txt: 'Phone number'
                        },
                        {
                            id: utilService.makeId(16),
                            type: 'input',
                            className: 'phone-number-input',
                            placeHolder: 'Your phone number',
                            inputType: 'number',
                            keyValue :'phoneNumber'
                        }
                    ]
                }
            ]
        }
    ],
}