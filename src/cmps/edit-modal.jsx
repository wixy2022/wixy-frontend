import { useState } from "react"
import { wapService } from "../services/wap.service"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, activeCmp, onUpdateWap }) => {

    const title = 'Themes'

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        const updatedClassName = activeCmp.className.replace(/theme-[^\s]+/g, '')
        // onActiveCmpUpdate('className', `${updatedClassName} theme-${value}`)
        onUpdateWap('className', `${updatedClassName} theme-${value}`)
    }

    /* FIX - STATE SHOULD BE DEFINED IN THE SERVICE */
    const [themeList, setThemeList] = useState([
        { title: 'classic', themes: ['classic-1', 'classic-2', 'classic-3'], isActive: false },
        { title: 'dark', themes: ['one', 'two', 'three'], isActive: false },
        { title: 'dramatic', themes: ['dramatic-1', 'dramatic-2', 'dramatic-3'], isActive: false },
        { title: 'festive', themes: ['festive-1', 'festive-2', 'festive-3', 'festive-4'], isActive: false },
        { title: 'light', themes: ['one', 'two', 'three', 'four'], isActive: false }
    ])

    const onOpenThemeHeader = (item) => {
        const updatedList = themeList.map(currItem => currItem.title === item.title ? { ...item, isActive: !item.isActive } : currItem)
        setThemeList(updatedList)
    }

    const getThemeModal = () => {
        /* FIX - not all should be txt-cmp (line 39) - make it dynamic */
        return <ul className="theme-modal">
            {themeList.map((item, idx) =>
                <li key={idx} className={`list-item ${item.title}`}>
                    <header className={item.isActive ? 'active' : ''} onClick={() => onOpenThemeHeader(item)}>
                        <span className={`img-container ${item.title}`}></span><span>{item.title}</span>
                    </header>
                    <main>
                        {item.themes.map((theme, idx) =>
                            <div key={idx} className={`txt-cmp ${theme}`} onClick={(ev) => onClassName(ev, theme)}>Button</div>)}
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