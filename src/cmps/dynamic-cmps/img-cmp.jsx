export const ImgCmp = ({ cmp }) => {
    /* FIX - add options */
    return <section className="img-cmp">
        <img src={cmp.url} style={cmp.style} alt={cmp.alt} />
    </section>
}