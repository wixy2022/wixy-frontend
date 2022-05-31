export const EditButtons = ({ cmpType, activeCmpPos, onOpenEditModal, onUpdateWap, scrollHeight, editorLeft }) => {

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

    const onClick = (ev, action) => {
        if (action === 'delete') return onUpdateWap('remove')
        onOpenEditModal(ev, action)
    }

    //Positioning the modal
    if (activeCmpPos.x === 0 && activeCmpPos.y === 0) return

    const left = activeCmpPos.x + (activeCmpPos.width / 2) - editorLeft

    const top = scrollHeight + activeCmpPos.y - 80
    const style = { left, top, bottom: '' }
    if (window.innerHeight < activeCmpPos.height) style.top = 80
    else if (top < 80) {
        style.top += activeCmpPos.height + 40
    }

    //Adding buttons
    const actions = getActions(cmpType)

    return <div className="edit-buttons up-screen" style={{ ...style }}>
        {actions.map(action => <div className="img-container" title={action.title}
            key={action.type} onClick={(ev) => onClick(ev, action.type)}>
            <img title={action.title} src={action.img}></img>
        </div>)}
    </div>
}