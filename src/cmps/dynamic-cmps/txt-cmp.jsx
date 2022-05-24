export const TxtCmp = ({ cmp }) => {
    /* FIX - add options */
    return <section className="txt-cmp">
        <p style={cmp.style}>{cmp.txt}</p>
    </section>
}