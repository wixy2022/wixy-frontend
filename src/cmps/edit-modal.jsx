import { wapService } from "../services/wap.service"
import { useEffect, useRef, useState } from "react"

export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, activeCmp, onUpdateWap, editMode, setActiveCmp, activeCmpSettings }) => {

    const isList = true
    const title = editMode === "inline" ? 'Editor' : 'Themes'
    const list = ['classic', 'dark', 'dramatic', 'festive', 'light'] /* FIX - THIS SHOULDN'T BE HERE */

    const colors = ['#141010', '#FFFFFF', '#42240c', '#835806', '#295f4e', '#6db193', '#272e6e', '#7ed3b2', '#c81912', '#ff9234', '#ffcd3c', '#FDCFE8']

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        const updatedClassName = activeCmp.className.replace(/theme-[^\s]+/g, '')
        // onActiveCmpUpdate('className', `${updatedClassName} theme-${value}`)
        onUpdateWap('className', `${updatedClassName} theme-${value}`)
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
        {editMode === 'themes' && <main>
            {isList && list.map((item, idx) => <div key={idx} className={`list-item ${item}`} onClick={(ev) => onClassName(ev, item)}>
                <span className={`img-container ${item}`}></span><span>{item}</span>
            </div>)}
        </main>}
        {editMode === 'inline' && <main>
            {isList && <div className="edit-modal-container">

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
                        <span className='edit-icon underline' onClick={() => onSetStyle('textDecoration', 'underline')}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654037335/icons/underline-icon_eavmff.jpg" /></span>
                        <span className='edit-icon' onClick={() => onSetStyle('fontWeight', 'bold')}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654036866/icons/bold-icon_w3zbi0.jpg" /></span>
                        <span className='edit-icon' onClick={() => onSetStyle('fontStyle', 'italic')}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654036866/icons/italic-icon_lyw0w2.jpg" /></span>
                    </div>
                </div>

                {/* //////////////////////////////////////////////////////////////////// */}

                {/* TEXT-COLOR */}
                {/* <h3>Text color</h3>
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
                </div> */}

                {/* TEXT-DECORATION */}
                {/* <h3>Decoration</h3>
                <div className='edit-decoration-container'>
                    <span className='edit-icon' onClick={() => onSetStyle('textDecoration', 'none')}></span>
                    <span className='edit-icon' onClick={() => onSetStyle('textDecoration', 'overline')}></span>
                    <span className='edit-icon' onClick={() => onSetStyle('textDecoration', 'underline')}></span>
                </div> */}

                {/* <h3>Weight</h3>
                <div className='edit-style-container'>
                    <span className='edit-icon' onClick={() => onSetStyle('font-weight', 'bold')}></span>
                    <span className='edit-icon' onClick={() => onSetStyle('font-weight', 'normal')}></span>
                </div> */}

                {/* <h3>Style</h3>
                <div className='edit-style-container'>
                    <span className='edit-icon' onClick={() => onSetStyle('fontStyle', 'normal')}></span>
                    <span className='edit-icon' onClick={() => onSetStyle('fontStyle', 'italic')}></span>
                </div> */}
            </div>}
        </main>}
    </section>
}