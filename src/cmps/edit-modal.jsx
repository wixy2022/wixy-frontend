import { useState } from "react"

export const EditModal = () => {

    const isList = true
    const title = 'Themes'
    const list = ['classic', 'dark', 'dramatic', 'festive', 'light'] /* FIX - THIS SHOULDN'T BE HERE */

    /* FIX - change idx to id */
    /* FIX - islist should be by the object we send */

    return <section className="edit-modal">
        <header>
            <h2>{title}</h2>
            <div className="close-btn"><button>✖</button></div>
        </header>
        <main>
            {isList && list.map((item, idx) => <div key={idx} className={`list-item ${item}`}>
                <span className={`img-container ${item}`}></span><span>{item}</span>
            </div>)}
        </main>
    </section>
}