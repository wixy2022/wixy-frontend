export const TxtCmp = ({ cmp }) => {
    /* FIX - add options */
    return <section className="txt-cmp">
        <pre style={cmp.style}>{cmp.txt}</pre>
    </section>
}