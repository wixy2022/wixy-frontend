import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { EditModal } from "./edit-modal"

import { setActiveCmp } from "../store/actions/wap.action"

export const EditButtons = React.memo(({ onUpdateWap }) => {

    const { activeCmp, activeCmpPos } = useSelector(storeState => storeState.wapModule)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editModalPosition, setEditModalPosition] = useState(null)
    const [editModalMode, setEditModalMode] = useState(null)
    const [buttonsPosition, setButtonsPosition] = useState({})

    const dispatch = useDispatch()

    //Positioning the modal
    const getButtonsPosition = () => {
        const { target, editorOffsetLeft, editorScrollTop } = activeCmpPos
        const x = target.getBoundingClientRect().x
        const y = target.getBoundingClientRect().y
        const width = target.offsetWidth
        const height = target.offsetHeight
        if (x === 0 && y === 0) return

        const left = x + (width / 2) - editorOffsetLeft
        // const left = x + editorOffsetLeft

        const top = editorScrollTop + y - 80
        const style = { left, top, bottom: '' }
        if (window.innerHeight - 50 < height) style.top = 40 + editorScrollTop
        else if (top < 80) {
            style.top += height + 40
        }

        return style
    }

    useEffect(() => {
        setIsEditModalOpen(false)
        setButtonsPosition(activeCmpPos ? getButtonsPosition() : {})
    }, [activeCmpPos])

    if (!activeCmp || !activeCmpPos) return
    const { editorOffsetLeft, editorScrollTop } = activeCmpPos
    let { target } = activeCmpPos
    if (activeCmp.type === 'img') target = target.parentElement
    target.classList.add('active-cmp')

    const getActions = cmpType => {
        const getDetails = (type) => {
            switch (type) {
                case 'theme': return { type: 'theme', title: 'Themes', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654205439/icons/stars_xapg9v.png' }
                case 'style': return { type: 'style', title: 'Custom style', img: "https://res.cloudinary.com/drpqhjyvk/image/upload/v1654204281/icons/paintbrush_zraxt1.png" }
                case 'clone': return { type: 'clone', title: 'Duplicate', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653598367/icons/copy_exfrdo.png' }
                case 'delete': return { type: 'delete', title: 'Delete', img: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653598367/icons/trash_egjl8h.png' }
                default: return ''
            }
        }

        switch (cmpType) {
            case 'txt': return [getDetails('theme'), getDetails('style'), getDetails('delete')]
            case 'anchor': return [getDetails('theme'), getDetails('style'), getDetails('delete')]
            case 'img': return [getDetails('theme'), getDetails('style'), getDetails('delete')]
            case 'video': return [getDetails('style'), getDetails('delete')]
            case 'container-draggable': return [getDetails('theme'), getDetails('style'), getDetails('clone'), getDetails('delete')]
            case 'container': return [getDetails('theme'), getDetails('style'), getDetails('delete')]
            default: return ''
        }
    }

    const onOpenEditModal = (ev, action) => {
        ev.stopPropagation()

        /* 250 is the width of the modal */
        /* 325 = height of modal 245 and 80 i've added */

        let posX = ev.clientX - editorOffsetLeft //mouse position less editor posX
        if (window.innerWidth < 500) posX = '' //if mobile, CSS will make it centered to screen
        else if (posX - 250 <= 16) posX += 250 //if it cant open to the left, it will open to the right

        let posY = ev.clientY + editorScrollTop - 10 //mouse position plus editor scroll position
        // if (posY - editorScrollTop - 325 <= 16) posY += 325 // if it cant open above, it will open below

        // if it cant open above, it will open below
        // if it's container and style, the size of the editor is smaller since it has only background colors
        const offsetBottom = activeCmp.type.includes('container') && action.type === 'style' ? 195 : 325
        if (posY - editorScrollTop - offsetBottom <= 16) posY += offsetBottom

        setEditModalPosition({ posX, posY })

        setEditModalMode(action)
        setIsEditModalOpen(true)
    }

    const onClick = (ev, action) => {
        ev.stopPropagation()
        if (action.type === 'delete' || action.type === 'clone') return onUpdateWap(activeCmp, action.type)
        onOpenEditModal(ev, action)
    }

    const updateActiveCmp = (update) => {
        /* FIX - move to editor? */
        dispatch(setActiveCmp(update))
    }

    //Adding buttons
    const actions = getActions(activeCmp.type)

    return <>
        <div className="edit-buttons up-screen" style={{ ...buttonsPosition }}>
            {actions?.map(action => <div className="img-container" title={action.title}
                key={action.type} onClick={(ev) => onClick(ev, action)}>
                <img title={action.title} src={action.img}></img>
            </div>)}
        </div>
        {isEditModalOpen && <EditModal
            {...editModalPosition}

            target={target}
            setIsEditModalOpen={setIsEditModalOpen}
            editMode='themes'
            cmp={activeCmp}
            updateActiveCmp={updateActiveCmp}
            editModalMode={editModalMode}
        />}
    </>
})