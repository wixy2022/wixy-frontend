import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { EditModal } from "./edit-modal"

export const EditButtons = ({ cmpType, activeCmpSettings, onUpdateWap, scrollHeight, editorLeft }) => {

    const { activeCmp } = useSelector(storeState => storeState.wapModule)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editModalPosition, setEditModalPosition] = useState(null)

    // useEffect(() => {
    //     if (activeCmp) {
    //         cmp = { ...activeCmp.cmp }
    //     }
    // }, [activeCmp])

    if (!activeCmp) return
    const { cmp, target, editorOffsetLeft, editorScrollTop } = activeCmp

    const getActions = cmpType => {
        const getDetails = (type) => {
            switch (type) {
                case 'theme': return { type: 'theme', title: 'Theme', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653747364/icons/theme-icon_aoick6.png' }
                case 'color': return { type: 'color', title: 'Change Color', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653592961/icons/color_kjmbom.png' }
                case 'txtDecoration': return { type: 'txtDecoration', title: 'Change Decoration', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653676964/icons/textDecoration_p7ttgd.png' }
                case 'href': return { type: 'href', title: 'Change Link' }
                case 'img': return { type: 'img', title: 'Change Picture', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653676914/icons/img-url_wtsr9e.png' }
                case 'borderRadius': return { type: 'borderRadius', title: 'Change border shape', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653676954/icons/border-radius_k0jugr.png' }
                case 'clone': return { type: 'clone', title: 'Duplicate', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653598367/icons/copy_exfrdo.png' }
                case 'delete': return { type: 'delete', title: 'Delete', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653598367/icons/trash_egjl8h.png' }
                default: return ''
            }
        }

        switch (cmpType) {
            case 'txt': return [getDetails('theme'), getDetails('color'), getDetails('txtDecoration'), getDetails('delete'), getDetails('borderRadius')]
            case 'container-draggable': return [getDetails('theme'), getDetails('clone'), getDetails('delete')]
            case 'anchor': return [getDetails('theme'), getDetails('color'), getDetails('txtDecoration'), getDetails('href'), getDetails('borderRadius')]
            case 'img': return [getDetails('theme'), getDetails('img'), getDetails('borderRadius')]
            default: return ''
        }
    }

    const onOpenEditModal = (ev, action) => {
        ev.stopPropagation()

        /* FIX - 250 is the width of the modal */
        /* FIX - 280 = height of modal 200 and 80 i've added */

        let posX = ev.clientX - editorOffsetLeft //mouse position less editor posX
        if (window.innerWidth < 500) posX = '' //if mobile, CSS will make it centered to screen
        else if (posX - 250 <= 16) posX += 250 //if it cant open to the left, it will open to the right

        let posY = ev.clientY + editorScrollTop //mouse position plus editor scroll position
        if (posY - editorScrollTop - 280 <= 16) posY += 280 // if it cant open above, it will open below

        setEditModalPosition({ posX, posY })

        /* FIX - ADD BUTTONS BY ACTION */

        setIsEditModalOpen(true)
    }

    const onClick = (ev, action) => {
        ev.stopPropagation()
        if (action === 'delete') return onUpdateWap('remove')
        onOpenEditModal(ev, action)
    }

    //Positioning the modal
    const x = target.getBoundingClientRect().x
    const y = target.getBoundingClientRect().y
    const width = target.offsetWidth
    const height = target.offsetHeight
    if (x === 0 && y === 0) return

    const left = x + (width / 2) - editorOffsetLeft

    const top = editorScrollTop + y - 80
    const style = { left, top, bottom: '' }
    if (window.innerHeight < height) style.top = 80
    else if (top < 80) {
        style.top += height + 40
    }

    //Adding buttons
    const actions = getActions(cmp.type)

    return <>
        <div className="edit-buttons up-screen" style={{ ...style }}>
            {actions?.map(action => <div className="img-container" title={action.title}
                key={action.type} onClick={(ev) => onClick(ev, action.type)}>
                <img title={action.title} src={action.img}></img>
            </div>)}
        </div>
        {isEditModalOpen && <EditModal
            {...editModalPosition}
            // editMode={editMode}
            // elementType={elementType}
            onUpdateWap={onUpdateWap}

            target={target}
            setIsEditModalOpen={setIsEditModalOpen}
            editMode='themes'
            cmp={cmp}
        />}
    </>
}