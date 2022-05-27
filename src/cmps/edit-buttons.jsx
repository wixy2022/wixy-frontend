export function EditButtons(props) {

    const getActions = componentType => {
        switch (componentType) {
            case 'txt': return [{ type: 'color', title: 'Change Color' }, { type: 'txtDecoration', title: 'Change Decoration' }, { type: 'delete', title: 'delete' }]
            case 'container-draggable': return [{ type: 'clone', title: 'Duplicate Box' }, { type: 'delete', title: 'delete' }]
            case 'anchor': return [{ type: 'color', title: 'Change Color' }, { type: 'txtDecoration', title: 'Change Decoration' }, { type: 'href', title: 'Change Link' }]
            case 'img': return [{ type: 'imgUrl', title: 'Change Picture' }, { type: 'borderRadius', title: 'Change Radius' }]
            default: return ''
        }
    }

    const getUrl = actionType => {
        // console.log(actionType)
        switch (actionType) {
            case 'color': return 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653592961/icons/color_kjmbom.png'
            case 'clone': return 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653598367/icons/copy_exfrdo.png'
            case 'delete': return 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653598367/icons/trash_egjl8h.png'
            case 'txtDecoration': return 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653676964/icons/textDecoration_p7ttgd.png'
            case 'imgUrl': return 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653676914/icons/img-url_wtsr9e.png'
            case 'borderRadius': return 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653676954/icons/border-radius_k0jugr.png'
            default: return ''
        }
    }

    // const actions = [{ type: 'color', title: 'Change Color' }, { type: 'clone', title: 'Duplicate Box' }, { type: 'delete', title: 'delete' }, { type: 'txtDecoration', title: 'Change Decoration' }, { type: 'imgUrl', title: 'Change Picture' }, { type: 'borderRadius', title: 'Change Radius' }]
    const actions = getActions(props.componentType)
    return <div className="edit-buttons up-screen">
        {actions.map(action => <div className="img-container" title={action.title} key={action.type}><img title={action.title} src={getUrl(action.type)}></img></div>)}
    </div>
}



