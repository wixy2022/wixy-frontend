export const VideoCmp = ({ cmp, isPublish, onSelectActiveCmp }) => {

    if (isPublish) return <section className={`video-cmp ${cmp.className}`}>
        <iframe
            src={cmp.url}
            style={cmp.style}
            display="initial"
            allowFullScreen
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
        ></iframe>
    </section>


    return <section className={`video-cmp ${cmp.className}`} style={{ ...cmp.style }} >
        <div className='video-screen' onClick={ev => { ev.stopPropagation(); onSelectActiveCmp(cmp, ev.target) }}></div>
        <iframe
            src={cmp.url}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </section >
}