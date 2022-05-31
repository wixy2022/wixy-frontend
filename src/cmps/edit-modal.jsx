import { useState } from "react"
import { wapService } from "../services/wap.service"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, activeCmp, onUpdateWap }) => {

    const title = 'Themes'

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

    return <section className="edit-modal" style={{ left: posX, top: posY }}>
        <header>
            <h2>{title}</h2>
            <div className="close-btn" onClick={() => setIsEditModalOpen(false)}><button>✖</button></div>
        </header>
        <main>
            {/* {isList && list.map((item, idx) => <div key={idx} className={`list-item ${item}`} onClick={(ev) => onClassName(ev, item)}>
                <span className={`img-container ${item}`}></span><span>{item}</span>
            </div>)} */}
            {getThemeModal()}
        </main>
    </section>
}