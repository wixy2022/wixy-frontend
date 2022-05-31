
export const ImgCmp = ({ cmp, isPublish ,onSelectActiveCmp }) => {


    if (isPublish) return <section className={`img-cmp ${cmp.className}`}>
          <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>

    return <section className={`img-cmp ${cmp.className}`}
        onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>

}