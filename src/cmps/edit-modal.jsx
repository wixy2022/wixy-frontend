import { borderRadius } from "@mui/system"
import React, { useState } from "react"
import { wapService } from "../services/wap.service"
import { useSelector } from "react-redux"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, onUpdateWap, elementType, setActiveCmp, activeCmpSettings, updateActiveCmp, target, editModalMode }) => {

    const { activeCmp } = useSelector(storeState => storeState.wapModule)

    const [themeList, setThemeList] = useState(wapService.getThemeList(activeCmp.type))
    const [linkUrl, setLinkUrl] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [borderRadiusVal, setBorderRadiusVal] = useState(getComputedStyle(target).borderRadius)
    const [opacityVal, setOpacityVal] = useState(getComputedStyle(target).opacity * 100)
 
    const { type: editMode } = editModalMode

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        let updatedClassName = activeCmp.className.replace(/\stheme-[^\s]+/g, '') + ` ${value}`
        updateActiveCmp({ ...activeCmp, className: updatedClassName.trim(), style: {} })

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

    const getYoutubeUrl = (url) => {
        if (!url || !url.includes('youtube.com/watch?v=')) return
        const params = url.split('?')[1]
        const searchParams = new URLSearchParams(params)
        const vidId = searchParams.get('v')
        if (!vidId) return

        return `https://www.youtube.com/embed/${vidId}`
    }

    const onSetProperty = (type, value, key = 'style') => {

        if (type === 'clear') {
            updateActiveCmp({ ...activeCmp, style: {} })
            target.style = {}
            return
        }

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

            if (type === 'opacity' || type === 'borderRadius') value += '%'
            valueToSet = { ...activeCmp.style, [type]: value }
            updateActiveCmp({ ...activeCmp, style: valueToSet })

            if (type === 'opacity' || type === 'borderRadius') target.children[0].style[type] = value
            else target.style[type] = value

        } else if (key === 'url') {
            if (type === 'videoUrl') {
                value = getYoutubeUrl(value)
                target.parentElement.children[1].src = value
            } else if (type === 'imgUrl') {
                target.children[0].src = value
            } else {
                target.src = value
            }
            updateActiveCmp({ ...activeCmp, url: value })
            // valueToSet = value
            setLinkUrl('')
            setImgUrl('')
            setVideoUrl('')
        }

        // setActiveCmp({ ...activeCmp, [key]: valueToSet })
        // onUpdateWap(key, valueToSet)
    }

    const getColorPalette = (title, type) => {
        const colors = ['#141010', '#42240c', '#c81912', '#295f4e', '#272e6e', '#7932bb', '#96820c', '#FFFFFF', '#c19032', '#ff9234', '#7ed3b2', '#80baf1', '#FDCFE8', '#f1d94c']
        return <div>
            <h4>{title}</h4>
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
        </div>
    }

    const getTxtStyleBtns = () => {
        const btns = [
            {
                type: 'textDecoration',
                value: 'underline',
                src: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654378162/icons/underline_uz7hwx.png'
            },
            {
                type: 'fontWeight',
                value: '800',
                src: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654378162/icons/bold_juctrp.png'
            },
            {
                type: 'fontStyle',
                value: 'italic',
                src: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1654378162/icons/italic_paef2n.png'
            }
        ]
        return <div className='edit-decoration-container'>
            <h4>Decoration</h4>
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
        else if (name === 'videoUrl') setVideoUrl(value)
        else if (name === 'borderRadius') { setBorderRadiusVal(value); onSetProperty(name, value, 'style') }
        else if (name === 'opacity') { setOpacityVal(value); onSetProperty(name, value, 'style') }
    }

    // const onSubmit = (ev) => {
    //     ev.preventDefault()
    //     const { name } = ev.target[0]
    //     let type, value, key

    //     switch (name) {
    //         case 'url':
    //         case 'imgUrl':
    //             type = 'url'
    //             value = name === 'url' ? linkUrl : imgUrl
    //             key = 'url'
    //             break
    //         // case 'borderRadius':
    //         //     type = 'borderRadius'
    //         //     value = borderRadiusVal + '%'
    //         //     key = 'style'
    //         //     break
    //         // case 'opacity':
    //         //     type = 'opacity'
    //         //     value = opacityVal + '%'
    //         //     key = 'style'
    //         //     break
    //     }
    //     onSetProperty(type, value, key)
    // }

    // const getInput = (title, name, placeholder, value, type, min = '', max = '') => {
    //     return <form className='link-edit-container' onSubmit={onSubmit} >
    //         <label><h4>{title}</h4>
    //             <input type={type} placeholder={placeholder} name={name} min={min} max={max}
    //                 value={value} onChange={handleChange} />
    //         </label>
    //     </form>
    // }

    const getInputRange = (title, name, placeholder, value, min = '', max = '') => {
        const getValue = (name, value) => {
            if (name === 'borderRadius') return `${value}%`
            return value
        }

        const getClearValue = (value) => {
            if ((value + '').includes('px')) value = value.replace(/px/g, '')
            if ((value + '').includes('%')) value = value.replace(/\%/g, '')
            return Math.floor(value)
        }

        const clearedValue = getClearValue(value)

        return <label className='edit-modal-range-input'><h4>{title}</h4>
            <div>
                <input type='range' placeholder={placeholder} name={name} min={min} max={max}
                    value={clearedValue} onChange={handleChange} title={value} />
                <span>{getValue(name, clearedValue)}</span>
            </div>
        </label>
    }

    const getInputUrl = (title, name, placeholder, value, type, min = '', max = '') => {
        const onSubmit = (ev) => {
            ev.preventDefault()
            let { name } = ev.target[0]
            switch (name) {
                case 'url':
                    value = linkUrl
                    break
                case 'imgUrl':
                    value = imgUrl
                    name = 'url'
                    break
                case 'videoUrl':
                    value = videoUrl
            }

            onSetProperty(name, value, 'url')
        }

        return <form className='edit-modal-url-input' onSubmit={onSubmit} >
            <label><h4>{title}</h4>
                <div>
                    <input type={type} placeholder={placeholder} name={name} min={min} max={max}
                        value={value} onChange={handleChange} />
                    <button>Go</button>
                </div>
            </label>
        </form>
    }

    return <section className="edit-modal" style={{ left: posX, top: posY }}>
        <header>
            <div>
                <h2>{editModalMode.title}</h2>
                <button className="clear-btn" onClick={(ev) => editMode === 'theme' ? onClassName(ev, '') : onSetProperty('clear', {})}>clear</button>
            </div>
            <div className="close-btn" onClick={() => setIsEditModalOpen(false)}><button>✖</button></div>
        </header>
        {
            editMode === 'theme' && <main>
                {getThemeModal()}
            </main>
        }

        {editMode === 'style' && (activeCmp.type === 'txt' || activeCmp.type === 'anchor') && <main className="edit-modal-container">
            {getTxtStyleBtns()} {/* TEXT-DECORATION */}

            {activeCmp.type === 'anchor' && getInputUrl('Link To', 'linkUrl', 'Enter URL', linkUrl, 'text')} {/* LINK */}

            {getColorPalette('Text Color', 'color')} {/* TEXT-COLOR */}

            {getColorPalette('Background Color', 'backgroundColor')} {/* BCG-COLOR */}
        </main>
        }

        {editMode === 'style' && activeCmp.type === 'img' && <main className="edit-modal-container">
            {getInputUrl('Change Image', 'imgUrl', 'Enter URL', imgUrl, 'text')} {/* IMG-URL */}
            {/* {getInput('Border Radius', 'borderRadius', 'Border Radius Size', borderRadiusVal, 'number', 0, 50)} / BORDER-RADIUS */}
            {getInputRange('Border Radius', 'borderRadius', 'Border Radius Size', borderRadiusVal, 0, 50)} {/* / BORDER-RADIUS */}
            {getInputRange('Opacity', 'opacity', 'Image Opacity', opacityVal, 0, 100)} {/* / OPACITY */}

        </main>
        }

        {editMode === 'style' && activeCmp.type === 'video' && <main className="edit-modal-container">
            {getInputUrl('Change Video', 'videoUrl', 'Enter URL', videoUrl, 'text')} {/* IMG-URL */}
            {/* {getInput('Border Radius', 'borderRadius', 'Border Radius Size', borderRadiusVal, 'number', 0, 50)} / BORDER-RADIUS */}
        </main>
        }

        {editMode === 'style' && activeCmp.type.includes('container') && <main className="edit-modal-container">
            {getColorPalette('Background Color', 'backgroundColor')} {/* BCG-COLOR */}
        </main>}

    </section >
}