export const AnchorCmp = ({ cmp, onSelectActiveCmp }) => {
    
    return <a className={`anchor-cmp up-screen ${cmp.className}`}
        href={cmp.url} target="_blank" style={cmp.style}
        onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
        {cmp.txt}
    </a>
}