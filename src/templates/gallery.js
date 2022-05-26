import { utilService } from "../services/util.service"

export const wapGallery01 = {
    id: utilService.makeId(),
    type: 'container-draggable',
    category: 'wap-gallery',
    theme: 'dramatic',
    className: 'wap-gallery-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580956/templates/gallery-t1_gbrpql.png',
    cmps: [
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580996/templates/gallery5_jjaep9.jpg',
            className: 'dramatic-gallery-img',
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580995/templates/gallery2_ncaykr.jpg',
            className: 'dramatic-gallery-img',
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580996/templates/gallery3_my49er.jpg',
            className: 'dramatic-gallery-img',
        },
        {
            id: utilService.makeId(),
            type: 'img',
            url: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653580996/templates/gallery4_vbz7li.jpg',
            className: 'dramatic-gallery-img',
        }
    ]
}