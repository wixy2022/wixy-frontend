import { utilService } from "../services/util.service"

export const wapSection01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-hero',
    className: 'wap-hero-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580957/templates/hero-t1_ldzw5u.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'PH-STUDIO',
            style: {}
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'make your dreams come true',
            style: {}
        }
    ],
    isPublic: true
}

export const wapSection02 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-02',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653565595/templates/wap-section-02_jrcyn7.png',
    cmps: [{
        id: utilService.makeId(16),
        type: 'img',
        url: 'https://static.wixstatic.com/media/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg/v1/fill/w_1198,h_835,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a44e0a_f6fd3717e9e94685a03380cbb9befccc~mv2.jpg',
        className: 'img-container',
    },
    {
        id: utilService.makeId(16),
        type: 'container',
        className: 'txt-container',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'The Taste of Yantra',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'Defining Indian Cuisine',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt description',
            txt: 'Yantra - where every dish is a history book on a plate. Some are complete chapters ­– perfect renditions of traditional Indian cuisine. Others are living chronicles of our times – inspired by tradition and contemporary influences.Yantra pays tribute to fine Indian cuisine with a balanced mix of classic and contemporary dishes. In loving, reverent and highly skilled hands, cherished dishes are recreated with a passion. You will find many dishes are presented in incarnations that simultaneously stir loving memories while exciting your palate.'
        }],
    }],
}

export const wapSection03 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-03',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653755007/templates/section-wap-03_dli4ne.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'COMMUNITY & INSPIRATION',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'WHAT ARE MINIMALIST DESIGNS?',
        }

    ],
    isPublic: true
}

export const wapSection04 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-04',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653773084/templates/wap-section-04_pbeum7.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653755224/templates/wap-04_u3ivvw.jpg',
            className: 'wap-section-04-img',
            style: {
                borderRadius: '',
                border: '',
                boxShadow: ''
            }
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'THE FIRM CREATES SUSTAINABLE',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'BUILDINGS AND SPACES',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt description',
            txt: 'Our buildings are shaped by their unique context, the creativity imbued by our design teams and the vision of our clients. '
        }, {
            id: utilService.makeId(16),
            type: 'anchor',
            className: 'anchor',
            txt: 'learn more',
            imgUrl: '',
            style: {
                borderRadius: '',
                backgroundColor: '',
                color: '',
                fontFamily: ''
            },

        },
    ],
    isPublic: true
}

export const wapSection05 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-05',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654190568/templates/Capture_bzixyk.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'txt-container',
            cmps: [{
                id: utilService.makeId(16),
                type: 'anchor',
                className: 'anchor',
                txt: 'FREE WEBINAR',
                imgUrl: '',
                style: {
                    borderRadius: '',
                    backgroundColor: '',
                    color: '',
                    fontFamily: ''
                }
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt title',
                txt: 'How to Grow Your Instagram NOW and Create an Engaged  Following ',
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt description',
                txt: ''
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt subtitle',
                txt: 'AUGUST 10, 11, & 12 '
            }, {
                id: utilService.makeId(16),
                type: 'txt',
                className: 'txt subtitle second',
                txt: 'CHOOSE A DATE'
            },
            {
                id: utilService.makeId(16),
                type: 'anchor',
                className: 'anchor-second',
                txt: 'Sign Up Now',
                imgUrl: '',
                style: {
                    borderRadius: '',
                    backgroundColor: '',
                    color: '',
                    fontFamily: ''
                }
            }],
        },
        {
            id: utilService.makeId(16),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654181605/templates/unnamed_vmqupw.png',
            className: 'wap-section-05-img',
            style: {
                borderRadius: '',
                border: '',
                boxShadow: ''
            }
        }
    ],
    isPublic: true
}


export const wapSection06 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-06',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366798/templates/Capture_rvdokw.png', 
    cmps: [{
        id: utilService.makeId(16),
        type: 'container',
        className: 'txt-container',
        cmps: [{
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'Animal & Veterinary Service',
        }, {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt subtitle',
            txt: 'The Animal & Veterinary Service (AVS) is the main touch-point on animal and veterinary matters in Singapore and the first responder for all animal-related feedback',
        }]
    }],
}

export const wapSection07 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-07',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654366897/templates/Capture_ah45fs.png', 
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt top-circle',
            txt: '',
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'NEWS & EVENTS',
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'container',
            cmps: [{
                id: utilService.makeId(16),
                type: 'container',
                className: 'container',
                cmps: [
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt date',
                        txt: '01 June 2022',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt title',
                        txt: 'Public consultation for pet breeders and boarders',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt subtitle',
                        txt: 'The Animal &Veterinary Service (AVS), a cluster of the National Parks Board (NParks), is launching a second public consultation before finalising the revised licensing conditions for the dog breeders and pet boarders. These revised conditions follow months of engagement and finetuning with the industry stakeholders, to ensure that these conditions can be implemented effectively. The public consultation will be conducted online through a survey and will be held for a month, starting today, 1 July 2021 and ending on 31 July 2021. To partake in the survey, please visit https://go.gov.sg/bnb.',
                    }]
            },
            {
                id: utilService.makeId(16),
                type: 'container',
                className: 'container',
                cmps: [
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt date',
                        txt: '09 May 2022',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt title',
                        txt: 'Public Consultation on Adoption and Training of Dogs',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt subtitle',
                        txt: 'A rehoming and adoption workgroup (RAWG) was set up in October 2020 to raise the standards of rehoming and adoption of stray dogs in Singapore. The RAWG consisted of various stakeholders from the pet industry i.e. veterinarians, dog trainers, and animal welfare groups (AWGs). Improving rehoming and adoption practices in Singapore requires a multi-stakeholder effort. The RAWG carried out a series of focus group discussions to develop guidelines to address areas identified by RAWG. This was followed by a month-long public consultation which concluded on 8 November 2021.  The results from the public consultation are currently undergoing review by the RAWG and the RAWG’s recommendations will be shared soon.',
                    }]
            },
            {
                id: utilService.makeId(16),
                type: 'container',
                className: 'container',
                cmps: [
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt date',
                        txt: '05 Apr 2022',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt title',
                        txt: 'Science behind Animal Behavior Series: Feline Ethology',
                    },
                    {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt subtitle',
                        txt: 'Join Prof Danielle Gunn-Moore, a Professor in Feline Medicine, and Dr Jenna Kiddie, an Animal Behaviour and Welfare Consultant, both based in the UK, who will be sharing about the science and history behind feline domestication as well as the social behaviour of cats at the upcoming AVS webinar on Feline Ethology. Visit www.go.gov.sg/avsfreewebinar to sign-up!',
                    }]
            }
            ]
        },
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt bottom-circle',
            txt: '',
        }
    ],
}

export const wapSection071 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-section',
    className: 'wap-section-071',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654210620/templates/Capture_cf4mgg.png',
    cmps: [
        {
            id: utilService.makeId(16),
            type: 'txt',
            className: 'txt title',
            txt: 'About the Webinar'
        },
        {
            id: utilService.makeId(16),
            type: 'container',
            className: 'txt-container',
            cmps: [
                {
                    id: utilService.makeId(16),
                    type: 'container',
                    className: 'txt-container-second',
                    cmps: [{
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt description',
                        txt: 'This intensive training combines thousands of hours of practical research, years of experience in growing Instagram, and the coaching power of two social media experts rolled into one easy investment.'
                    }, {
                        id: utilService.makeId(16),
                        type: 'txt',
                        className: 'txt subtitle',
                        txt: `If you've looked at Instagram coaching programs and e-courses which cost hundreds of dollars and struggled to commit to that amount financially, this is a great opportunity to learn SO MUCH in one short two hour live seminar`
                    }
                    ]
                },
                {
                    id: utilService.makeId(16),
                    type: 'img',
                    url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654199983/templates/unnamed_e30lyj.jpg',
                    className: 'wap-section-07-img',
                    style: {
                        borderRadius: '',
                        border: '',
                        boxShadow: ''
                    }
                }
            ],
        }
    ],
    isPublic: true
}