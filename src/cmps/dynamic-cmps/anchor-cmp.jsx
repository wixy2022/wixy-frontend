export const AnchorCmp = ({ cmp }) => {
    /* FIX - add options */
    return <section className="btn-cmp">
        <a href={cmp.url} style={cmp.style}>{cmp.txt}</a>
    </section>
}