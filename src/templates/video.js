import { utilService } from "../services/util.service"

export const wapVideo01 = {
    id: utilService.makeId(16),
    type: 'container-draggable',
    category: 'wap-video',
    className: 'wap-video-01',
    imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654616515/templates/wap-video01_xdfspw.jpg',
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
            url: 'https://www.youtube.com/embed/IUwqf08-FKU',
            className: 'video-cmp-01',
        }
    ],
}


