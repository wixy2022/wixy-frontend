import { borderRadius } from "@mui/system"
import React, { useState } from "react"
import { wapService } from "../services/wap.service"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, activeCmp, onUpdateWap, editMode, elementType, setActiveCmp, activeCmpSettings }) => {
    const { borderRadius: borderRadiusInlineStyle, opacity: opacityInlineStyle } = activeCmp.style
    const { borderRadius: borderRadiusScss, opacity: opacityScss } = activeCmpSettings

    const [themeList, setThemeList] = useState(wapService.getThemeList(activeCmp.type))
    const [linkUrl, setLinkUrl] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [borderRadiusVal, setBorderRadiusVal] = useState('')
    const [opacityVal, setOpacityVal] = useState(100)
    // const [borderRadiusVal, setBorderRadiusVal] = useState(borderRadiusInlineStyle || borderRadiusScss || '')
    // const [opacityVal, setOpacityVal] = useState(opacityInlineStyle || opacityScss || 100)

    const title = editMode === "inline" ? 'Editor' : 'Themes'

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        const updatedClassName = activeCmp.className.replace(/theme-[^\s]+/g, '')
        // onActiveCmpUpdate('className', `${updatedClassName} theme-${value}`)
        // onUpdateWap('className', `${updatedClassName} ${value}`)
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
        const { textDecoration, fontWeight, fontStyle } = activeCmpSettings
        let valueToSet

        if (key === 'style') {
            switch (type) {
                case 'textDecoration':
                    if (!textDecoration ||
                        textDecoration !== 'underline' &&
                        activeCmp.style?.textDecoration !== 'underline') value = 'underline'
                    else value = 'normal'
                    break
                case 'fontWeight':
                    if (!fontWeight ||
                        fontWeight !== 'bold' &&
                        fontWeight < 700 &&
                        activeCmp.style?.fontWeight !== '800') value = '800'
                    else value = 'normal'
                    break
                case 'fontStyle':
                    if ((!fontStyle || fontStyle !== 'italic') &&
                        !activeCmp.style || activeCmp.style?.fontStyle !== 'italic') value = 'italic'
                    else value = 'normal'
                // default:
                // setBorderRadiusVal('')
                // setOpacityVal('')
            }

            valueToSet = { ...activeCmp.style, [type]: value }

        } else if (key === 'url') {
            valueToSet = value
            setLinkUrl('')
            setImgUrl('')
        }

        setActiveCmp({ ...activeCmp, [key]: valueToSet })
        onUpdateWap(key, valueToSet)
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
        const type = ev.target[0].name
        switch (type) {
            case 'url':
                return onSetProperty('url', linkUrl, 'url')
            case 'imgUrl':
                return onSetProperty('url', imgUrl, 'url')
            case 'imgUrl':
                return onSetProperty('url', imgUrl, 'url')
            case 'borderRadius':
                return onSetProperty('borderRadius', borderRadiusVal + '%', 'style')
            case 'opacity':
                return onSetProperty('opacity', opacityVal + '%', 'style')
        }
    }

    const getInput = (title, name, placeholder, value, type, min = '', max = '') => {
        console.log(name, 'GETINP')
        return <form className='link-edit-container' onSubmit={onSubmit} >
            <label><h3>{title}</h3>
                <input type={type} placeholder={placeholder} name={name} min={min} max={max}
                    value={value} onChange={handleChange} />
            </label>
        </form>
    }

    return <section className="edit-modal" style={{ left: posX, top: posY }}>
        <header>
            <h2>{title}</h2>
            <div className="close-btn" onClick={() => setIsEditModalOpen(false)}><button>✖</button></div>
        </header>
        {
            editMode === 'themes' && <main>
                {getThemeModal()}
            </main>
        }

        {editMode === 'inline' && elementType === 'txt' || elementType === 'link' && <main className="edit-modal-container">
            {getColorPalette('Text Color', 'color')} {/* TEXT-COLOR */}

            {getColorPalette('Text Background', 'backgroundColor')} {/* BCG-COLOR */}

            {getTxtStyleBtns()} {/* TEXT-DECORATION */}

            {elementType === 'link' && getInput('Link To', 'linkUrl', 'Add link here', linkUrl, 'text')} {/* LINK */}
        </main>
        }

        {editMode === 'inline' && elementType === 'img' && <main className="edit-modal-container">

            {getInput('Change Image', 'imgUrl', 'Url', imgUrl, 'text')} {/* IMG-URL */}

            {getInput('Border Radius', 'borderRadius', 'Border Radius Size', borderRadiusVal, 'number', 0, 50)} {/* / BORDER-RADIUS */}

            {getInput('Opacity', 'opacity', 'Image Opacity', opacityVal, 'number', 0, 100)} {/* / OPACITY */}

        </main>
        }

    </section >
}