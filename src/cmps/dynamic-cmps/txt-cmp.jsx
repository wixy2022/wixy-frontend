export const TxtCmp = ({ cmp }) => {
    /* FIX - add options */
    return <pre className={`txt-cmp ${cmp.className}`} style={cmp.style}>{cmp.txt}</pre>

}