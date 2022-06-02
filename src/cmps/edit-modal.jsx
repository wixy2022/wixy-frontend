import { borderRadius } from "@mui/system"
import React, { useState } from "react"
import { wapService } from "../services/wap.service"
import { useSelector } from "react-redux"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, onUpdateWap, elementType, setActiveCmp, activeCmpSettings, updateActiveCmp, target, editModalMode }) => {
    // console.log(activeCmp?.style, activeCmpSettings, 'initialOpacity')

    const { activeCmp } = useSelector(storeState => storeState.wapModule)

    const [themeList, setThemeList] = useState(wapService.getThemeList(activeCmp.type))
    const [linkUrl, setLinkUrl] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [borderRadiusVal, setBorderRadiusVal] = useState('')
    const [opacityVal, setOpacityVal] = useState(100)

    // const title = editMode === "inline" ? 'Editor' : 'Themes'

    const { type: editMode } = editModalMode

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        const updatedClassName = activeCmp.className.replace(/\stheme-[^\s]+/g, '') + ` ${value}`
        updateActiveCmp({ ...activeCmp, className: updatedClassName, style: {} })

        // onActiveCmpUpdate('className', `${updatedClassName} theme-${value}`)
        // onUpdateWap('className', `${updatedClassName} ${value}`)
        if (activeCmp.category) updatedClassName += ' ' + activeCmp.category
        target.className = `active-cmp ${activeCmp.type}-cmp ${updatedClassName}`
        target.style = ''
    }

    const onOpenThemeHeader = (item) => {
        const updatedList = themeList.map(currItem => currItem.title === item.title ? { ...item, isActive: !item.isActive } : currItem)
        setThemeList(updatedList)
    }

    const getThemeModal = () => {

        if (!Object.keys(themeList)) return

        const type = activeCmp.type
        let cmpClass = `${type}-cmp`
        if (cmpClass.includes('draggable')) cmpClass = cmpClass.replace('-draggable', '')

        let btnText = ''
        if (type === 'txt') btnText = 'Text'
        else if (type === 'anchor') btnText = 'Link'

        const style = btnText ? {} : { minHeight: '40px' }

        return <ul className="theme-modal">
            {themeList.map((item, idx) =>
                <li key={idx} className={`list-item ${item.title}`}>
                    <header className={item.isActive ? 'active' : ''} onClick={() => onOpenThemeHeader(item)}>
                        <span className={`img-container ${item.title}`}></span><span>{item.title}</span>
                    </header>
                    <main>
                        {item.themes.map((theme, idx) =>
                            <div key={idx} className={`${cmpClass} ${theme}`} style={style} onClick={(ev) => onClassName(ev, theme)}>{btnText}</div>)}
                    </main>
                </li>)}
        </ul>
    }

    const onSetProperty = (type, value, key = 'style') => {
        // const { textDecoration, fontWeight, fontStyle } = activeCmpSettings
        const textDecoration = getComputedStyle(target).textDecoration
        const fontWeight = getComputedStyle(target).fontWeight
        const fontStyle = getComputedStyle(target).fontStyle
        let valueToSet

        if (key === 'style') {
            switch (type) {
                case 'textDecoration':
                    if (!textDecoration ||
                        !textDecoration.includes('underline')
                        // textDecoration !== 'underline'
                        // && activeCmp.style?.textDecoration !== 'underline'
                    ) value = 'underline'
                    else value = 'none'
                    break
                case 'fontWeight':
                    if (!fontWeight ||
                        fontWeight !== 'bold' &&
                        fontWeight < 700
                        // && activeCmp.style?.fontWeight !== '800'
                    ) value = '800'
                    else value = 'normal'
                    break
                case 'fontStyle':
                    if ((!fontStyle || fontStyle !== 'italic')
                        //&& !activeCmp.style || activeCmp.style?.fontStyle !== 'italic'
                    ) value = 'italic'
                    else value = 'normal'
                // default:
                // setBorderRadiusVal('')
                // setOpacityVal('')
            }

            valueToSet = { ...activeCmp.style, [type]: value }
            updateActiveCmp({ ...activeCmp, style: valueToSet })
            if (type === 'opacity' || type === 'borderRadius') target.children[0].style[type] = value
            else target.style[type] = value

        } else if (key === 'url') {
            target.children[0].src = value
            updateActiveCmp({ ...activeCmp, url: value })
            // valueToSet = value
            setLinkUrl('')
            setImgUrl('')
        }

        // setActiveCmp({ ...activeCmp, [key]: valueToSet })
        // onUpdateWap(key, valueToSet)
    }

    const getColorPalette = (title, type) => {
        const colors = ['#141010', '#FFFFFF', '#42240c', '#835806', '#295f4e', '#6db193', '#272e6e', '#7ed3b2', '#c81912', '#ff9234', '#ffcd3c', '#FDCFE8']
        return <React.Fragment>
            <h3>{title}</h3>
            <div className='color-palette'>

                {colors.map((color, idx) => (
                    <span
                        className='color-ball'
                        key={idx}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                            onSetProperty(type, color)
                        }}
                    ></span>
                ))}
            </div>
        </React.Fragment>
    }

    const getTxtStyleBtns = () => {
        const btns = [
            {
                type: 'textDecoration',
                value: 'underline',
                src: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654037335/icons/underline-icon_eavmff.jpg'
            },
            {
                type: 'fontWeight',
                value: '800',
                src: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654036866/icons/bold-icon_w3zbi0.jpg'
            },
            {
                type: 'fontStyle',
                value: 'italic',
                src: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654036866/icons/italic-icon_lyw0w2.jpg'
            }
        ]
        return <div className='edit-decoration-container'>
            <h3>Decoration</h3>
            <div className="edit-btns">
                {btns.map((btn, idx) => {
                    return <span className='edit-icon' key={idx} onClick={() => onSetProperty(btn.type, btn.value)}><img src={btn.src} />
                    </span>
                })}
            </div>
        </div>
    }

    const handleChange = ({ target: { value, name } }) => {
        if (name === 'linkUrl') setLinkUrl(value)
        else if (name === 'imgUrl') setImgUrl(value)
        else if (name === 'borderRadius') setBorderRadiusVal(value)
        else if (name === 'opacity') setOpacityVal(value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        const { name } = ev.target[0]
        let type, value, key

        switch (name) {
            case 'url':
            case 'imgUrl':
                type = 'url'
                value = name === 'url' ? linkUrl : imgUrl
                key = 'url'
                break
            case 'borderRadius':
                type = 'borderRadius'
                value = borderRadiusVal + '%'
                key = 'style'
                break
            case 'opacity':
                type = 'opacity'
                value = opacityVal + '%'
                key = 'style'
                break
        }
        onSetProperty(type, value, key)
    }

    const getInput = (title, name, placeholder, value, type, min = '', max = '') => {
        return <form className='link-edit-container' onSubmit={onSubmit} >
            <label><h4>{title}</h4>
                <input type={type} placeholder={placeholder} name={name} min={min} max={max}
                    value={value} onChange={handleChange} />
            </label>
        </form>
    }

    return <section className="edit-modal" style={{ left: posX, top: posY }}>
        <header>
            <h2>{editModalMode.title}</h2>
            <div className="close-btn" onClick={() => setIsEditModalOpen(false)}><button>✖</button></div>
        </header>
        {
            editMode === 'theme' && <main>
                {getThemeModal()}
            </main>
        }

        {editMode === 'style' && (activeCmp.type === 'txt' || activeCmp.type === 'anchor') && <main className="edit-modal-container">
            {getColorPalette('Text Color', 'color')} {/* TEXT-COLOR */}

            {getColorPalette('Text Background', 'backgroundColor')} {/* BCG-COLOR */}

            {getTxtStyleBtns()} {/* TEXT-DECORATION */}

            {activeCmp.type === 'anchor' && getInput('Link To', 'linkUrl', 'Add link here', linkUrl, 'text')} {/* LINK */}
        </main>
        }

        {editMode === 'style' && activeCmp.type === 'img' && <main className="edit-modal-container">

            {getInput('Change Image', 'imgUrl', 'Enter URL and press Enter', imgUrl, 'text')} {/* IMG-URL */}

            {getInput('Border Radius', 'borderRadius', 'Border Radius Size', borderRadiusVal, 'number', 0, 50)} {/* / BORDER-RADIUS */}

            {getInput('Opacity', 'opacity', 'Image Opacity', opacityVal, 'number', 0, 100)} {/* / OPACITY */}

        </main>
        }

    </section >
}