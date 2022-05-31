export const ImgCmp = ({ cmp, onSelectActiveCmp }) => {

    return <section className={`img-cmp ${cmp.className}`}
        onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>
}