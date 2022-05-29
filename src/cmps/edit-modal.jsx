export const EditModal = ({ posX, posY, setIsEditModalOpen, onActiveCmpUpdate, activeCmp }) => {

    const isList = true
    const title = 'Themes'
    const list = ['classic', 'dark', 'dramatic', 'festive', 'light'] /* FIX - THIS SHOULDN'T BE HERE */

    const onClassName = (ev, value) => {
        ev.stopPropagation()
        const updatedClassName = activeCmp.className.replace(/theme-[^\s]+/g)
        console.log('updatedClassName', updatedClassName)
        onActiveCmpUpdate('className', `${updatedClassName} theme-${value}`)
        console.log('ONCLASSNAME', )
    }

    /* FIX - change idx to id */
    /* FIX - islist should be by the object we send */

    return <section className="edit-modal" style={{ left: posX, top: posY }}>
        <header>
            <h2>{title}</h2>
            <div className="close-btn" onClick={() => setIsEditModalOpen(false)}><button>✖</button></div>
        </header>
        <main>
            {isList && list.map((item, idx) => <div key={idx} className={`list-item ${item}`} onClick={(ev) => onClassName(ev, item)}>
                <span className={`img-container ${item}`}></span><span>{item}</span>
            </div>)}
        </main>
    </section>
}