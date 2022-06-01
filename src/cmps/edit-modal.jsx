import { useState } from "react"
import { wapService } from "../services/wap.service"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, activeCmp, onUpdateWap, editMode, setActiveCmp, activeCmpSettings }) => {

    const title = editMode === "inline" ? 'Editor' : 'Themes'
    const colors = ['#141010', '#FFFFFF', '#42240c', '#835806', '#295f4e', '#6db193', '#272e6e', '#7ed3b2', '#c81912', '#ff9234', '#ffcd3c', '#FDCFE8']

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        const updatedClassName = activeCmp.className.replace(/theme-[^\s]+/g, '')
        // onActiveCmpUpdate('className', `${updatedClassName} theme-${value}`)
        onUpdateWap('className', `${updatedClassName} ${value}`)
    }

    /* FIX - STATE SHOULD BE DEFINED IN THE SERVICE */
    const [themeList, setThemeList] = useState(wapService.getThemeList(activeCmp.type))

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

    /* FIX - change idx to id */
    /* FIX - isList should be by the object we send */

    const onSetStyle = (type, value) => {
        const { textDecoration, fontWeight, fontStyle } = activeCmpSettings

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
        }

        setActiveCmp({ ...activeCmp, style: { ...activeCmp.style, [type]: value } })
        onUpdateWap('style', { ...activeCmp.style, [type]: value })
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
        {editMode === 'inline' && <main className="edit-modal-container">
            {/* TEXT-COLOR */}
            <h3>Text color</h3>
            <div className='color-palette'>
                {colors.map((color, idx) => (
                    <span
                        className='color-ball'
                        key={idx}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                            onSetStyle('color', color)
                        }}
                    ></span>
                ))}
            </div>

            {/* BCG-COLOR */}
            <h3>Background color</h3>
            <div className='color-palette'>
                {colors.map((color, idx) => (
                    <span
                        className='color-ball'
                        key={idx}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                            onSetStyle('backgroundColor', color)
                        }}
                    ></span>
                ))}
            </div>

            {/* TEXT-DECORATION */}
            <div className='edit-decoration-container'>
                <h3>Decoration</h3>
                <div className="edit-btns">
                    <span className='edit-icon' onClick={() => onSetStyle('textDecoration', 'underline')}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654037335/icons/underline-icon_eavmff.jpg" /></span>
                    <span className='edit-icon' onClick={() => onSetStyle('fontWeight', 'bold')}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654036866/icons/bold-icon_w3zbi0.jpg" /></span>
                    <span className='edit-icon' onClick={() => onSetStyle('fontStyle', 'italic')}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654036866/icons/italic-icon_lyw0w2.jpg" /></span>
                </div>
            </div>
        </main>
        }
    </section >
}