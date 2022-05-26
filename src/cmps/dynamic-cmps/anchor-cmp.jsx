export const AnchorCmp = ({ cmp }) => {
    /* FIX - add options */
    return <a className={`anchor-cmp ${cmp.className}`} href={cmp.url} target="_blank" style={cmp.style}>{cmp.txt}</a>
}