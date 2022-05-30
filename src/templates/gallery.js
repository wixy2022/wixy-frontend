import { utilService } from "../services/util.service"

// to change only for display at demo
export const wapGallery01 = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-gallery',
    className: 'wap-gallery-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653583654/templates/gallery-t1_sqxhz2.jpg ',
    cmps: [
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580996/templates/gallery5_jjaep9.jpg',
            className: 'wap-01-gallery-img',
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580995/templates/gallery2_ncaykr.jpg',
            className: 'wap-01-gallery-img',
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580996/templates/gallery3_my49er.jpg',
            className: 'wap-01-gallery-img',
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580996/templates/gallery4_vbz7li.jpg',
            className: 'wap-01-gallery-img',
        }
    ]

}